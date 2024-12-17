# JavaScript summarize

run file --> gird.html


JavaScript All commands and CSS Grid Concept

---



### 1. **String และ Template String**
- การประกาศและใช้งานตัวแปรประเภท String
- การใช้ Template String เพื่อแทรกค่าตัวแปรลงในข้อความ

```javascript
//*String
let str = "Mr.\"Thanakrit Thuakthao\"\nI\'m god";
console.log(str);
//Template String
console.log(`test template str ${str} kub`);//Alt+9+6
```

### 2. **ตัวแปร (Variables)**
- การสร้างตัวแปรด้วย `let`, `const`
- การกำหนดค่าและปรับเปลี่ยนค่าของตัวแปร

```javascript
//*สร้างตัวแปร
let string; //ตัวแปร
string = "letตัวแปร";
let number = 20 , dice = "->";
const kub = "นะครับ"; //ค่าคงที่
```

### 3. **การแสดงผล**
- ใช้ `console.log()` เพื่อแสดงผลข้อความและค่าตัวแปร

```javascript
//*แสดงผล
console.log(string);
console.log("อายุ", dice, number, kub);
```

### 4. **การแปลงประเภทข้อมูล (Type Conversion)**
- ใช้ `parseInt()` เพื่อแปลงข้อมูลเป็นตัวเลข
- ตรวจสอบประเภทข้อมูลด้วย `typeof`

```javascript
//*แปลงtype
number = parseInt(21.5 + 0.89);
console.log(typeof(number));//เช็คType
```

### 5. **Array**
- การสร้างและจัดการ Array
- การเพิ่ม, ลบ และจัดเรียงข้อมูลใน Array
- การเข้าถึงค่าต่าง ๆ ใน Array

```javascript
//*Array
let jotaro = Array(10,true,"yare yare",4.85,5);
console.log(jotaro);
jotaro[2] ="muda muda" ;
console.log("ตัวที่ 3 -> ", jotaro[2],jotaro[0]);
```

### 6. **Boolean และตัวดำเนินการเชิงตรรกะ**
- ใช้งานตัวดำเนินการ `&&`, `||`, และ `!`

```javascript
let score = 80;
console.log("คะแนนฉันได้ 80 -> ",score >= 80 && score <= 100,"ได้เกรด A");
```

### 7. **ฟังก์ชัน (Functions)**
- การสร้างฟังก์ชันทั้งแบบมีและไม่มีพารามิเตอร์
- การใช้ `return` เพื่อส่งค่ากลับ

```javascript
function testmath(value1,value2){ //ในวงเล็บ parameter
    return value1 * value2;
}
console.log("testmath คูณ jotaro = ", testmath(jotaro[0],number));
```

### 8. **คำสั่งควบคุม (Control Statements)**
- การใช้ `if`, `else if`, และ `else`
- การใช้ Ternary Operator
- การใช้ `switch case`

```javascript
if(jotaro[0] < number){
    console.log("if");
}else if(jotaro[0] > number){
    console.log("else if");
}else{
    console.log("else")
}
```

### 9. **ลูป (Loops)**
- การใช้งาน `while`, `for`, และ `do while`
- การใช้คำสั่ง `break` และ `continue`

```javascript
while(jotaro[0] <= 30){
    console.log("loop while เพิ่มเป็น -> ",jotaro[0]);
    if(jotaro[0]==25){
        break;
    }
    jotaro[0]++;//jotaro = 25
}
```

### 10. **การทำงานกับออบเจ็กต์ (Objects)**
- การสร้างและใช้งานออบเจ็กต์
- การเพิ่มเมธอดในออบเจ็กต์

```javascript
let jsObject = {
    myname:"thanakrit thuakthao",
    _nickname:"got",
    _age:"19",
};
console.log("name:\",jsObject.myname ,"\nnickname:\",jsObject._nickname ,"\nage:\" ,jsObject._age);
```

### 11. **DOM Manipulation**
- การเปลี่ยนแปลงเนื้อหาในหน้า HTML ด้วย `document.querySelector` และ `document.getElementById`
- การสร้าง, แก้ไข, ลบ และแทนที่องค์ประกอบ (Elements) ใน DOM

```javascript
function textsec1(){
    _topic.innerHTML="<strong style=color:red><em>TOPIC</em></strong>";
}
```

### 12. **Class และการจัดการคลาสใน DOM**
- การเพิ่ม, ลบ, และสลับคลาสด้วย `classList`
- การใช้ `toggle` เพื่อสลับสถานะของคลาส

