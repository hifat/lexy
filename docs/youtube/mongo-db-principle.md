# MongoDB Principle

<iframe width="100%" height="500" src="https://www.youtube.com/embed/xY2NwsYHpV4" title="golang obfuscated malware goes crazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ในวิดีโอนี้ คุณ Xen และ Frank ได้มานำเสนอเกี่ยวกับ **MongoDB Performance: Patterns and Best Practices** โดยมีจุดประสงค์เพื่อให้ผู้ฟังได้รับความรู้และเทคนิคใหม่ๆ ที่สามารถนำไปปรับใช้ในการปรับแต่งและจัดการประสิทธิภาพของ MongoDB ได้อย่างมีประสิทธิภาพครับ \[[01:14](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=74)\]

### ภาพรวมของเนื้อหาในวิดีโอ
วิดีโอนี้จะเน้นไปที่ 12 รูปแบบ (patterns) และแนวปฏิบัติที่ดีที่สุด (best practices) สำหรับการปรับแต่งประสิทธิภาพของแอปพลิเคชันและ database \[[01:26](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=86)\] โดยรูปแบบเหล่านี้จะถูกจัดกลุ่มออกเป็น 4 หมวดหมู่หลัก \[[04:42](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=282)\] ได้แก่:

* **Big Picture**: การทำความเข้าใจภาพรวมของระบบและข้อกำหนด \[[04:49](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=289)\]
* **Query and Indexes**: การออกแบบ query และการใช้ index อย่างมีประสิทธิภาพ \[[06:31](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=391)\]
* **Sharding and Scaling**: กลยุทธ์ในการ scale และ sharding \[[08:14](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=494)\]
* **Put it Together**: การนำทุกอย่างมารวมกัน \[[04:57](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=297)\]

ในเวลา 45 นาทีที่จำกัด ผู้บรรยายจะแนะนำแต่ละ pattern อย่างรวดเร็ว และจะเจาะลึก 3 patterns ที่สำคัญ โดยมี 2 patterns ที่เลือกไว้ล่วงหน้า และอีก 1 pattern ที่ผู้ฟังร่วมกันโหวต \[[01:47](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=107)\] นอกจากนี้ยังมีการสาธิตฟีเจอร์ใหม่ๆ ที่จะมาใน MongoDB Atlas อีกด้วย \[[02:08](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=128)\]

### 4 ขั้นตอนการคิดในการปรับแต่งประสิทธิภาพ
รูปแบบทั้ง 12 patterns จะถูกจัดเรียงตามกระบวนการคิด 4 ขั้นตอน ได้แก่:

1.  **Context (บริบท)**: ทำความเข้าใจสถานการณ์ที่เกิดปัญหา \[[02:43](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=163)\]
2.  **Problem (ปัญหา)**: ระบุปัญหาที่ต้องการแก้ไข \[[02:50](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=170)\]
3.  **Force (แรงต้าน/ข้อจำกัด)**: พิจารณาเงื่อนไขที่ขัดแย้งกัน หรือสิ่งที่ต้องประนีประนอม \[[02:56](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=176)\]
4.  **Solution (แนวทางแก้ไข)**: วิธีการแก้ปัญหา \[[03:11](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=191)\]

ผู้บรรยายได้ยกตัวอย่างธุรกิจ Delivery อาหารออร์แกนิกที่ประสบความสำเร็จอย่างรวดเร็ว ซึ่งนำไปสู่ปัญหาในการ scale application และ database \[[03:25](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=205)\] และต้องใช้เวลาในการทำ performance tuning เพื่อให้ database รองรับความต้องการที่เพิ่มขึ้น \[[04:00](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=240)\] ซึ่งนี่คือปัญหาที่วิดีโอนี้จะช่วยแนะนำแนวทางแก้ไข

### การเจาะลึก 3 Patterns ที่สำคัญ

#### 1. Hunt Bottlenecks (การระบุปัญหาคอขวด)
Frank ได้นำเสนอวิธี "Hunt Bottlenecks" หรือการค้นหาคอขวดใน MongoDB Atlas โดยเปรียบเทียบกับการหากลุ่มดาวในท้องฟ้า \[[23:45](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1425)\]

