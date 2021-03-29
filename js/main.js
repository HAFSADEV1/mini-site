
function addToJsonFile(){
  event.preventDefault();
  var inputes=document.querySelectorAll("input");
  var memebrs=document.querySelector("textarea");
  var data=[inputes[0].value,inputes[1].value,inputes[2].value,inputes[3].value,memebrs.value];
  var xhttp =new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
    if (this.readyState==4 && this.status==200){
         console.log(this.responseText);
    }
  }
  xhttp.open("POST","main.php");
  xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  xhttp.send("data="+data+"");
}















