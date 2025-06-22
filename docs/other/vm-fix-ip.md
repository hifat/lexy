# Fix VM IP

ปัญหาที่คุณเจอคือ IP ของ VM เปลี่ยนทุกครั้งที่รีสตาร์ทเครื่องจริง (host) ซึ่งทำให้ config ที่อ้างอิง IP พัง เช่น Jenkins URL, webhook, etc.
การใช้ Domain name มาช่วยอ้างแทน IP เป็นทางออกที่ดีมาก แต่ต้อง จับคู่ domain → IP แบบ dynamic ให้ได้ด้วย

⸻

🔧 ทางออกที่ผมแนะนำมี 3 แนวทาง ขึ้นกับว่าอยากง่าย, ยืดหยุ่น หรือถาวร:

⸻

✅ วิธีที่ 1: Fix IP Address ของ VM (ดีที่สุดถ้าทำได้)

ให้ VM ใช้ Static IP ภายใน network เช่น 192.168.1.200 แล้วใช้ hosts หรือ DNS local ชี้ domain → IP ถาวร

วิธีทำ:
1. เข้าไป config network ใน UTM VM → เปลี่ยนเป็น Bridged Mode
2.	ตั้งค่า IP ภายใน VM ให้เป็น static เช่นใน /etc/netplan/*.yaml (ถ้าใช้ Ubuntu)

```yaml
network:
  version: 2
  ethernets:
    enp0s1:  # ตรวจชื่อ interface ด้วย `ip a`
      dhcp4: no
      addresses:
        - 192.168.1.200/24
      nameservers:
        addresses: [1.1.1.1, 8.8.8.8]
      routes:
        - to: default
          via: 192.168.1.1
```

สั่ง:

```bash
sudo netplan apply
```

3.	จากนั้นคุณสามารถใช้ hosts หรือ DNS ภายในชี้ jenkins.local → 192.168.1.200

⸻

โดยรวม การตั้งค่า Static IP บน Debian กับ Ubuntu ใกล้เคียงกันมาก แต่มีความต่างนิดหน่อยขึ้นอยู่กับว่าใช้ระบบ network แบบไหน:

⸻

✅ กรณีที่คุณใช้ Ubuntu Server (20.04+), Debian 10+

ส่วนใหญ่ใช้ระบบ Netplan เหมือนกัน

⸻

⚠️ แต่ถ้า Debian ของคุณยังใช้ ifupdown (interfaces file)

อันนี้จะต้อง config ที่ /etc/network/interfaces แทน เช่น:

```ini
# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp0s1
iface enp0s1 inet static
    address 192.168.1.200
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 1.1.1.1 8.8.8.8
```

แล้วสั่ง:

```bash
sudo systemctl restart networking
```


⸻

🔍 วิธีเช็กว่าระบบคุณใช้ Netplan หรือไม่:

```bash
ls /etc/netplan
```

- ถ้ามีไฟล์ .yaml → ใช้ Netplan
- ถ้าไม่มี → มักจะใช้ ifupdown (Debian แบบ minimal มักใช้แบบนี้)

⸻

✅ สรุป

| OS           | Default Network System | Config Location              | หมายเหตุ                        |
|--------------|-----------------------|------------------------------|----------------------------------|
| Ubuntu       | Netplan               | /etc/netplan/*.yaml          | ใช้ได้กับ 18.04+                |
| Debian 10+   | Netplan (บางกรณี)     | /etc/netplan/*.yaml          | บาง image ใช้ ifupdown แทน       |
| Debian       | ifupdown (ดั้งเดิม)   | /etc/network/interfaces      | ต้องเขียนแบบ legacy เอง         |


⸻


⚙️ วิธีที่ 2: ใช้ Dynamic DNS ภายใน Local

ถ้าคุณใช้ IP แบบ DHCP แล้วไม่อยาก fix IP:

🔁 ใช้ Script + dnsmasq + hostname
1.	ติดตั้ง dnsmasq บนเครื่องจริง หรือ VM ตัวใดก็ได้
2.	ให้ dnsmasq map domain เช่น jenkins.local → ไปยัง hostname ของ VM เช่น jenkins-vm
3.	ใช้ avahi-daemon / hostname -I ตรวจสอบ IP จริงแล้วอัพเดต DNS record auto

หรือ

🧠 ใช้ Script ตรวจ IP แล้วอัพเดตไฟล์ hosts อัตโนมัติ

```bash
#!/bin/bash
IP=$(ping -c 1 jenkins-vm.local | grep "PING" | awk '{print $3}' | tr -d '()')
sudo sed -i "/jenkins.local/d" /etc/hosts
echo "$IP jenkins.local" | sudo tee -a /etc/hosts
```

แล้ว cron หรือ systemd timer สั่งรันทุกครั้งหลังเปิดเครื่อง

⸻

🔁 วิธีที่ 3: ใช้ host.docker.internal หรือ IP แบบ bridge (ถ้าใช้ Docker)

ถ้า VM ใช้ Docker เป็นหลัก: Docker บน Mac รองรับ host.docker.internal เพื่อชี้กลับไปที่ host โดยไม่ต้องรู้ IP จริง

แต่ถ้า VM แบบ UTM แยกเป็นเครื่องใหม่จริง ๆ (Bridge Mode) วิธีนี้ใช้ไม่ได้

⸻

🏁 สรุปสิ่งที่แนะนำ:

| ทางเลือก                        | ข้อดี                              | ข้อเสีย                        |
|----------------------------------|-------------------------------------|---------------------------------|
| ✅ Fix IP ของ VM                 | เสถียร, ไม่พัง, ง่ายสุด            | ต้อง config network ใน VM       |
| 🔁 ใช้ DNS ภายใน (dnsmasq)       | ชื่อจำง่าย, update ได้              | ต้องติดตั้ง DNS server          |
| 🧠 Script update hosts           | ทำงานได้เลย, ไม่ต้อง DNS           | ต้องรัน script เอง, manual      |


⸻

ถ้าบอกได้ว่า VM ใช้ OS อะไร (เช่น Ubuntu Server), แล้วคุณใช้ Mac เป็น host ผมสามารถเขียนไฟล์ config หรือ script ให้ได้เลยแบบเฉพาะเจาะจงครับ