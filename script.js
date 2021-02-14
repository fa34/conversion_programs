

function hoursToS(){
    var hours=document.getElementById("1h").value;
    cal=hours*60*60 ;
    document.getElementById("demo").innerHTML="The " +hours +" hours in seconds = " + cal;
    



}


function hoursToA(){
    var days=document.getElementById("2h").value;
    cal=days*365 ;
    document.getElementById("demo1").innerHTML="The " +days +" years in days = " + cal;
    



}


function hoursToY(){
    var year=document.getElementById("3h").value;
    if ((year%4==0) && (0 != year % 100) || (0 == year % 400)){
    
    document.getElementById("demo2").innerHTML="It is a Leap year";
    }
    else {
        document.getElementById("demo2").innerHTML="It is not a Leap year";
    }
    



}
function hoursToI(){
    var ram=document.getElementById("4h").value;
    var ch=ram.toString(ram);
    document.getElementById("demo3").innerHTML=ch;
    



}

function hoursToZ(){
    var nam=document.getElementById("5h").value;
    if (nam[0]===nam[1]){
    document.getElementById("demo4").innerHTML="True";
    
    }
else{
    document.getElementById("demo4").innerHTML="False";


}

}


function hoursToX(){
var val=document.getElementById("6h").value;
var ss=val*-1;
document.getElementById("demo5").innerHTML=ss;
    



}

