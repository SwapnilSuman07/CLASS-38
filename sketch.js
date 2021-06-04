var database;
var canvas, gameState = 0, playerCount;
var game, form, player;
var allPlayersInfo;
var car1,car2,car3,car4;
var cars;

function setup(){
   canvas=createCanvas(displayWidth-200, displayHeight-250);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        game.play();
    }
}

