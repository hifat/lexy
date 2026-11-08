# Build an LLM from Scratch — Lesson 01

วันนี้เราจะสร้าง Language Model ตัวแรกด้วย Python โดยยังไม่ต้องใช้ Neural Network หรือ GPU

เป้าหมาย: เข้าใจว่าโมเดลภาษาทำนายข้อความถัดไปได้อย่างไร และเขียนโปรแกรมที่เรียนรู้รูปแบบตัวอักษรจากข้อมูลจริง

## 1. Language Model ทำงานอย่างไร (5 นาที)

Language Model คือโมเดลที่เรียนรู้รูปแบบภาษา แล้วใช้ความรู้นั้นคาดการณ์ว่าข้อความถัดไปน่าจะเป็นอะไร

ตัวอย่าง:

ข้อความที่ได้รับ:

`I love`

โมเดลอาจคาดการณ์คำถัดไปได้ว่า:

| คำถัดไป | ความน่าจะเป็นตัวอย่าง |
| ------- | --------------------- |
| you     | 60%                   |
| Python  | 25%                   |
| coding  | 15%                   |

ตัวเลขนี้เป็นเพียงตัวอย่างเพื่ออธิบายแนวคิด ไม่ใช่ผลจากโมเดลที่ฝึกจริง

แนวคิดนี้เรียกว่า Next-token Prediction

แล้ว Token คืออะไร?

Token คือหน่วยย่อยของข้อความที่โมเดลนำไปประมวลผล เช่น

- `Hello` อาจเป็น 1 Token
- `I love Python` อาจแบ่งเป็น 3 Tokens
- `banana` อาจแบ่งเป็นตัวอักษร `b`, `a`, `n`, `a`, `n`, `a`

วิธีแบ่ง Token มีหลายแบบ วันนี้เราจะเริ่มจากการแบ่งทีละตัวอักษร เรียกว่า Character-level Tokenization

## 2. คณิตศาสตร์ที่ใช้กับ Language Model (5 นาที)

วันนี้เราจะใช้แนวคิดเรื่อง Probability (ความน่าจะเป็น)

สมมติว่าเราเห็นตัวอักษร `a` แล้วพบว่าตัวอักษรถัดไปเป็น:

- `b` จำนวน 8 ครั้ง
- `c` จำนวน 2 ครั้ง

รวมทั้งหมด 10 ครั้ง

เราคำนวณได้ดังนี้:

โอกาสที่ตัวถัดไปเป็น b

\\[ P(b) = \frac{8}{10} = 0.8 = 80\\% \\]

โอกาสที่ตัวถัดไปเป็น c

\\[ P(c) = \frac{2}{10} = 0.2 = 20\\% \\]

คำอธิบายสัญลักษณ์:

- `P` หมายถึง Probability หรือความน่าจะเป็น
- `b` หมายถึงตัวอักษรที่เราต้องการทำนาย
- `8` หมายถึงจำนวนครั้งที่พบ b
- `10` หมายถึงจำนวนครั้งทั้งหมด

หลักการคือ:

ความน่าจะเป็น = จำนวนครั้งที่พบ ÷ จำนวนครั้งทั้งหมด

ทำไมต้องเรียนเรื่องนี้?

เพราะ Language Model ต้องประเมินว่า Token แต่ละตัวมีโอกาสเป็นข้อความถัดไปมากน้อยแค่ไหน

ในอนาคตเราจะใช้แนวคิดนี้ร่วมกับ Neural Network เพื่อเรียนรู้รูปแบบที่ซับซ้อนขึ้น

## 3. สร้าง Language Model ตัวแรก (10 นาที)

วันนี้เราจะสร้างโมเดลชื่อ Bigram Language Model

Bigram หมายถึงการเรียนรู้ความสัมพันธ์ระหว่าง Token ที่อยู่ติดกันสองตัว

ตัวอย่าง:

`a → b`

หมายถึง หลังจากเห็น `a` แล้วพบ `b` ตามมา

