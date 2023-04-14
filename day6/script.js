// 1.GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript

alert('I’m invoked!');

//--------

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

// Explain
// 1.In JavaScript, using semicolon is not required - Hello

//------

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+' '+lname;
alert( admin ); // "Guvi geek"

//-----

let fname1 =10.5; 
fname1 = "Guvi";
lname = "geek"
let name = fname1+' '+lname;
alert( `hello ${name}` ); // hello Guvi geek

//-----

let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
let c = a+b;
alert(c);

//-----

var aa = 2 > 12;
//Don't touch below this
if (aa) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
// Output
// Diffused

//--------

let aaa = prompt("Enter a number?");
//Don't modify any code below this
if (aaa) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
//Output
//if the prompt is empty - o/p is Success

//--------

let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log(value);
}

//------

let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome Employee' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
console.log(message);
 //Output
//  Welcome Employee

//------

let mesage;
let numVal = 1;
if (null || numVal || undefined )
{
  mesage = "welcome boss";
}
else
{
  mesage = "Go away";
}
console.log(mesage);
//OutPut
//welcome boss

//---------

let message1;
let lock = null;
//Dont change any code below this 
if (null || lock || undefined )
{
  message1 = "Go away";
}
else
{
 message1 = "welcome";
}
console.log(message1);
//Output
//welcome 

//----------

let msg;
let lock = 0;
//Dont change any code below this
if (lock && " " || undefined )
{
  msg = "Go away";
}
else
{
 msg = "welcome";
}
console.log(msg);
//Output
//welcome 

//------------

let i = 4;
while (i > 1) {
  console.log( --i );
}
// Output:
// 3
// 2
// 1

//----------

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(i=0; i<num.length; i++){
  console.log(num[i]);
}
//Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//---------

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}
// Output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

//------

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
//Output
// Wrapped teddy bear and added a bow!
// Wrapped drone and added a bow!
// Wrapped doll and added a bow!

//-----

let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("disarm ");
  }
}
// Output:
// disarm 

//------

var lemein = '0';
var lemeout = 0;
var msg = '';
if (lemein) {
 msg += 'hi';
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);
//Output
// hi

_________________________________________________________________________________________


//2. GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);
// Output:
// 1234567891011

// ----------

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] + ','
}
console.log(new_string.slice(0, 23));
// Output:
// 1,2,3,4,5,6,7,8,9,10,11

//-------------

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
for (var i=numsArr.length-1; i>=0; i-- ) {
 new_string += numsArr[i] + ' ';
}
console.log(new_string);
// Output:
// 11 10 9 8 7 6 5 4 3 2 1 

//----------------

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = 'even'
 }
}
console.log(numsArr.join(' '));
// Output:
// 1 even 3 even 5 even 7 even 9 even 11

//------------

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
 sum += numsArr[i]
}
console.log(sum);
// Output:
// 66

// ------------

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i<numsArr.length; i++) {
 if(numsArr[i]%2==0){
    sum += numsArr[i]
  }
}
console.log(sum);
// Output:
// 30

// ----------------

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var even=0;
var odd=0
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0)
 {
 odd -= numsArr[i]
 }
 else
 {
 even += numsArr[i]
 }
}
console.log(`Even: ${even} and Odd: ${odd}`);
// Output:
// Even: 30 and Odd: -36

//-----------

var numsArr = [[1, 2, 3, 4, 5], [ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i<numsArr.length; i++) {
 console.log(numsArr[i]);
}
// Output:
// [ 1, 2, 3, 4, 5 ]
// [ 6, 7, 8, 9, 10, 11 ]

//----------

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all='';
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length; j++ ){
     str_all +=inner_array[j]
 }
}
console.log(str_all);
// Output:
// 1234567891011

//------------

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 != 0 )
 {
   numsArr[i] = 'even'
 }

}
console.log(numsArr.join(' '));
 //Output
//  even 2 even 4 even 6 even 8 even 10 even


//-------

_________________________________________________________________________________________


// 3.GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

let f,s,t;
aa = (f,s,t) => {
// console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);
//Output
//3

//---------

(() => {
  let arr = [9,8,5,6,4,3,2,1];
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
})();
// Output:
// 38

//--------

var arr = ['guvi', 'geek', 'zen', 'fullstack'];
var ano = function(arr) {
 for (var i = 0; i<arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
}
ano(arr);
//Output
// Guvi
// Geek
// Zen
// Fullstack

//---------

var num = [10, 20, 30, 40,50,60,70,80,90,100] 
var sum = (a, b) => a + b
sum = num.reduce(sum)
console.log(sum);
// Output:
// 550

//--------

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(() => {
 arr = [];
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(count);
})();
// Output:
// 3

// ---------

(() => {
  var arr = ['guvi', 'geek', 'zen', 'fullstack'];
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();
//Output
// Guvi
// Geek
// Zen
// Fullstack

//--------

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();
// Output:
// 1
// 3
// 5
// 7
// 79
// 7
// 9

//--------

(() => {
 let str = 'abcd'
 let str1 = str.split('').reverse().join('');
 console.log(str1); 
})()
// Output:
// dcba

//-------

var arr = ['guvi','geek','guvi','duplicate','geeK']; 
var removeDuplicates = function (arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates(arr));
 //Output
//  [ 'guvi', 'geek', 'duplicate', 'geeK' ]


//-------

var as=[12,34,5,6,2,56,6,2,1];
var sum = 0;
for(i=0; i<as.length; i++){
  if(as[i]%2 != 0){
    sum += as[i];
  }
}
console.log(sum)
// Output:
// 6

//---------

aa = data=>{
  var a=data;
 for(i=0;i<a.length-1;i++){
  var l='';
  var s=a[i+1]
  var b=a[i]
  l+=s
  l+=b
  i=i+1
  if((a.length%2)!=0){
  l+=a[a.length-1]
 }
 }
 
 console.log(l);
 }
 aa('1234');
 //Output
//  43

 //----------

 var array =[[['firstname','vasanth'],['lastname','Raje'],['age',24],['role','JSWizard']],[['firstname','Sri'],['lastname','Devi'],['age',28],['role', 'Coder']]];
 var final=[]
 while(array.length!=0)
 {
  var outer_remove = array.shift();
  
  while(outer_remove.length!=0)
  {
  var inner_remove = outer_remove.shift()
  var key = inner_remove[0]
  var value =inner_remove[1]
  }
  final.push(inner_remove)
 }
 console.log(final)
 //Output
//[ [ 'role', 'JSWizard' ], [ 'role', 'Coder' ] ]

 //-------

 var newArray=[1,3,2,5,10];
 var myPrime;
  for(let i=1; i<newArray.length; i++){
    if(newArray[i]%i === 0){
      myPrime = newArray[i];
      }
   }
 console.log(myPrime); 
 //Output
 //2

//--------

let n = [1,2,3];
let sum = 0;
function add(n)
{
for( i=0; i<n.length; i++){
 sum += n[i];
 }
console.log(sum)
return sum;
}
add(n);
 //Output
 //6


//---------