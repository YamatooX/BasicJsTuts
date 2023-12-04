var password = "Zgadnij hasło";
password = password.toUpperCase();
var passLength = password.length;

var passHelper = "";
var letters = [ "A", "Ą", "B", "C", "Ć", "D", "E",
                "Ę", "F", "G", "H", "I", "J", "K",
                "L", "Ł", "M", "N", "Ń", "O", "Ó",
                "P", "Q", "R", "S", "Ś", "T", "U",
                "V", "W", "X", "Y", "Z", "Ź", "Ż"];

var wrongCounter = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for(i = 0; i < passLength; i++)
{
    if(password.charAt(i) == " ") 
        passHelper = passHelper + " ";
    else 
        passHelper = passHelper + "-";
}  

function correct(number)
{
    //green
    yes.play();
    var divId = "lit" + number;
    document.getElementById(divId).style.background = "#003300";
    document.getElementById(divId).style.opacity = "50%";
    document.getElementById(divId).style.color = "dark green";
    document.getElementById(divId).style.border = "3px solid green";
    document.getElementById(divId).style.cursor = "default";
}

function wrong(number)
{
    //red
    no.play();
    var divId = "lit" + number;
    document.getElementById(divId).style.background = "#330000";
    document.getElementById(divId).style.opacity = "50%";
    document.getElementById(divId).style.color = "dark red";
    document.getElementById(divId).style.border = "3px solid red";
    document.getElementById(divId).style.cursor = "default";
    document.getElementById(divId).setAttribute("onclick",";");

    wrongCounter++;

    var image = "img/s" + wrongCounter + ".jpg";
    document.getElementById("image").innerHTML = '<img src="'+ image +'" alt=""/>';
}

function checkBox(number)
{
    var isChecked = false;
    for(var i = 0; i < passLength; i++)
    {
        if(password.charAt(i) == letters[number])
        {
            passHelper = passHelper.replaceDash(i, letters[number]);
            isChecked = true;            
        }
    }
    
    if(isChecked)
        correct(number);
    else
        wrong(number);
    
    if(password == passHelper)
        document.getElementById("alphabeth").innerHTML = "Brawo. Podano prawidłowe hasło" + 
            '<br/><br/> <span class="reset" onclick="location.reload()">Jeszcze raz?<span/>';
    if(wrongCounter >= 9)
        document.getElementById("alphabeth").innerHTML = "Przegrana" + 
            '<br/><br/> <span class="reset" onclick="location.reload()">Jeszcze raz?<span/>';
    
    writePassword();
}

String.prototype.replaceDash = function(position, character)
{
    if(position >= this.length)
        return this.toString();
    return this.substring(0, position) + character + this.substring(position+1);    
}

function writePassword()
{
    //makeDashes();
    document.getElementById("board").innerHTML = passHelper;
}

function start()
{
    var alphabeth = "";
    
    for(i = 0; i < 35; i++) 
    {
        var htmlElement = "lit" + i;

        alphabeth = alphabeth + '<div class="letter" onclick="checkBox('+ i +')" id="' + htmlElement + '">'+ letters[i] +'</div>';
        if((i + 1) % 7  == 0) 
            alphabeth = alphabeth + '<div style="clear: both;"></div>';
    }
    
    writePassword();    
    document.getElementById("alphabeth").innerHTML = alphabeth;
}

window.onload = start;