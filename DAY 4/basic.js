let name = "Issac Vijay";
let age = 21;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

let a = 5;
let b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log(a,b);

let x = 10;
let y = x;
y = 20;
console.log(x);

const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log(area);

let n1 = 20;
let n2 = 4;
console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
console.log(n1%n2);

console.log(5 + "5");
console.log(5 - "2");
console.log(true + 1);

let num = 100;
if(num>100){
console.log("Greater than 100");
}else if(num===100){
console.log("Equal to 100");
}else{
console.log("Less than 100");
}

console.log(5=="5");
console.log(5==="5");

let checkAge = 25;
if(checkAge>=18 && checkAge<=60){
console.log("Eligible");
}else{
console.log("Not Eligible");
}

let number = 7;
if(number%2===0){
console.log("Even");
}else{
console.log("Odd");
}

let fb = 15;
if(fb%3===0 && fb%5===0){
console.log("FizzBuzz");
}else if(fb%3===0){
console.log("Fizz");
}else if(fb%5===0){
console.log("Buzz");
}

let day = 3;
switch(day){
case 1: console.log("Monday"); break;
case 2: console.log("Tuesday"); break;
case 3: console.log("Wednesday"); break;
case 4: console.log("Thursday"); break;
case 5: console.log("Friday"); break;
case 6: console.log("Saturday"); break;
case 7: console.log("Sunday"); break;
}

for(let i=1;i<=20;i++){
console.log(i);
}
for(let i=1;i<=20;i++){
if(i%2===0){
console.log(i);
}
}

let N = 5;
let sum = 0;
let i = 1;
while(i<=N){
sum+=i;
i++;
}
console.log(sum);

for(let i=1;i<=10;i++){
if(i===5){
continue;
}
if(i===8){
break;
}
console.log(i);
}

function add(n1,n2){
return n1+n2;
}
console.log(add(5,6));

const addArrow=(n1,n2)=>n1+n2;
console.log(addArrow(3,4));

function isPrime(n){
if(n<=1) return false;
for(let i=2;i<n;i++){
if(n%i===0) return false;
}
return true;
}
console.log(isPrime(7));

function reverseString(str){
return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function test(){
return;
console.log("Hello");
}
test();

function largest(arr){
let max=arr[0];
for(let i=1;i<arr.length;i++){
if(arr[i]>max){
max=arr[i];
}
}
return max;
}
console.log(largest([2,9,4,1,7]));

function getGrade(marks){
if(marks>=90){
return "A";
}else if(marks>=75){
return "B";
}else if(marks>=50){
return "C";
}else{
return "Fail";
}
}
let marks=82;
let grade=getGrade(marks);
console.log("Marks:",marks,"Grade:",grade);
