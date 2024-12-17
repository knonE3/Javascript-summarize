
/*

// Comments บรรทัดเดียว

document.write("่javascript test");

alert("พร้อมเข้าสู่เว็บนี้ยัง");

console.log("test");
console.error("virus");
console.warn("you got this");

*/

//*String
let str = "Mr.\"Thanakrit Thuakthao\"\nI\'m god";
console.log(str);
//Template String
console.log(`test template str ${str} kub`);//Alt+9+6


//*สร้างตัวแปร
let string; //ตัวแปร
string = "letตัวแปร";
let number = 20 , dice = "->";
const kub = "นะครับ"; //ค่าคงที่

//*แสดงผล
console.log(string);
//document.write(string);

console.log("อายุ", dice, number, kub);
//*แปลงtype
number = parseInt(21.5 + 0.89);

console.log("อายุ", dice, number, kub);
console.log(typeof(number));//เช็คType

//*Array
let jotaro = Array(10,true,"yare yare",4.85,5);
console.log(jotaro);
jotaro[2] ="muda muda" ;
console.log("ตัวที่ 3 -> ", jotaro[2],jotaro[0]);
jotaro[0] += 10;
console.log(++jotaro[0]);

//*boolean
/*   && = and จะถูกคำนวณก่อน
|| = or
!  = not
*/

let score = 80;
console.log("คะแนนฉันได้ 80 -> ",score >= 80 && score <= 100,"ได้เกรด A");


//* function
function bglight() {
    document.body.style.backgroundColor = "#fff" ;
    document.body.style.color = "#000" ;
}



function testmath(value1,value2){ //ในวงเล็บ parameter
    return value1 * value2;
}
console.log("testmath คูณ jotaro = ", testmath(jotaro[0],number)); //ในวงเล็บ argument


//*if else
if(jotaro[0] < number){
    console.log("if");
}else if(jotaro[0] > number){
    console.log("else if");
}else{
    console.log("else")
}
//*Ternary Operator = if else ลดรูป
let grade_jotaro = jotaro[0] > 50 ? "ผ่าน(จริง)" : "ไม่ผ่าน(เท็จ)";
console.log(grade_jotaro);

console.log("now value jotaro -> ",jotaro[0]);


//*switch case
switch(jotaro[0]){
    case 1:console.log("case1");
    break;
    case 20:console.log(case2);
    break;
    default:console.log("default");
}


//*while loop
while(jotaro[0] <= 30){
    console.log("loop while เพิ่มเป็น -> ",jotaro[0]);
    if(jotaro[0]==25){
        break;
    }
    jotaro[0]++;//jotaro = 25
}

//*for loop
for(jotaro[0];jotaro[0]>=21;--jotaro[0]){
    if(jotaro[0]==22)continue;//ไม่เอา22
    console.log("loop for ลดเหลือ -> ",jotaro[0]);
}    
//ผ่านString
let forloopy = "string" ,loopcount;
for(loopcount of forloopy){
    console.log(loopcount);
}


//*do while
do{
    console.log(jotaro[0]);
    ++jotaro[0]
}while(jotaro[0]<=22);//jotaro = 22


//*test function
function jotaronow(){
    alert(jotaro[0]);
}

function vat(salary){
    return salary * 0.07;
}

let mr_A = vat(40000);
console.log("VAT Mr.A = ",mr_A);
let mr_B = vat(8649896);
console.log("VAT Mr.B = ",mr_B);


function Nn(nu1,nu2,nu3="ค่าเริ่มต้น"){
    console.log(nu1,nu2,nu3);
}
Nn(jotaro[0],number, kub);
Nn(jotaro[0],number);


//*Array

let color = ["red", "green", "yellow", "black"];
//*จำนวนสมาชิก
let count = color.length;
console.log("จำนวนสมาชิกสี = ",count);

//*ดูตำแหน่งindex = indexOf('green') = 1


//*เรียงอักษรข้อความ
let sort_ = color.sort();
console.log("เรียงอักษร = ",sort_)

//*เพิ่มข้อมูลตัวหลัง
color.push("white");

//*เพิ่มข้อมูลมาแทรกตัวแรก
color.unshift("orange");

//*เรียงกลับ
let reverse_ = color.reverse();
console.log("เรียงกลับ = ",reverse_);

//*splice เลือกที่แทรก
color.splice(2,0,"aquq");
        //(index,ลบ,เพิ่ม)

//*slice = subset
//todo   list.slice(1,2) = [ ,2,3, , ]
//todo   list.slice(3) = [1,2,3, ,5]

//*ตัวคั่น
console.log(color.join(" ตัวคั่น "));

//*ลบข้อมูลตัวแรกออก
console.log(color.shift());

