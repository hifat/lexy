การวิเคราะห์ว่า binary `/rest-api` มีอะไร **ฝังอยู่ภายใน (embedded)** หรือเปล่านั้น เราสามารถใช้เทคนิคหลากหลายแบบตามระดับความลึกของการเจาะ เช่น:

---

## 🔍 1. ใช้ `strings` ดึงข้อมูลพื้นฐาน

```bash
strings rest-api | less
```

### สิ่งที่มักจะเห็น:

* URL, endpoint, SQL statement
* Secret หรือ token ที่ hardcoded
* Path ของไฟล์
* Debug message
* ค่า environment variable

🟡 **ถ้าเจออะไรแบบนี้:**

```
DB_PASSWORD=supersecret123
https://api.payment.com/secret_key=abc
SELECT * FROM users WHERE ...
```

แสดงว่ามี **ข้อมูลสำคัญหลุดเข้าไปใน binary** แล้ว

---

## 🧠 2. วิเคราะห์ด้วย `go tool` (สำหรับ Go Binary)

```bash
go version rest-api
go tool nm rest-api | less     # ดู symbol ทั้งหมด
go tool objdump rest-api       # disassemble ทั้งหมด
```

### ดูว่า binary ยังมี debug info อยู่หรือไม่:

```bash
file rest-api
```

**ถ้าเห็นว่า:**

```
not stripped
```

หมายถึง binary ยังมี symbol เช่นชื่อ function, variable → ช่วยให้แฮกเกอร์ reverse ได้ง่ายขึ้น

แต่ในกรณีของคุณ คุณได้ใส่ `-ldflags="-w -s"` แล้ว:

* `-s`: ลบ symbol table
* `-w`: ลบ DWARF debugging information
  **→ ปลอดภัยขึ้น** ✅

---

## 🧩 3. หา embedded files (เช่น embed.FS)

ถ้าใช้ Go 1.16+ แล้วมีการใช้ `//go:embed` → ไฟล์อาจฝังไปใน binary

### วิธีดู:

```bash
strings rest-api | grep -E '\.html|\.json|\.yaml|\.env|\.pem|\.key|\.txt'
```

ถ้าเจอชื่อไฟล์พวกนี้แปลว่าอาจ embed ไปใน binary แล้ว เช่น:

```
templates/index.html
config/dev.env
```

---

## 🔒 4. ใช้ Static Binary Scanner (Gosec)

ติดตั้ง [gosec](https://github.com/securego/gosec):

```bash
go install github.com/securego/gosec/v2/cmd/gosec@latest
```

แล้วรัน:

```bash
gosec ./...
```

📌 วิเคราะห์ source code ว่ามี pattern ที่เสี่ยงมั้ย เช่น:

* ใช้ `os/exec` แบบไม่ sanitize input
* ไม่ validate input
* ใช้ crypto ไม่ปลอดภัย

---

## 🔬 5. ใช้เครื่องมือ reverse engineering (แฮกจริง)

### ถ้าอยากเล่นแบบจริงจัง:

* [Ghidra](https://ghidra-sre.org/) – Reverse แบบ GUI
* [Binwalk](https://github.com/ReFirmLabs/binwalk) – ตรวจหาไฟล์ที่ embed อยู่ใน binary
* `rizin` / `radare2` – สำหรับแงะ binary go ที่ซับซ้อน

---

## ✅ สิ่งที่ควรตรวจเวลาแงะ Binary Go

| สิ่งที่เจอใน `strings`       | ควรระวังไหม    |
| ---------------------------- | -------------- |
| `.env`, `DB_PASS`, `API_KEY` | ❗ Yes          |
| URL หรือ IP ภายในระบบ        | 🟡 บางครั้ง    |
| ชื่อ table / column          | ⚠️ ถ้าเจาะ SQL |
| JWT secret / cookie key      | ❗ Yes          |
| SSH key, .pem, .crt          | ❗ Yes          |

---

## 🔧 สรุปขั้นตอนเบื้องต้น

```bash
# ดึง string ทั้งหมด
strings rest-api | tee strings.txt

# เช็ค symbol table
go tool nm rest-api | less

# disassemble ถ้าจะวิเคราะห์เชิงลึก
go tool objdump rest-api > disasm.txt

# ดูไฟล์ embed
strings rest-api | grep -E '\.env|\.html|\.json|\.pem'

# เช็คว่ามี debug info มั้ย
file rest-api
```

---
