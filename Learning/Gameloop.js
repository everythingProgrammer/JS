// Game 
//         initial Screen
//         draw
//         update
//         repeat draw and update unless game over


function init(){
    canvas = document.getElementById('mycanvas')
    pen = canvas.getContext('2d');
    W = canvas.width = 500;
    H = canvas.height = 500;
    game_over =false;

    rect = {
        x:20,
        y:20,
        w:40,
        h:40,
        speed:10,
    }
}

function draw(){
    pen.clearRect(0,0,500,500);
    pen.fillRect(rect.x, rect.y , rect.w, rect.h);
    pen.fillStyle = "red";
};

function update(){

    rect.x += rect.speed;
    if(rect.x>W-rect.w || rect.x <0){
		rect.speed *= -1;
	}

};

function gameloop(){
    console.log("In gameloop");
    draw();
    update();
};
init();
var f = setInterval(gameloop, 100);

