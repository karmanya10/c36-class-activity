class Game{
    constructor(){}


    updateState(state){
        
        mydatabase.ref('/').update({
            gamestate : state //updating the game state in the data base
        });

    }

    readVal(data){
        
        gamestate = data.val();

    }


    //reading the game state value from database
    getstate(){ 
        
        var gamestateref = mydatabase.ref('gamestate');
        gamestateref.on("value",readVal,showerror);

    }

    showerror(){

        console.log("error accessing database");

    }

    start(){

            if(gamestate === 0){

                //creating player object
                myplayer = new player();
                myplayer.getCount();

                //creating form object
                myform = new form();
                myform.display();
            }   
        }
}