//*ลบข้อมูลออกตัวท้าย
console.log(color.pop());

//*เอาตัวท้ายเก็บใส่ตัวแปร
let _pop = color.pop();
console.log(_pop,"color สีล่าสุด",color);

//*รวมArray
color=color.concat(number);
let color_jotaro =color.concat(jotaro);
console.log(color_jotaro);

//*เรียงลำดับArray
color_jotaro.sort(function(a,b){
    return a-b //น้อยไปมาก
    // a+b มากไปน้อย
});
console.log(color_jotaro);


//*JS Object
let jsObject = {
    myname:"thanakrit thuakthao",
    _nickname:"got",
    _age:"19",
};
console.log("name\:",jsObject.myname ,"\nnickname\:",jsObject._nickname ,"\nage\:" ,jsObject._age);


//*JS Object Method
//แสดงค่าทีหลัง
let store = {
    product:"น้ำมันพืช",
    price:50,
    category:"food",
    size:"ขวด",
    displaystore:function(){
        return "ชื่อสินค้า\:"+this.product+"\nราคา\:"+this.price+"\nหมวดหมู่\:"+this.category+"\nขนาด\:"+this.size;
    },
    displayproduct:function(){
        return "\n" + this.product;
    }
};
console.log(store.displaystore() ,store.displayproduct());


//*Confirm
//เปลี่ยนธีม
function yesno(){
    let ask=confirm("ต้องการเปลี่ยนสีนี้จริงหรอ");
    if(ask){
        console.log("เปลี่ยนละโคตรมืด");
        document.body.style.backgroundColor = "#000" ;
        document.body.style.color = "#fff" ;
    }else{
        alert("ไม่เปลี่ยน ฉลาดดีนิ");
    }
}


//* DOM
const _topic =document.querySelector('#to');
function textsec1(){
    _topic.innerHTML="<strong style=color:red><em>TOPIC</em></strong>";
    
}

//Method
// element.setAttribute("attribute",value);
// switchA.setAttribute("class","switchB");


//*DOM Node
let menu = document.getElementById("menuup");
let menuc = 1

function addmenu(){
    const mlist = document.createElement("li");
    mlist.innerText = "ไอเทมมาแล้ว"+(menuc++);
    menu.appendChild(mlist);//เพิ่ม elemnet
}

//ต้องมี node แม่
let del = document.getElementById("del");
let p3 = document.getElementById("p3");//ถูกลบ

function dee(){
    del.removeChild(p3);//ลบ element
}

let tan = document.getElementById("p1");
let nee = document.createElement("li");//แทนที่
nee.innerText = "ถูกแทนที่" ;

function rep(){
    del.replaceChild(nee,tan);//แทนที่ element
}


//* DOM add& remove class
const domcss = document.getElementById("domcss")

function addclass(){
    domcss.classList.add("togreen");//เพิ่ม class

}

function removeclass(){
    domcss.classList.remove("togreen");//ลบ class
}

let checkmode;
function swmode(){
    domcss.classList.toggle("tored");//สลับ class
    checkmode = domcss.classList.contains("tored");//เปรียบเทียบแบบ boolean
    if(checkmode){
        domcss.innerText="โหมดสีแดง";
    }else{
        domcss.innerHTML="<strong><em>ing elit. Corrupti aliquam labore error, autem, sint recusandae molestiae ex aspernatur doloremque provident illum dolor in enim reiciendis harum voluptatem obcaecati distinctio dolores!</em></strong>";
    }
}


//* DOM event
//onload ตอนโหลดเสร็จ
// function onload(){
//     alert("Welcome to เว็บนรก");
// }

//onfucus ตอนกำลังโฟกัส เช่น พิมพ์ข้อความ
function hl(hlc){
    hlc.style.backgroundColor = "yellow";
}
//onblur ตอนเลิกโฟกัส
function unhl(unhlc){
    unhlc.style.backgroundColor = "red";
}

//onchange ทำงานกับพวกตัวเลือก
function getmenu(){
    let usemenu = document.getElementById("usemenu");
    let showpro = document.getElementById("showpro");
    console.log(usemenu.value.toUpperCase());//toUpperCase เปลี่ยนให้เป็นตัวพิมพ์ใหญ่
    showpro.innerText = usemenu.value;
}


//* Event Listener
//อ้างอิง
const eventjs = document.getElementById("eventjs");
const eventsubmit = document.getElementById("eventsubmit");

//play event
function goevent(){
    eventjs.innerHTML = "<h1>เปลี่ยน event ใน javascript</h1>";
}

//event
eventsubmit.addEventListener('click', goevent);//ไม่ต้องใส่ on




//* Prompt
let stupid = prompt("คิดว่าเว็บนี้เกี่ยวกับอะไร");
console.log(typeof stupid);



