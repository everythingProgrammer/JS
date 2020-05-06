// Creating Objects 

// One Way 
var apple = {
    taste:"sweet",
    color:"red",
}

// Another way  using new keyword
function fruits(taste, color){
    this.color = color;
    this.taste = taste;
}
let mango = new fruits('Sweet', 'Orange')
let orange = new fruits('sour', 'Orange')



//Class in ECMAScript 2015 
// Classes are not hoisted. 

//Class Declaration

class Fruit {
    constructor(taste, color){
        this.color = color;
        this.taste = color;
    }

};


let kiwi = new Fruit("sour", "green");

//Class Expression 
let Fruit2 = class{
    constructor(taste , color)
    {
        this.taste = taste;
        this.color = color;
    }
};


let guava = new  Fruit2('Nice', 'Green');