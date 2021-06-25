var count=0;
var flag=0;
function reset()
{
    document.getElementById("win").value = "";
    count=0;
    flag=0;
    document.getElementById("b1").value = "";
document.getElementById("b2").value = "";
document.getElementById("b3").value = "";
document.getElementById("b4").value = "";
document.getElementById("b5").value = "";
document.getElementById("b6").value = "";
document.getElementById("b7").value = "";
document.getElementById("b8").value = "";
document.getElementById("b9").value = "";
document.getElementById("b1").disabled = false;
document.getElementById("b2").disabled = false;
document.getElementById("b3").disabled = false;
document.getElementById("b4").disabled = false;
document.getElementById("b5").disabled = false;
document.getElementById("b6").disabled = false;
document.getElementById("b7").disabled = false;
document.getElementById("b8").disabled = false;
document.getElementById("b9").disabled = false;
}

function Game(a)
{
    if(count<3 || flag==0)
    {
    count++;
    if(count%2==0)
    {
    document.getElementById(a).value ='O';
    document.getElementById(a).disabled = true;
    }
    else if(count%2!==0)
    {
   document.getElementById(a).value ='X';
   document.getElementById(a).disabled = true;
    }
    if (count>=5 && flag==0)
   {
       let a1= document.getElementById("b1").value;
       let a2= document.getElementById("b2").value;
       let a3= document.getElementById("b3").value;
       let a4= document.getElementById("b4").value;
       let a5= document.getElementById("b5").value;
       let a6= document.getElementById("b6").value;
       let a7= document.getElementById("b7").value;
       let a8= document.getElementById("b8").value;
       let a9= document.getElementById("b9").value;
       if(((a1 !="" && a2 !="" && a3!="") && ((a1 == a2) &&(a2 == a3)))||
       ((a4!="" && a5 !="" && a6!="") && ((a4 == a5) &&(a5 == a6)))||
       ((a7!="" && a8 !="" && a9!="") && ((a7 == a8) &&(a8 == a9)))||
       ((a1!="" && a4 !="" && a7!="") && ((a1 == a4) &&(a4 == a7)))||
       ((a2!="" && a5 !="" && a8!="") && ((a2 == a5) &&(a5 == a8)))||
       ((a3!="" && a6 !="" && a9!="") && ((a3 == a6) &&(a6 == a9)))||
       ((a1!="" && a5 !="" && a9!="") && ((a1 == a5) &&(a5 == a9)))||
       ((a3!="" && a5 !="" && a7!="") && ((a3 == a5) &&(a5 == a7))))
           {

               console.log(count);
               flag=1;
               document.getElementById("b1").disabled = true;
               document.getElementById("b2").disabled = true;
               document.getElementById("b3").disabled = true;
               document.getElementById("b4").disabled = true;
               document.getElementById("b5").disabled = true;
               document.getElementById("b6").disabled = true;
               document.getElementById("b7").disabled = true;
               document.getElementById("b8").disabled = true;
               document.getElementById("b9").disabled = true;
               document.getElementById("win").value = document.getElementById(a).value+" Won the Game!";
               
           }
   }
   }
}