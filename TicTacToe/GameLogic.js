
var blocks =[
    [100 , 100],
    [300 , 100],
    [500 , 100],
    [100 , 300],
    [300 , 300],
    [500 , 300],
    [100 , 500],
    [300 , 500],
    [500 , 500],
];
var i = 1;


function init(){
    arr = [];
    canvas = document.getElementById("mycanvas");
    pen = canvas.getContext("2d");

    boderline = {
        style:"red",
        lineWidth : 5,
    }
    // Creating Vertical Lines
    pen.moveTo(200,0);
    pen.lineTo(200,600);
    pen.moveTo(400,0);
    pen.lineTo(400,600);
    pen.strokeStyle = boderline.style;
    pen.lineWidth = boderline.lineWidth;
    pen.stroke();

    // Creating Horizontal lines
    pen.moveTo(0,200);
    pen.lineTo(600,200);
    pen.moveTo(0,400);
    pen.lineTo(600,400);
    pen.stroke();

    //canvas.addEventListener('click',Mark());
}



/*function testPositions(){
    for(var i = 0 ; i<9 ; i++)
    {
            console.log( blocks[i][0] );
    }
}*/

function DrawCircle(x, y)
{
    pen.moveTo(x,y);
    pen.arc(x, y , 25, 0 , 2*Math.PI);
    pen.stroke();
}

function DrawX(x, y)
{
    pen.moveTo(x-10,y-10);
    pen.lineTo(x+10, y+10);
    pen.stroke();
    pen.moveTo(x, y-10)
    pen.lineTo(x-10 ,y+10)
    pen.stroke();
}


/*function draw()
{
    for(var i = 0 ; i< 9 ; i++)
    {
        DrawX(blocks[i][0] , blocks[i][1])
    }
}*/

function getCategory(x,y){
    let block = 0;
    if(x < 200)
    {
        if(y< 200)
            block = 0;
        else if(y< 400)
            block = 3;
        else if(y < 600)
            block = 6;
    }
    else if(x < 400)
    {
        if(y< 200)
            block = 1;
        else if(y< 400)
            block = 4;
        else if(y < 600)
            block = 7;
    }
    else if(x < 600)
    {
        if(y< 200)
            block = 2;
        else if(y< 400)
            block = 5;
        else if(y < 600)
            block = 8;
    }
    return block;
}


function Mark(event)
{
    block = getCategory(event.x, event.y);

    let flag = true;
    block = getCategory(event.x, event.y);
    for( var a in arr)
        console.log(a)
        if(block == a )
        {
            flag = false;
        }
    if (flag)
    {
        arr.push(block)
        console.log(arr)
    }
    if(i < 10)
    {
        if(i%2 == 0)
            DrawCircle(blocks[block][0] , blocks[block][1]);
        else 
            DrawX(blocks[block][0] , blocks[block][1]);
        i++;
    }
}