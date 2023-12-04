function writeNumbers()
{
    var lesserNumber = document.getElementById("fieldMin").value;
    var higherNumber = document.getElementById("fieldMax").value;
    
    if(isNaN(lesserNumber) || isNaN(higherNumber))
    {
        document.getElementById("answer").innerHTML = "Podano conajmniej jedną nieliczbę";
        return;
    }
    
    if(lesserNumber == higherNumber)
    {
        document.getElementById("answer").innerHTML = "Liczby są równe, nie ma nic pomiędzy";
        return;
    }
    
    if(lesserNumber > higherNumber)
    {
        var helper = lesserNumber;
        lesserNumber = higherNumber;
        higherNumber = helper;
    }
    
    
    
    var writing = "";
    // sprawdzenie, która mniejsza :P
    
    for(i = lesserNumber; i <= higherNumber; i++)
    {
        writing = writing +  i + " ";
    }
        
    document.getElementById("answer").innerHTML = writing;
}