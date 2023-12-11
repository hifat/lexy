# OWASP

ถ้าที่ Audit Secure ช่วยจะดีมาก

A02: Cryptographic Failures
   - เข้ารหัสข้อมูลที่ Sensitive แบบ AES
   - ใช้เทคนิค rotate key กับ AES

A04: Insecure Design
   - อย่าเปิด port ที่ไม่จำเป็นออกไปข้างนอก เช่นการใช้ Default port บางอย่างควรออก internet มั้ย ?
   - หา Principle ของการ Deploy

A09: Security Logging and Monitoring Failures
   - Practice log

A10: SSRF (Server-Side Request Forgery)
	เอา From จากเว็บเป้าหมายมาใส่เวลาเราแล้วดัก Credentials
   - Strict URL Filter

## Reference
- [owasp.org](https://owasp.org/www-project-top-ten/)  
- [# มารู้จัก OWASP มาตรฐาน Security ของการทำ website กัน](https://www.youtube.com/watch?v=XVbSl0R_T7M&ab_channel=mikelopster)