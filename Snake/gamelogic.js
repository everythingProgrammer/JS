function init(){
     canvas = document.getElementById('mycanvas1');
    W = H = 1000;
    pen = canvas.getContext('2d');

    cs = 50;
    snake = {
        init_len: 5,
        color: "blue",
        cells:[],
        direction:"Right",

        
        createSnake:function(){
            for(var i = this.init_len ; i> 0 ; i--){
                this.cells.push({x:i, y:0});
            }

        },

        drawSnake: function(){
            for(var i = 0 ;  i < this.cells.length; i++ )
            {

                pen.fillRect(this.cells[i].x*50, (this.cells[i].y)*50  ,cs-2,cs-2 );
                console.log('x - ',this.cells[i].x,' y -',this.cells[i].y);
            }
        },

        updateSnake: function (){
            this.cells.pop();
            /*We extracted the last cell details here  */ 
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;
            var NextX ,NextY;
            console.log(' headX' , headX);
            console.log(' headY ',headY);
            /* We are going to use conditional statements here to move the snake in the direction */
            if(this.direction == "Right"){
                  NextX = headX + 1; 
                  NextY = headY;
            }
            else if(this.direction =="Left"){
                  NextX = headX - 1; 
                  NextY = headY; 
            }
            else if(this.direction =="Down"){
                  NextX = headX; 
                  NextY = headY+ 1; 

            }
            else if(this.direction == "Up"){
                  NextX = headX ;
                  NextY = headY -1;
            }
            console.log("X = ",NextX);
            this.cells.unshift({x:NextX , y: NextY});
            
        },
        
        
    };

    function keyPressed(e){
        console.log('key pressed');
        // Conditional Statements 
        if(e.key == "ArrowRight")
        {
            snake.direction = "right";
        }
        else if(e.key == "ArrowLeft"){
            snake.direction = "Left";
        }
        else if(e.key == "ArrowDown")
        {
            snake.direction= "Down";

        }
        else if(e.key == "ArrowUp"){
            snake.direction = "Up";
        }
    }

    pen.fillStyle = this.snake.color;
    snake.createSnake();
    document.addEventListener('keydown',keyPressed);


}


function draw()
{
    pen.clearRect(0,0,1000,1000);
    snake.drawSnake();
}

function update(){
    // console.log('updating snake')
    snake.updateSnake();
    
}

function gameloop()
{
    draw();
   update();
}

init();
var f = setInterval(gameloop, 100);










