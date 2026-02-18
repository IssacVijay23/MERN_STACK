<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JavaScript Objects & Array Methods</title>
<style>
body{
margin:0;
font-family:Arial,Helvetica,sans-serif;
background:linear-gradient(135deg,#667eea,#764ba2);
color:white;
padding:20px;
}
.container{
max-width:900px;
margin:auto;
}
.card{
background:rgba(255,255,255,0.1);
backdrop-filter:blur(10px);
padding:20px;
margin-bottom:20px;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.3);
}
h2{
color:#ffd43b;
}
.output{
background:#111;
padding:10px;
border-radius:8px;
margin-top:10px;
color:#00ffcc;
font-family:monospace;
white-space:pre-line;
}
button{
padding:10px 18px;
border:none;
border-radius:8px;
background:#ff6b6b;
color:white;
cursor:pointer;
margin-top:10px;
}
button:hover{
background:#ffd43b;
color:black;
}
</style>
</head>

<body>
<div class="container">

<div class="card">
<h2>Object Literal & Destructuring</h2>
<button onclick="runObject()">Run Example</button>
<div id="objOut" class="output"></div>
</div>

<div class="card">
<h2>Array Methods</h2>
<button onclick="runArray()">Run Example</button>
<div id="arrOut" class="output"></div>
</div>

<div class="card">
<h2>Object Method & this</h2>
<button onclick="runMethod()">Run Example</button>
<div id="methodOut" class="output"></div>
</div>

</div>

<script>
function runObject(){
const user={
name:"Sam",
age:27,
address:{city:"Chennai",pincode:600001}
};

user.city="Chennai";

const {name,age,address:{city}}=user;

let text="";
text+="Name: "+name+"\n";
text+="Age: "+age+"\n";
text+="City: "+city+"\n";

document.getElementById("objOut").textContent=text;
}

function runArray(){
const numbers=[1,2,3,4,5];

const doubled=numbers.map(n=>n*2);
const even=numbers.filter(n=>n%2===0);
const sum=numbers.reduce((acc,c)=>acc+c,0);
const found=numbers.find(n=>n===3);
const some=numbers.some(n=>n>4);
const every=numbers.every(n=>n>0);
const sorted=[10,5,20].sort((a,b)=>a-b);

let text="";
text+="map doubled: "+JSON.stringify(doubled)+"\n";
text+="filter even: "+JSON.stringify(even)+"\n";
text+="reduce sum: "+sum+"\n";
text+="find 3: "+found+"\n";
text+="some >4: "+some+"\n";
text+="every >0: "+every+"\n";
text+="sorted: "+JSON.stringify(sorted);

document.getElementById("arrOut").textContent=text;
}

function runMethod(){
const user={
name:"Sam",
greet(){
return "Hello "+this.name;
}
};

document.getElementById("methodOut").textContent=user.greet();
}
</script>

</body>
</html>
