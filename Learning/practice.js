/*function put(){
    console.log("Hi there")
}

var put2 = function(){
    console.log("second type of function")
}
*/

c=20        //Global Scope
var d = 21 //Function scope
let e = 51 //Block Scope


let arr = ['Mango', 'Guava', 'Apple']

arr.push("Banana");// push from back 
arr.pop();//remove from back 
arr.shift(); // remove from front 
arr.unshift("lemon"); // insert from front 
/*
if(a[0] == "Apple")
{
    console.log("Apple")
}
else{
    console.log("No it is ", arr[0]);
}*/




//Function Hoisting 
// Function Declaration 

function square(num){
    console.log(num*num)
}

square(10)



// Function Expression 
// Function expressions are not hoisted. 
var sqrt_n = function(num){
    console.log(Math.sqrt(num))
}
