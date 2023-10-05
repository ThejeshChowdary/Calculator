function rem()
{
    document.getElementById("box").value=" "
}
function mod()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+"%"
}
function back()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data.slice(0,data.length-1)
}
function div()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+"/"
}
function seven()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+7
}
function eight()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+8
}
function nine()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+9
}
function mul()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+"*"
}
function four()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+4
}
function five()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+5
}
function six()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+6
}
function sub()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+"-"
}
function one()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+1
}
function two()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+2
}
function three()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+3
}
function add()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+"+"
}
function dzero()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+"00"
}
function zero()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+0
}
function dot()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=data+"."
}
function sum()
{
    var data = document.getElementById("box").value
    document.getElementById("box").value=eval(data)
}
