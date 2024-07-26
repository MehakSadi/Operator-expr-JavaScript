//OPERATORS :used to perform the different  type of mathematical and logical compution .
 // Types : There are different types of JavaScript operators:

//Arithmetic Operators
//Assignment Operators
//Comparison Operators
//String Operators
//Logical Operators
//Bitwise Operators
//Ternary Operators

// Arthimatic Operator :
let a = 30;
let b = 3;

console.log("a+b"  , a+b);
console.log("a*b" , a*b);

console.log("a++" , a++);   //Increament 
console.log("++a" , ++a);

let c= 67;
let d = 7
console.log("c-d" , c-d); 
console.log("c/d" , c/d); 

console.log("c%d" , c%d);

console.log("c--" , c--); // decreament
console.log("--c" , --c); 

////Assignment Operators

let num = 1;
num += 7;
console.log("num is now", num);

num *= 7;
console.log("num is now", num);

num %= 7;
console.log("num is now", num);

a **= 2;
console.log("the result a is" , a);

// comparsin operator : to compare the two velues  & as a result they return true or false.

let num1 = 10;
let num2 = 12;
console.log("num1==num2 ", num1==num2);

console.log("num1===num2 ", num1===num2); //equal velue & type.

console.log("num1!==num2 ", num1!==num2); // not equal valaue & not type.

console.log("num1<=num2 ", num1<=num2);
console.log("num1=>num2 ", num1>=num2);

//Logical Operator :
 // &&

 a = 67;
 b= 67;
 console.log("a == b" && a == b); // Both values are same then they print the output will be true otherwise false .

 a = 67;
 b= 80;
 console.log("a => b" && a >= b);

 //OR
 a = 67;
 b= 67;
 console.log("a == b" || a == b); 

 a = 67;
 b= 80;
 console.log("a > b" || a > b);

console.log(!true);
console.log(!false);




