class form{
    constructor(){}

        display(){

            //title for our form
            var title = createElement('h2');
            title.html("Car Racing Game");
            title.position(120,0);

            //created and input box for the player to enter his name
            var input = createInput("Name");
            //created a button so that player can press enter after writing name
            var button = createButton("Play");
            
            input.position(150,200);
            button.position(200,150);

            var greeting = createElement('h3');


            button.mousePressed(setGame());          


            
        }        
        setGame(){

            input.hide();
            button.hide();

            var playername = input.value();//input.value will return whaterver player has entered on the form
            myplayer.updateName(playername); //add the player name to the data base using the player object

            playercount = playercount + 1;
            myplayer.updateCount(playercount); //abstraction
            
            greeting.html("Hello" + playername);
            greeting.position(130,150);
                
        }
}