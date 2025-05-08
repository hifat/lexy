## Context

---

🔵 `kubectl config get-contexts`

คือ: สั่งให้ Kubernetes CLI (kubectl) โชว์ รายการ contexts ที่มีอยู่ในเครื่องเรา

Context คือ เซ็ตข้อมูลประกอบด้วย:

-  Cluster → ต่อไปที่ไหน (เช่น Minikube, GKE, EKS, Docker Desktop ฯลฯ)
-  User → ใครล็อกอินอยู่
-  Namespace → Default namespace ที่จะใช้ถ้าไม่ระบุ

สรุปง่าย ๆ: context = บอกว่า ตอนนี้ “จะต่อไปที่ cluster ไหน ด้วย user ไหน บน namespace อะไร”

เวลาใช้ kubectl config get-contexts จะเห็นตารางแบบนี้:

| CURRENT | NAME           | CLUSTER        | AUTHINFO       | NAMESPACE |
| ------- | -------------- | -------------- | -------------- | --------- |
| \*      | docker-desktop | docker-desktop | docker-desktop | default   |

-  เครื่องหมาย \* = ตัวที่ “active” อยู่ตอนนี้
-  เช่น ในตัวอย่างด้านบน → ตอนนี้เราเชื่อมต่อกับ cluster “docker-desktop” อยู่

---

🔵 `kubectl config set-context docker-desktop`

คือ: สั่งให้ kubectl ตั้งค่า “context ปัจจุบัน” ไปที่ docker-desktop

จริง ๆ เต็ม ๆ คือ

```sh
kubectl config use-context docker-desktop`
```

ไม่ใช่ set-context นะ!

---

🔥 ความแตกต่างสำคัญ:

| คำสั่ง       | ทำอะไร                                                                  |
| ------------ | ----------------------------------------------------------------------- |
| get-contexts | โชว์ context ที่มีในเครื่อง                                             |
| use-context  | เปลี่ยน context ที่ใช้อยู่ตอนนี้                                        |
| set-context  | (ตั้งค่า) กำหนดข้อมูลใหม่ให้ context ชื่อหนึ่ง เช่น ตั้ง namespace ใหม่ |

สรุป:

-  ถ้าแค่ “เปลี่ยน” ไปใช้ docker-desktop → ต้องใช้ kubectl config use-context docker-desktop
-  ถ้า “แก้” properties ของ context docker-desktop → ใช้ kubectl config set-context docker-desktop

ตัวอย่าง set-context:

```sh
kubectl config set-context docker-desktop --namespace=my-namespace
```

= ตั้ง namespace default ของ context docker-desktop เป็น my-namespace

---

🧠 สรุปรวมอีกทีแบบรวบรัด:

| คำสั่ง                                                  | สรุปสั้นสุด                              |
| ------------------------------------------------------- | ---------------------------------------- |
| kubectl config get-contexts                             | ดู context ทั้งหมดในเครื่อง              |
| kubectl config use-context docker-desktop               | เปลี่ยนไปใช้ context docker-desktop      |
| kubectl config set-context docker-desktop --namespace=x | ตั้ง namespace ของ docker-desktop เป็น x |

---

### Trip
- Add gcp context
```bash
gcloud container clusters get-credentials hello-sekai-shop-ms --z
one australia-southeast1-b --project hello-sekai-shop-ms
```