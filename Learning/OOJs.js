


// Object Oriented Programming in Js


// JavaScript Object 
var bird = {
    x:100,
    y : 20,
    color:"blue",
    eggs:["one",'two','three', 'four'],
    fly: function(){
        console.log('Bird is Flying ', this.x, this.y)
    }
};


// For Each Loop 

bird.eggs.forEach(function(val, idx){
    //console.log(idx,val)
})

array = ['Jan' , 'Feb', 'March', 'April', 'May','June', 'July','August','September','October','November','December']

array.forEach(function(val, idx)
{
    //console.log(idx, val)
})


 

