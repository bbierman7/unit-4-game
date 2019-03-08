$(document).ready(function() {

        

          //CRYSTAL ARRAY FOR BUTTONS
          var crystals = ["assets/images/crystal-1.png", "assets/images/crystal-2.png", "assets/images/crystal-3.png", "assets/images/crystal-4.png"];
          var random;
          
          //Variable named crystalBtn equal to $("<button>")
        function renderimg() {
            
         for (let i = 0; i < crystals.length; i++) {
             $(".imagediv").empty();
             var crystalBtn = $("<img>");
             crystalBtn.addClass("crystals")
             .attr("value", Math.floor(Math.random()*11+1))
             .attr("src", crystals[i]);
             $(".imagesdiv").append(crystalBtn);
         }

        }

        //FOR EACH CRYSTAL CLICKED, STORE THAT VALUE IN VAR totalScore
      
        //IF totalScore < random, THEN LET USER CONTINUE TO CLICK CRYSTALS
        if (totalScore < random){
            
        } 
        //ELSE IF totalScore === resetGame, print 'You won!', and wins++
        else if (totalScore === random){

        }
        // ELSE print "You lost"

        else{
                
        }  




          //RESET "MATCH THIS VALUE" TO NEW RANDOM NUMBER
         function resetGame() {
           debugger;
             random=Math.floor(Math.random()*102)+19;
             $("#randomNum").text(random);
             renderimg();
            }

            resetGame();
      
         
          
});