* **ปัญหา**: แอปพลิเคชันทำงานช้า ลูกค้าแจ้งว่าเว็บไซต์โหลดนาน \[[27:16](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1636)\]
* **เครื่องมือใน Atlas**:
    * **Metrics Chart**: ดูภาพรวมของ metrics ต่างๆ เช่น จำนวน operation และเวลาที่ใช้ในการ execution \[[27:52](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1672)\]
    * **Query Insights Tab**: วิเคราะห์ latency ในระดับ collection ช่วยให้ระบุได้ว่า collection ใดมี latency สูงกว่าปกติ \[[28:37](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1717)\] ในตัวอย่างพบว่า `transactions` collection มี latency สูงขึ้น \[[28:59](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1739)\]
    * **Query Profiler**: ตรวจสอบ individual slow operations ที่เกิดขึ้นใน database โดยแสดงรายละเอียด เช่น namespace, host, และ command ที่รัน \[[30:04](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1804)\] ซึ่งในตัวอย่างพบว่ามีการทำ `collection scan` บน `transactions` collection จำนวนมาก \[[30:37](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1837)\]
    * **Atlas Performance Advisor**: แนะนำการปรับปรุงประสิทธิภาพ database โดยจะ scan slow query logs และให้คำแนะนำ เช่น การสร้าง index \[[31:37](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1897)\] ในตัวอย่างนี้แนะนำให้สร้าง index บนฟิลด์ `customer ID` ใน `transactions` collection \[[32:01](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1921)\]
* **การตรวจสอบผลลัพธ์**: หลังจากสร้าง index แล้ว latency บน `transactions` collection ก็ลดลงอย่างเห็นได้ชัด \[[32:52](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1972)\]

#### 2. Index (การใช้งาน Index)
Xen ได้อธิบายถึงการใช้ index เพื่อเพิ่มประสิทธิภาพ query \[[12:30](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=750)\]

* **ปัญหา**: Index ช่วยเร่งความเร็ว query แต่ก็ใช้ resource (CPU, IO, storage, cache space) และทำให้ write performance ช้าลง \[[12:41](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=761)\] การเพิ่ม index ทุกครั้งอาจส่งผลกระทบต่อ write performance 5% - 75% \[[13:30](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=810)\]
* **ข้อขัดแย้ง**: ต้องการ index เพื่อเพิ่มประสิทธิภาพ query แต่ก็ต้องรักษาสมดุลกับ resource usage และ write performance \[[14:12](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=852)\] การออกแบบ index ที่เหมาะสมสำหรับ query ที่ซับซ้อนเป็นเรื่องยาก \[[14:38](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=878)\]
* **แนวทางแก้ไข**:
    * **`explain` command**: ใช้เพื่อตรวจสอบว่า query ใช้ index ใด และแผนการทำงานของ query มีประสิทธิภาพแค่ไหน (ดูจากจำนวน documents ที่ scan และจำนวน fetch) \[[14:58](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=898)\]
    * **Testing**: ทดลองสร้าง index ที่แตกต่างกันบน test clusters และ monitor slow queries หลังจากการ drop index \[[15:26](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=926)\]
    * **Hide Index (ใน Atlas)**: สามารถซ่อน index แทนการ drop เพื่อประหยัดเวลาในการ recreate หากต้องการนำกลับมาใช้ \[[15:44](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=944)\]
    * **Performance Advisor (ใน Atlas)**: ช่วย monitor การใช้งาน index และแนะนำ index ที่ควรสร้าง \[[15:51](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=951)\]
    * **Compound Index**: ใช้เพื่อปรับปรุงประสิทธิภาพของ query ที่ซับซ้อน \[[16:12](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=972)\]
    * **Persistent Query Settings (ฟีเจอร์ใหม่ใน MongoDB 7.0)**: อนุญาตให้ตั้งค่า query settings รวมถึง index hints ให้คงอยู่แม้จะมีการ restart หรือ upgrade instance \[[16:48](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1008)\] ทำให้ query engine ใช้ index ที่ระบุ แทนที่จะเลือกเอง \[[17:12](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1032)\]

    * **Demo การใช้ Persistent Query Settings**:
        * สถานการณ์: ต้องการค้นหาข้อมูลผู้เสียภาษีที่เป็น `Pirates` และเสียภาษีระหว่าง 50-500 gold coins \[[17:22](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1042)\]
        * เริ่มต้นด้วยการลบ query settings, drop indexes และลบข้อมูลทั้งหมด \[[18:23](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1103)\]
        * Insert ข้อมูลตัวอย่าง: 1,000 `Pirates` ที่เสียภาษี 0-100 coins, 10,000 `Ordinary People` ที่เสียภาษี 90-1000 coins, และ 10 `Pirates` ที่เสียภาษี 800-2000 coins \[[18:43](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1123)\]
        * สร้าง index บนฟิลด์ `tax` และ `occupation` \[[19:43](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1183)\]
        * รัน query แรก: พบว่า query engine ใช้ `tax` index และ scan ไป 5,068 documents ซึ่งไม่มีประสิทธิภาพ \[[20:23](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1223)\]
        * Apply `persistent query setting`: บังคับให้ query engine ใช้ `occupation` index แทน \[[21:13](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1273)\]
        * รัน query ซ้ำ: พบว่า query engine ใช้ `occupation` index และ scan เพียง 1,000 documents ทำให้มีประสิทธิภาพมากขึ้น \[[21:57](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1317)\]
        * Query settings จะถูก apply กับ `query shape` ซึ่งไม่ขึ้นกับค่า literal ทำให้ query ที่มีโครงสร้างคล้ายกันได้รับผลประโยชน์ด้วย \[[22:20](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=1340)\]

