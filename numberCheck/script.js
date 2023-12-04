function check()
{
    var number = document.getElementById("field").value;
    if(number > 0)
        document.getElementById("answer").innerHTML="Dodatnia";
    else if(number < 0)
        document.getElementById("answer").innerHTML="Ujemna";
    else if(number == 0)
        document.getElementById("answer").innerHTML="Zero";
    else
        document.getElementById("answer").innerHTML="To nie jest liczba";    
}