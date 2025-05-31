# สร้างเครื่องผลิตคลิปสั้นไวรัล

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sn10TLmukPI" title="No Code สร้างเครื่องผลิตคลิปสั้นไวรัล ด้วย AI + n8n ในคลิปเดียว! || ด้วยงบ 1 บาท/คลิป!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

ตามคลิปวิดีโอที่คุณให้มา สามารถสรุปขั้นตอนการสร้างคลิปสั้นไวรัลเกี่ยวกับสัตว์ด้วย AI และ n8n ได้ดังนี้:

**1. การติดตั้ง n8n:**

-  ดาวน์โหลดและติดตั้ง Docker \[[01:28](http://www.youtube.com/watch?v=sn10TLmukPI&t=88)\]
-  ค้นหา "n8n" ใน Docker Hub และเลือกตัวที่มีการดาวน์โหลดจำนวนมาก (100 ล้านครั้ง) \[[01:42](http://www.youtube.com/watch?v=sn10TLmukPI&t=102), [01:46](http://www.youtube.com/watch?v=sn10TLmukPI&t=106)\]
-  ทำการ "Pull" และ "Run" \[[01:48](http://www.youtube.com/watch?v=sn10TLmukPI&t=108), [01:52](http://www.youtube.com/watch?v=sn10TLmukPI&t=112)\]
-  เข้าใช้งาน n8n ผ่าน `Local Host:5678` \[[01:57](http://www.youtube.com/watch?v=sn10TLmukPI&t=117)\]
-  สมัครสมาชิกและเข้าสู่ระบบ \[[02:07](http://www.youtube.com/watch?v=sn10TLmukPI&t=127)\]

**2. การเตรียม Google Cloud:**

-  Import template "when clicking test workflow for" ใน n8n หรือดาวน์โหลดไฟล์ template และ Import ใน Google Sheet \[[02:27](http://www.youtube.com/watch?v=sn10TLmukPI&t=147), [02:33](http://www.youtube.com/watch?v=sn10TLmukPI&t=153)\]
-  สร้าง Google Sheet ใหม่ใน n8n \[[02:42](http://www.youtube.com/watch?v=sn10TLmukPI&t=162)\]
-  สร้าง Credential ใหม่สำหรับ Google Sheet \[[02:52](http://www.youtube.com/watch?v=sn10TLmukPI&t=172)\]
-  สร้าง Project ใหม่ใน Google Cloud Console หรือเลือก Project ที่มีอยู่ \[[03:01](http://www.youtube.com/watch?v=sn10TLmukPI&t=181)\]
-  เปิดใช้งาน Google Sheets API \[[03:22](http://www.youtube.com/watch?v=sn10TLmukPI&t=202), [03:28](http://www.youtube.com/watch?v=sn10TLmukPI&t=208)\]
-  ตั้งค่า OAuth consent screen โดยใส่ชื่อแอปและอีเมลสนับสนุนผู้ใช้ \[[03:38](http://www.youtube.com/watch?v=sn10TLmukPI&t=218), [03:48](http://www.youtube.com/watch?v=sn10TLmukPI&t=228)\]
-  สร้าง Client ID ประเภท Web application และใส่ Authorized redirect URIs จาก n8n \[[04:12](http://www.youtube.com/watch?v=sn10TLmukPI&t=252), [04:27](http://www.youtube.com/watch?v=sn10TLmukPI&t=267)\]
-  คัดลอก Client ID และ Client Secret ไปวางใน n8n \[[04:37](http://www.youtube.com/watch?v=sn10TLmukPI&t=277), [04:42](http://www.youtube.com/watch?v=sn10TLmukPI&t=282)\]
-  เพิ่ม Test users ใน OAuth consent screen โดยใส่อีเมลที่ต้องการให้เข้าถึง Google Sheet \[[04:52](http://www.youtube.com/watch?v=sn10TLmukPI&t=292), [04:57](http://www.youtube.com/watch?v=sn10TLmukPI&t=297)\]
-  Sign in with Google ใน n8n และอนุญาตการเข้าถึง \[[05:12](http://www.youtube.com/watch?v=sn10TLmukPI&t=312), [05:20](http://www.youtube.com/watch?v=sn10TLmukPI&t=320)\]
-  ตรวจสอบการเชื่อมต่อ Google Sheet โดยดูที่ Form List ใน n8n \[[05:36](http://www.youtube.com/watch?v=sn10TLmukPI&t=336), [05:42](http://www.youtube.com/watch?v=sn10TLmukPI&t=342)\]

**3. การสร้าง Google Sheet สำหรับข้อมูล:**

-  สร้างไฟล์ Google Sheet และใส่ข้อมูลในแต่ละคอลัมน์ (1.1 ถึง 8.3) \[[05:52](http://www.youtube.com/watch?v=sn10TLmukPI&t=352), [05:57](http://www.youtube.com/watch?v=sn10TLmukPI&t=357)\]
-  ตั้งชื่อ Sheet เป็น "Sheet1" และมีคอลัมน์ "status" และ "to do" (สำหรับค่าที่จะนำไปสร้างคลิป) \[[06:03](http://www.youtube.com/watch?v=sn10TLmukPI&t=363), [06:07](http://www.youtube.com/watch?v=sn10TLmukPI&t=367)\]
-  ในส่วนของ Agent ใน n8n ให้ดึงข้อมูลจาก Google Sheet ในคอลัมน์ที่ต้องการ เช่น Main Character และ Opponent \[[06:22](http://www.youtube.com/watch?v=sn10TLmukPI&t=382), [06:32](http://www.youtube.com/watch?v=sn10TLmukPI&t=392)\]
-  ใส่ Prompt สำหรับสร้างคลิป Animal vs Animal \[[06:46](http://www.youtube.com/watch?v=sn10TLmukPI&t=406), [06:51](http://www.youtube.com/watch?v=sn10TLmukPI&t=411)\]

**4. การตั้งค่า Open AI:**

-  เข้าไปที่ OpenAI Platform และเติมเงิน (แนะนำ 5 ดอลลาร์) \[[07:04](http://www.youtube.com/watch?v=sn10TLmukPI&t=424), [07:44](http://www.youtube.com/watch?v=sn10TLmukPI&t=464)\]
-  สร้าง Secret Key ใหม่และคัดลอก Key \[[07:53](http://www.youtube.com/watch?v=sn10TLmukPI&t=473), [07:57](http://www.youtube.com/watch?v=sn10TLmukPI&t=477)\]
-  ใน n8n ที่ Open AI ให้สร้าง Credential ใหม่และวาง Secret Key \[[08:03](http://www.youtube.com/watch?v=sn10TLmukPI&t=483), [08:07](http://www.youtube.com/watch?v=sn10TLmukPI&t=487)\]

**5. การสร้าง Scene ใน n8n:**

-  พิมพ์ข้อความสำหรับ Scene โดยดึงข้อมูล Main Character และ Opponent จาก Google Sheet \[[08:18](http://www.youtube.com/watch?v=sn10TLmukPI&t=498), [08:40](http://www.youtube.com/watch?v=sn10TLmukPI&t=520)\]
-  ใช้ Node "Split Out" กับ Opponent \[[08:45](http://www.youtube.com/watch?v=sn10TLmukPI&t=525), [08:51](http://www.youtube.com/watch?v=sn10TLmukPI&t=531)\]
-  ใช้ Node "Merge" เพื่อรวมข้อมูล \[[09:02](http://www.youtube.com/watch?v=sn10TLmukPI&t=542), [09:11](http://www.youtube.com/watch?v=sn10TLmukPI&t=551)\]
-  สร้าง Agent อีกครั้งและตั้งชื่อ (เช่น main animal opponent) พร้อมใส่ข้อมูล Prompt \[[09:23](http://www.youtube.com/watch?v=sn10TLmukPI&t=563), [09:49](http://www.youtube.com/watch?v=sn10TLmukPI&t=589)\]
-  ใช้ Model "GPT-4 1106-preview" \[[09:57](http://www.youtube.com/watch?v=sn10TLmukPI&t=597), [10:03](http://www.youtube.com/watch?v=sn10TLmukPI&t=603)\]
-  ตั้งค่า Close Up \[[10:03](http://www.youtube.com/watch?v=sn10TLmukPI&t=603), [10:08](http://www.youtube.com/watch?v=sn10TLmukPI&t=608)\]
-  ใช้ "Split Out" อีกครั้ง \[[10:08](http://www.youtube.com/watch?v=sn10TLmukPI&t=608), [10:13](http://www.youtube.com/watch?v=sn10TLmukPI&t=613)\]
-  ใช้ Node "Loop Over Items" โดยตั้ง Bat Size เป็น 1 \[[10:13](http://www.youtube.com/watch?v=sn10TLmukPI&t=613), [10:18](http://www.youtube.com/watch?v=sn10TLmukPI&t=618)\]
-  เชื่อมต่อ Loop ไปที่ Node "Merge" \[[10:25](http://www.youtube.com/watch?v=sn10TLmukPI&t=625), [10:30](http://www.youtube.com/watch?v=sn10TLmukPI&t=630)\]
-  ตั้งค่า Wait Node (เช่น 15 วินาที) \[[10:41](http://www.youtube.com/watch?v=sn10TLmukPI&t=641)\]

**6. การตั้งค่า Together AI (สำหรับสร้างรูปภาพฟรี):**

-  เข้าไปที่เว็บไซต์ Together AI และล็อกอินด้วย Gmail \[[10:48](http://www.youtube.com/watch?v=sn10TLmukPI&t=648), [11:07](http://www.youtube.com/watch?v=sn10TLmukPI&t=667)\]
-  คัดลอก API Key ที่อยู่ด้านล่างสุด \[[11:12](http://www.youtube.com/watch?v=sn10TLmukPI&t=672), [11:16](http://www.youtube.com/watch?v=sn10TLmukPI&t=676)\]
-  ใน n8n ที่ Together AI สร้าง Credential ใหม่ \[[11:42](http://www.youtube.com/watch?v=sn10TLmukPI&t=702), [11:47](http://www.youtube.com/watch?v=sn10TLmukPI&t=707)\]
-  ใส่ "Authorization" ใน Header และ "Bearer [API Key]" ใน Value (อย่าลืมเว้นวรรคหลัง Bearer) \[[11:53](http://www.youtube.com/watch?v=sn10TLmukPI&t=713), [11:58](http://www.youtube.com/watch?v=sn10TLmukPI&t=718)\]
-  ติ๊ก "S Body" และตั้งค่า JSON \[[12:19](http://www.youtube.com/watch?v=sn10TLmukPI&t=739), [12:25](http://www.youtube.com/watch?v=sn10TLmukPI&t=745)\]

**7. การสร้าง Code และอัปเดต Google Sheet:**

-  ใช้ Node "Code" เพื่อรวม URL รูปภาพที่สร้างทั้งหมด \[[12:32](http://www.youtube.com/watch?v=sn10TLmukPI&t=752), [12:50](http://www.youtube.com/watch?v=sn10TLmukPI&t=770)\]
-  สร้าง Google Sheet ใหม่สำหรับอัปเดตข้อมูล \[[13:12](http://www.youtube.com/watch?v=sn10TLmukPI&t=792), [13:18](http://www.youtube.com/watch?v=sn10TLmukPI&t=798)\]
-  ใช้ Node "Google Sheet" เลือก "Update a Row" และตั้งค่า Document ID, Sheet Name และ Column ต่างๆ โดยดึงข้อมูลจาก Node ก่อนหน้า \[[13:18](http://www.youtube.com/watch?v=sn10TLmukPI&t=798), [13:24](http://www.youtube.com/watch?v=sn10TLmukPI&t=804)\]
-  คัดลอก Workflow ทั้งหมด (Ctrl+C) และวาง (Ctrl+V) เพื่อสร้าง Workflow ส่วนล่างที่คล้ายกัน \[[13:50](http://www.youtube.com/watch?v=sn10TLmukPI&t=830), [13:54](http://www.youtube.com/watch?v=sn10TLmukPI&t=834)\]
-  ปรับ Model ใน Workflow ส่วนล่างเป็น "GPT-4 1106-preview" \[[13:59](http://www.youtube.com/watch?v=sn10TLmukPI&t=839), [14:04](http://www.youtube.com/watch?v=sn10TLmukPI&t=844)\]
-  ตั้งค่า Prompt ใน Agent สำหรับ Animal 1 vs Animal 2 \[[14:09](http://www.youtube.com/watch?v=sn10TLmukPI&t=849)\]
-  ตั้งค่า System Message \[[14:15](http://www.youtube.com/watch?v=sn10TLmukPI&t=855)\]
-  ปรับค่า Width และ Height ใน Node "Generate Scene" \[[14:30](http://www.youtube.com/watch?v=sn10TLmukPI&t=870), [14:35](http://www.youtube.com/watch?v=sn10TLmukPI&t=875)\]
-  ปรับ Node "Add Winner" โดยเพิ่ม Column (1.2, 1.3) \[[14:44](http://www.youtube.com/watch?v=sn10TLmukPI&t=884), [14:49](http://www.youtube.com/watch?v=sn10TLmukPI&t=889)\]
-  ใช้ Node "Google Sheet" เลือก "Update a Row" อีกครั้ง \[[14:55](http://www.youtube.com/watch?v=sn10TLmukPI&t=895), [15:09](http://www.youtube.com/watch?v=sn10TLmukPI&t=909)\]
-  ใช้ Node "Merge" เพื่อ Combine Position \[[15:15](http://www.youtube.com/watch?v=sn10TLmukPI&t=915), [15:20](http://www.youtube.com/watch?v=sn10TLmukPI&t=920)\]
-  ใช้ Node "Get Element of" จาก Google Sheet (Get Low) \[[15:26](http://www.youtube.com/watch?v=sn10TLmukPI&t=926)\]

**8. การตั้งค่า Render Video:**

-  ใช้ Node "Create a Mate" โดยสมัครสมาชิกและล็อกอินบนเว็บไซต์ Mate \[[15:37](http://www.youtube.com/watch?v=sn10TLmukPI&t=937), [15:49](http://www.youtube.com/watch?v=sn10TLmukPI&t=949)\]
-  สร้าง Template ใหม่ใน Mate และใส่ Code Template ที่ผู้สอนให้ (โดยการ Copy Code ไปวาง)
