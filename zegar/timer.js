function counting()
        {
        
        var today = new Date();
        
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        
        var hour = today.getHours();
        var minute = today.getMinutes();
        var seconds = today.getSeconds();
        
            
        document.getElementById("clock").innerHTML = 
                getZeroIfNeeded(day) + "/" + getZeroIfNeeded(month) + "/" + getZeroIfNeeded(year) + "  |  " + getZeroIfNeeded(hour) + ":" + getZeroIfNeeded(minute) + ":" + getZeroIfNeeded(seconds);
            
         setTimeout("counting()", 1000);  
            
        }
        
function getZeroIfNeeded(number)
{
    let gettingOrNot =  number + "";
    if(gettingOrNot.length > 1)
        return number;
    else
        return 0 + gettingOrNot;
}