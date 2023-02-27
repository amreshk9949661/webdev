function displayTime(){

var dateTime=new Date();
var hrs=dateTime.getHours();
var mins=dateTime.getMinutes();
var seconds=dateTime.getSeconds();
var session=document.getElementById('session');

if (hrs > 12){
    session.innerHTML = 'pm';
}
else{
    session.innerHTML = 'am';
}
if (hrs > 12)
{
    hrs = hrs - 12;
}
document.getElementById('hours').innerHTML = hrs;
document.getElementById('minutes').innerHTML = mins; 
document.getElementById('seconds').innerHTML = seconds; 

}
setInterval(displayHello(),1000);