```javascript
const domcss = document.getElementById("domcss")
function addclass(){
    domcss.classList.add("togreen");
}
```

### 13. **Events และ Event Listeners**
- การเพิ่มเหตุการณ์ เช่น `onfocus`, `onblur`, `onchange`
- การใช้ `addEventListener` เพื่อจัดการเหตุการณ์

```javascript
const eventjs = document.getElementById("eventjs");
eventsubmit.addEventListener('click', goevent);
```

### 14. **Prompt และ Confirm**
- การใช้ `prompt()` เพื่อรับค่าจากผู้ใช้
- การใช้ `confirm()` เพื่อแสดงการยืนยัน

```javascript
let stupid = prompt("คิดว่าเว็บนี้เกี่ยวกับอะไร");
console.log(typeof stupid);
```

---

## การรันโค้ด
1. **นำโค้ดไปใส่ในไฟล์ `.html` หรือ `.js`**
   - หากใช้ไฟล์ `.html` ให้แน่ใจว่าโค้ดอยู่ในแท็ก `<script>`
2. **เปิดไฟล์ในเว็บเบราว์เซอร์**
   - คำสั่งและฟังก์ชันต่าง ๆ จะทำงานในคอนโซลของเบราว์เซอร์
3. **ตรวจสอบผลลัพธ์ในคอนโซล**
   - เปิด Developer Tools (ปุ่ม F12) และไปที่แท็บ "Console"

---

## หมายเหตุ
- หากโค้ดมีการเข้าถึง DOM (`document.querySelector`, `document.getElementById` ฯลฯ) ให้สร้าง HTML ไฟล์ตัวอย่างที่มีโครงสร้างสอดคล้องกับโค้ด
- โค้ดบางส่วน เช่น การเปลี่ยนสีพื้นหลังหรือการเพิ่ม/ลบองค์ประกอบใน DOM จำเป็นต้องรันในบริบทของเว็บเบราว์เซอร์เท่านั้น

---

## ตัวอย่างโค้ด HTML (ประกอบการทดสอบ)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid</title>
    <!-- CSS file -->
    <link rel="stylesheet" href="grid.css">
</head>

<body>
    <!-- events of javascript -->
    <button onclick="yesno();">night mode</button>
    <button onclick="bglight();">light mode</button>
    <button onclick="jotaronow();">ค่าปัจจุบัน</button>

    <div class="grid-con">

        <div class="item">header1</div>

        <div class="item">
            <button onclick="textsec1();">กดเพื่อดูเนื้อหา</button>
            <div id="to">รำคาญ</div>
        </div>

        <div class="item">
            <p>ลองกดดูไอโง่</p>
            <button onclick="addmenu();">สร้างเมนูขึ้น</button>
            <ul id="menuup">

            </ul>
        </div>

        <div class="item" id="del">
            <button onclick="dee();">กดเพื่อลบ</button>
            <button onclick="rep();">กดแทนที่</button>
            <p id="p1">A</p>
            <p id="p2">B</p>
            <p id="p3">C</p>
            <p id="p4">D</p>
            
        </div>

        <div class="item">add remove class
            <div id="domcss">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti aliquam labore error, autem, sint recusandae molestiae ex aspernatur doloremque provident illum dolor in enim reiciendis harum voluptatem obcaecati distinctio dolores!</p>
            </div>

            <button onclick="addclass();">เพิ่ม</button>
            <button onclick="removeclass();">ลบ</button>
            <button onclick="swmode();">สลับสไตล์</button>

        </div>

        <div class="item">Dom event
            <div>
                <label for="text">onfocus</label>
                <input type="text" placeholder="ลองtyping for onfocus" onfocus="hl(this);" onblur="unhl(this);">
            </div>
            <label for="">เลือกภาษาFront-end</label>
            <select name="" id="usemenu" onchange="getmenu();">
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Javascrpit">Javascrpit</option>
            </select>
            <p id="showpro">แสดงผลการเลือก</p>
        </div>

        <div class="item">Event listeners
            <div id="eventjs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus rerum iste eveniet soluta commodi exercitationem.</div>
            <button id="eventsubmit">เปลี่ยนข้อความ</button>
        </div>

        <div class="item">prompt
            <div>

            </div>
        </div>
        <div class="item">footer9</div>
    </div>
    

    <!-- Javascrpit file -->
    <script src="grid.js"></script>

</body>
</html>
```

