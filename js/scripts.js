// Click counter code from ReeCube on StackOverflow
// https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter
var foodClicks = 0;
var waterClicks = 0;

$("#apple-button").on("click", death)

function foodClick() {
    foodClicks += 1;
    document.getElementById("foodClick").innerHTML = foodClicks;
    $(".grid-dish").html("<div><img src='imgs/meat dish.png' alt='meatbowl'></div><img src='imgs/apple.png' alt='apple-still'>")
    $("body").css("background-image", "url(../imgs/animals.png)")

    if(foodClicks >= 20) {
        $("#apple").html("<div></div><div class='grid-dish'><div><img src='imgs/meat dish.png'></div><img src='imgs/apple_gif.gif' alt='dance'></div>")
    }

    if(waterClicks >= 100 && foodClicks >=100) {
        $("#page").empty()
        $("body").css("background-image", "url(imgs/win.png)")
        $("#page").html("<div></div><h1>Pompom has grown into a beautiful creature due to your efforts. Thank you for giving yourself carpal tunnel.</h1>")
    }
}

function waterClick() {
    waterClicks += 1;
    document.getElementById("waterClick").innerHTML = waterClicks;
    $(".grid-dish").html("<div><img src='imgs/water dish.png' alt='waterbowl'></div><img src='imgs/apple.png' alt='apple-still'>")
    $("body").css("background-image", "url(../imgs/rain_gif.gif)")

    if(waterClicks >= 20) {
        $("#apple").html("<div></div><div class='grid-dish'><div><img src='imgs/water dish.png'></div><img src='imgs/apple_gif.gif' alt='dance'></div>")
    }

    if(waterClicks >= 100 && foodClicks >=100) {
        $("#page").empty()
        $("body").css("background-image", "url(imgs/win.png)")
        $("#page").html("<div></div><h1>Pompom has grown into a beautiful creature due to your efforts. Thank you for giving yourself carpal tunnel.</h1>")
    }
}

function death() {
    $("#page").empty()
    $("body").css("background-image", "url(imgs/death.png)")
    $("#page").html("<div></div><h1>You sick freak! They were allergic to apples!!</h1>")
}

              
