var number = Math.floor(Math.random()*5)+1;
var timerStart = 0;
var timerStop = 0;

function hide()
{
    $("#slider").fadeOut(500);
}

function setSlide(slideNumber)
{
    clearTimeout(timerStart);
    clearTimeout(timerStop);
    number = slideNumber - 1;
    
    hide();
    setTimeout("switchSlide()", 500);
}

function switchSlide()
{
    number++;
    if(number > 5)
        number = 1;
    
    var file = "<img src=\"slides/pic" + number + ".jfif\" />";
    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);
    
    timerStart = setTimeout("switchSlide()", 5000);
    timerStop = setTimeout("hide()", 4500);
}