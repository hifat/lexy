# Did You Know

## x509: certificate signed by unknown authority

คำสั่ง `RUN apk add --no-cache ca-certificates` มีความสำคัญมากเมื่อคุณทำ image แบบ multi-stage โดยเฉพาะถ้า final stage เป็น `distroless` image ครับ มาดูความหมายและความจำเป็นกัน:

---

## 🔍 คำอธิบาย

```dockerfile
RUN apk add --no-cache ca-certificates
```

* `apk` คือ package manager ของ Alpine Linux (เหมือน `apt` บน Ubuntu)
* `add` คือคำสั่งติดตั้งแพ็กเกจ
* `--no-cache` บอกให้ไม่เก็บ cache ของ index ระหว่างติดตั้ง → ลดขนาด image
* `ca-certificates` คือชุดของ **Certificate Authority (CA)** ที่ระบบใช้ในการตรวจสอบ SSL/TLS certificates

---

## ❓ จำเป็นไหม?

### ✔️ จำเป็นถ้า...

* แอปของคุณมีการ **เรียก HTTPs ไปยัง external services** เช่น:

  * เรียก API ของ Google, AWS, GitHub ฯลฯ
  * เชื่อมฐานข้อมูลผ่าน TLS
  * ใช้ library อย่าง `http.Get(...)` ไปยัง `https://...`

> ถ้าไม่มี `ca-certificates` เวลา Go app ไปเรียก HTTPS URL จะได้ error เช่น:
>
> ```
> x509: certificate signed by unknown authority
> ```

### ❌ ไม่จำเป็นถ้า...

* แอปคุณรันในระบบปิด ไม่มีการเรียก HTTPS ไปข้างนอกเลย (ซึ่งหายาก)
* ใช้ HTTP ล้วน ๆ (ไม่นิยมเพราะไม่ปลอดภัย)

---

## 💡 ทำไมต้อง `COPY` ไปยัง `distroless` stage?

```dockerfile
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
```

เพราะ `distroless` ไม่มี package manager และไม่มี cert ติดมาให้เลย ถ้าไม่ copy ไปเอง แอปจะหา CA cert ไม่เจอแล้วพังทันที

---

## ✅ สรุป

| สิ่งที่ทำ                            | ความหมาย / เหตุผล                                |
| ------------------------------------ | ------------------------------------------------ |
| `apk add --no-cache ca-certificates` | ติดตั้ง CA certificates ใน Alpine stage          |
| `COPY ... /etc/ssl/certs/`           | เอา CA cert ไปใส่ใน distroless ที่ไม่มีของพวกนี้ |
| จำเป็นไหม?                           | จำเป็นถ้าแอปของคุณใช้ HTTPS ไปภายนอก             |

---

ถ้าคุณใช้ GRPC/TLS หรือ REST API ผ่าน HTTPS → ต้องใช้แน่นอนครับ ✅
ถ้าอยากลดขนาด image เพิ่มเติม ผมมีเทคนิคอื่นแนะนำได้นะ บอกได้เลย!
