class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("GameState");
        gameStateRef.on("value", function (data){
            gameState = data.val();
        })
    }

    update(state){
        var gameStateRef = database.ref("/");
        gameStateRef.update({
            GameState:state
        })
    }

    start(){
        if(gameState === 0){
           player = new Player();
           player.getCount();
           form = new Form();
           form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];
    }

    play(){
        form.greeting.hide();
        form.input.hide();
        form.button.hide();

        textSize(30);
        text("Game Starts",120,100);
        Player.getPlayersInfo();

        if(allPlayersInfo !== undefined){
            var x = 0;
            var y = 0;
            var index = 0;
            for(var plr in allPlayersInfo){
                index+=1;
                x+=200;
                y = displayHeight - allPlayersInfo[plr].Distance - 400;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                //console.log(player.index);
                if(index === player.index){
                    cars[index - 1].shapeColor = "Red";
                }
            }
        }

        if(keyDown(UP_ARROW) && player.index !== 0){
            player.distance+= 50;
            player.update();
        }
        drawSprites();
    }
}