[Understanding N-grams in NLP: Why Context Matters | by Akhila Suresh | Apr, 2026 | Medium](https://images.openai.com/static-rsc-4/roIa3F8fEIK4qaZ1pVewvfdB-HavljYaQmR3QW4fVCb0cfk0MGJ49iJH7PU7ihsSSq9wsW9mi74sYdDmg7ajvUbbIgM67lpCYXMQ65FYgjM1mS8eOjLB_hzLOIJLkIaH7VTRoVbxvfB8lcWjo2BDRgkxnMxVave99aitea7sCUY?purpose=inline)

[medium.com](https://medium.com/%40akhilasuresh1937/understanding-n-grams-in-nlp-why-context-matters-6bb4534e8c99?utm_source=chatgpt.com)

ขั้นตอนที่ 1: สร้างไฟล์

เปิด Terminal บน Mac mini แล้วสร้างไฟล์:

```bash
touch lesson01.py
```

เปิดไฟล์ด้วย Editor ที่คุณใช้อยู่

ขั้นตอนที่ 2: เขียนโค้ด

```python
from collections import defaultdict, Counter

# ข้อมูลสำหรับฝึกโมเดล
from collections import defaultdict, Counter

# 1. ข้อมูลสำหรับฝึกโมเดล
training_text = "ababac"

# 2. สร้างพื้นที่เก็บความสัมพันธ์ระหว่างตัวอักษร
model = defaultdict(Counter)

# 3. จับคู่ตัวอักษรปัจจุบันกับตัวถัดไป
pairs = zip(training_text, training_text[1:])

for current_token, next_token in pairs:
    model[current_token][next_token] += 1

# 4. ทำนายตัวอักษรถัดไป
def predict_next_token(current_token):
    counts = model.get(current_token)

    if not counts:
        return {}

    total = sum(counts.values())

    probabilities = {}

    for next_token, count in counts.items():
        probabilities[next_token] = count / total

    return probabilities

# 5. แสดงข้อมูลที่โมเดลเรียนรู้
print("Learned model:")

for current_token, counts in model.items():
    print(f"\nAfter {current_token!r}:")

    for next_token, count in counts.items():
        print(f"  {next_token!r}: {count} times")

# 6. ทดลองทำนาย
print("\nPrediction after 'a':")

results = predict_next_token("a")

for next_token, probability in results.items():
    print(f"  {next_token!r}: {probability:.1%}")
```

ขั้นตอนที่ 3: รันโปรแกรม

```bash
python3 lesson01.py
```

ผลลัพธ์ที่ควรได้:

```
ตัวอักษรถัดไปหลัง 'a':
'b': 66.7%
'c': 33.3%
```

อธิบายส่วนสำคัญของโค้ด

| โค้ด                   | ทำหน้าที่                 |
| ---------------------- | ------------------------- |
| `training_text`        | เก็บข้อมูลสำหรับฝึก       |
| `zip()`                | จับคู่ตัวอักษรกับตัวถัดไป |
| `Counter()`            | นับจำนวนครั้ง             |
| `sum()`                | รวมจำนวนทั้งหมด           |
| `count / total`        | คำนวณความน่าจะเป็น        |
| `predict_next_token()` | ทำนายตัวถัดไป             |

สิ่งที่เราเพิ่งสร้างคือโมเดลที่สามารถเรียนรู้รูปแบบจากข้อมูลได้ โดยไม่ต้องเขียนกฎกำหนดคำตอบไว้ล่วงหน้า

## 4. ทดลองด้วยตัวเอง (5 นาที)

ตอนนี้ลองเปลี่ยนข้อมูลฝึกจาก:

```python
training_text = "ababac"
```

เป็น:

```python
training_text = "abababac"
```

จากนั้นรันโปรแกรมอีกครั้ง

ลองสังเกตว่า:

1. จำนวนครั้งที่ `a` ตามด้วย `b` เปลี่ยนไปหรือไม่?
2. ความน่าจะเป็นของ `b` เปลี่ยนไปเท่าไร?
3. ทำไมการเปลี่ยนข้อมูลฝึกจึงทำให้ผลการทำนายเปลี่ยนไป?

นี่คือแนวคิดสำคัญของ Machine Learning: โมเดลเรียนรู้รูปแบบจากข้อมูลที่ได้รับ

## 5. ข้อจำกัดของ Bigram (2 นาที)

สมมติว่าเรามีประโยค:

`I love programming`

Bigram จะเรียนรู้ความสัมพันธ์ระหว่างคำที่อยู่ติดกัน เช่น:

- `I` → `love`
- `love` → `programming`

แต่ถ้าโมเดลเห็นเพียงคำว่า `programming` มันจะไม่รู้ว่าก่อนหน้านี้มีคำว่า `I love`

มันจึงไม่สามารถใช้บริบทระยะไกลได้ดี

นี่เป็นหนึ่งในเหตุผลที่เราต้องเรียนรู้ Transformer ในบทเรียนต่อ ๆ ไป

## 6. ตรวจความเข้าใจ (3 นาที)

ข้อ 1. Language Model มีหน้าที่หลักอะไร?

a. จัดเรียงไฟล์

b. คาดการณ์ Token ถัดไป

c. แปลง Python เป็น Machine Code

ข้อ 2. ถ้าพบ b จำนวน 8 ครั้ง และ c จำนวน 2 ครั้ง หลัง a โอกาสของ b คือเท่าไร?

a. 20%

b. 50%

c. 80%

ข้อ 3. ข้อจำกัดสำคัญของ Bigram คืออะไร?

a. ดูความสัมพันธ์ได้เฉพาะ Token ที่อยู่ติดกัน

b. ไม่สามารถนับจำนวนได้

c. ต้องใช้ GPU เท่านั้น

ตรวจคำตอบ

## งานที่ต้องส่งเพื่อจบบทเรียน

- รันโค้ดต้นฉบับสำเร็จ
- ทดลองเปลี่ยนข้อมูลเป็น `abababac`
- ส่งผลลัพธ์จากการรันทั้งสองครั้ง
- ตอบคำถามตรวจความเข้าใจ

ยังไม่ถือว่าจบบทเรียนจนกว่าจะตรวจผลการทดลองจริง

บทเรียนถัดไป: Tokenization — ทำไม LLM จึงไม่จำเป็นต้องอ่านทีละตัวอักษร?