#### 3. Design Schema (การออกแบบ Schema)
Xen ได้กล่าวถึงความสำคัญของการออกแบบ schema ใน MongoDB \[[34:10](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2050)\]

* **ความเข้าใจผิด**: MongoDB ไม่ได้เป็น "no schema database" แต่เป็น "flexible schema" database \[[34:41](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2081)\] การออกแบบ schema ที่ดีและเหมาะสมกับ query shapes เป็นสิ่งสำคัญสำหรับการได้ประสิทธิภาพสูงสุด \[[35:14](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2114)\]
* **ข้อขัดแย้ง**:
    * **Flexible Schema**: ยืดหยุ่นในการจัดเก็บข้อมูล (Arrays, Sub-documents, Key-value pairs) และสามารถแก้ไข schema ได้โดยไม่ต้อง downtime \[[35:45](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2145)\]
    * **Simplicity**: แอปพลิเคชัน MongoDB มักมี collections น้อยกว่า tables ใน relational database \[[36:15](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2175)\]
    * **Cost**: การปรับปรุงประสิทธิภาพอาจนำมาซึ่งต้นทุนที่สูงขึ้น เช่น การ duplicate ข้อมูล \[[36:34](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2194)\]
* **แนวทางแก้ไข**:
    * **Query-Driven Design**: ออกแบบ schema โดยคำนึงถึง query ที่จะรันเป็นหลัก ไม่ใช่จากข้อมูลที่มีอยู่ \[[36:54](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2214)\]
    * **Embedding vs. Referencing**: ตัดสินใจว่าจะใช้ embedded sub-documents หรือเก็บข้อมูลใน collections แยกกัน แล้วใช้ `$lookup` ในการเชื่อมโยง \[[37:24](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2244)\]
        * **ตัวอย่าง Book and Comments**:
            * **Embedding**: เก็บ comments ใน array ภายใน document ของ books ทำให้ดึงข้อมูลได้เร็ว แต่ถ้า comments มีจำนวนมาก อาจดึงข้อมูลเกินความจำเป็น \[[37:52](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2272)\]
            * **Referencing**: แยก books และ reviews ออกเป็นคนละ collection ทำให้ดึงข้อมูล books ได้เร็วขึ้น แต่ต้องทำ `$lookup` เพื่อดึง comments \[[38:11](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2291)\]
            * **Hybrid**: เก็บ 5-10 comments ล่าสุดแบบ embedding และเก็บ comments ที่เหลือใน collection แยก \[[39:02](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2342)\]
    * **Memory Sizing**: กำหนด working set ของข้อมูลที่ต้องการให้อยู่ใน memory (cache) เพื่อให้เข้าถึงได้เร็วโดยไม่ต้องดึงจาก disk \[[40:01](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2401)\]
        * **ตัวอย่างเกมมือถือ**: คำนวณ memory ที่จำเป็นสำหรับ system data, indexes และ player data \[[40:20](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2420)\] โดย MongoDB จะจัดสรร 50% ของ physical memory ให้กับ cache \[[40:40](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2440)\]

ผู้บรรยายได้สรุปว่าหวังว่าผู้ชมจะได้รับความรู้และแนวทางปฏิบัติที่เป็นประโยชน์ในการปรับแต่งประสิทธิภาพของ database \[[41:20](http://www.youtube.com/watch?v=xY2NwsYHpV4&t=2480)\] และได้ให้ QR Code 
