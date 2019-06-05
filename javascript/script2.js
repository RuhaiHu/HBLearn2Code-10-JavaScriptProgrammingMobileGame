// script for index2.html
// yes i know this isn't the greatest way to do this

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
console.log(width + ", " + height);

// ctx.fillStyle = "rgb(200, 0, 200)";
// ctx.fillRect(50, 50, 50, 50);

var x = 10;
var y = 10;
var w = 20;
var h = 30;
var speed = 2;

// var ctx = document.getElementById("myCanvas").getContext("2d");

var update = function(){
    // x = x + speed;
    
    // if(x < (width - w)){
    //     x = x + speed;
    // }else if(x > 0){
    //     x = 10;
    // }

    if(x >= (width - w)){
        // x = width - w;
        speed = -speed;
    }else if(x <= 0){
        // x = 10;
        speed = -speed;
    }
    else{
        // why is this else triggering at all?!
        // console.log("Don't know how but twitch broke it....");
        // x = 250;
        // y = 250;
        // speed = 0;
    }
    
    x = x + speed;
    // get dimensions of canvas and limit to inside of canvas only
    // console.log(x);
};

var draw = function(){
    // ctx.clearRect(x, y, w, h);
    ctx.clearRect(0, 0, 500, 300);
    ctx.fillStyle = "rgb(200, 0, 100)";
    // ctx.save();
    ctx.fillRect(x, y, w, h);
};

var step = function() {
    update();
    draw();
    window.requestAnimationFrame(step);
};

step();
console.log("end of script");