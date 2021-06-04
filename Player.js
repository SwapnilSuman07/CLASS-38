class Player{
    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = 0;
    }
    getCount(){
        var playerCountRef=database.ref("PlayerCount")
        playerCountRef.on("value",function (data){
            playerCount = data.val();
        })
    }
    
    updateCount(count){
        var playerCountRef = database.ref("/");
        playerCountRef.update({
            PlayerCount : count
        })
    }
    
    update(){
        var playerNameRef = database.ref("Players/Player" + this.index);
        playerNameRef.update({
            Name : this.name,
            Distance : this.distance
        })
    }

    static getPlayersInfo(){
        var playerInfoRef = database.ref("Players");
        playerInfoRef.on("value", (data)=>{
            allPlayersInfo = data.val();
        })
    }
}