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

          
         function resetGame() {
             random=Math.floor(Math.random()*101+19);
             $("#randomNum").text(random);
             renderimg();
         }

            resetGame();
          //RANDOM # GENERATOR FOR CRYSTAL 1 BETWEEN 1-12. MUST BE HIDDEN
          //RANDOM # GENERATOR FOR CRYSTAL 2 BETWEEN 1-12. MUST BE HIDDEN
          //RANDOM # GENERATOR FOR CRYSTAL 3 BETWEEN 1-12. MUST BE HIDDEN
          //RANDOM # GENERATOR FOR CRYSTAL 4 BETWEEN 1-12. MUST BE HIDDEN

         
         

          //SECION FOR "YOUR TOTAL SCORE IS: "
          

          //SECTION FOR TOTAL SCORE NUMERICAL VALUE
         
          
});
