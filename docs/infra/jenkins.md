# Jenkins

## Install

⸻

✅ docker-compose.yml

```docker
version: '3.8'

services:
  jenkins:
    image: jenkins/jenkins:2.60.3-alpine
    container_name: jenkins
    ports:
      - "8080:8080"     # สำหรับ Jenkins Web UI
      - "50000:50000"   # สำหรับเชื่อมต่อ Jenkins agents
    volumes:
      - jenkins_home:/var/jenkins_home  # เก็บข้อมูลถาวร
    restart: unless-stopped

volumes:
  jenkins_home:
```

⸻

💡 วิธีใช้งาน:  
1. สร้างไฟล์ชื่อ docker-compose.yml แล้วใส่เนื้อหาด้านบน
2. รัน Jenkins ด้วยคำสั่ง:

```sh
docker-compose up -d
```

3. เปิด Jenkins ที่ http://localhost:8080
4. ครั้งแรกจะต้องใช้ initial admin password ซึ่งอยู่ใน container ที่ path:

```sh
docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```


⸻

📝 หมายเหตุ:
- ถ้าคุณต้องการใช้ Jenkins เวอร์ชันใหม่กว่านี้ ให้เปลี่ยน image: เป็นเวอร์ชันอื่น เช่น jenkins/jenkins:lts
- ถ้าต้องการติดตั้ง plugin หรือกำหนด config เพิ่มเติม สามารถใช้ volume bind mount แทน volume ชื่อ เช่น:

```docker
volumes:
  - ./jenkins_data:/var/jenkins_home
```


⸻

## Upgrade Java Version

[See Document](https://www.jenkins.io/doc/book/platform-information/upgrade-java-to-21/index.html)