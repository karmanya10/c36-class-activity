class player{
    constructor(){}

    // we have player count and player name stored in data base = so we will read and write these values

    getCount(){


        var playercountref = mydatabase.ref('playercount');
        playercountref.on("value",readcount,showerror);
    
    }

    showerror(){

        console.log("error accessing database");
    
    
    }

    readcount(data){
    
        playercount= data.val();
    
    }

    updateCount(count){

        mydatabase.ref('/').update({
            playercount : count //updating the playercount in the data base
        });

    }

    updateName(playername){

        var playerLabel = "player" + playercount;
        //update the playername in the database where it is empty
        mydatabase.ref(playerLabel).set({
            name : playername
        });

    }


}