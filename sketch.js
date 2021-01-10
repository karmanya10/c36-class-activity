
var mydatabase;
var gamestate = 0;
var playercount;
//global variables
var myform,mygame,myplayer;

function setup(){
    createCanvas(500,500);
    mydatabase=firebase.database();

    mygame = new Game();
    mygame.getstate();
    mygame.start();
        
}

function draw(){
    background("white");



    drawSprites();

}

