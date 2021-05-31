var x = 1;
function Change(n)
{
    x += n;
    if(x < 1){x = 3;}
    if(x > 3){x = 1;}

    if(x == 1)
    {
        document.getElementById("slide").src = "Graphics/ceny.png";
    }
    if(x == 2)
    {
        document.getElementById("slide").src = "Graphics/jakosc.png";
    }
    if(x == 3)
    {
        document.getElementById("slide").src = "Graphics/dostawy.png";
    }
}

function Startup()
{
    setInterval(function()
    { 
        Change(1);
    }, 4000);
}