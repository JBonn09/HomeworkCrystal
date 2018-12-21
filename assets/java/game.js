var target = "";
var wins = 0;
var losses = 0;
var score = 0;
var startGame;
var blue;
var green;
var white;
var yellow;




function randomTarget () {
    target = Math.floor(Math.random() * 102) + 19;
}

function startGame () {

    $("#blue").on("click", function(){
        userScore = userScore + blue;
        $("#userScore").text(userScore);

        if (userScore=== computerPick){
            wins++;
            $("#w-span").text(wins);
            startgame();
        }

        if (userScore> computerPick){
            losses++;
            $("#l-span").text(losses);
            startgame();
        }
   })
   
        var images = $("<img>");
        images.addClass("images");
        images.attr("images");
        images.attr("src, images[i]");
        images.attr("value", (Math.floor(Math.random() * 12)+ 1));
        images.attr("height", "100");
        $(".images").append(images);
        
    }


function resetHTML () {
    $("target").html(target);
    $("win-losses").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" )
}

function totalReset () {
    randomTarget ();
    counter = 0;
    resetHTML ();
    resetImages ();

}

randomTarget ();
resetHTML ();


function crystalClick () {
    counter +=parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == target) {
        wins++;
        totalReset();

    }
    else if (counter > target) {
        losses++;
        totalReset();

    };
};

$(document).on("click", "crystal-images1", imagesClick);
