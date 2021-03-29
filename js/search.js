function search(){
    event.preventDefault();
    let xhttp =new XMLHttpRequest();
    let sujet=document.querySelector("input").value;
    let res=document.querySelector("p");
    let lien=document.querySelector(".lien");
    let found=false;
    xhttp.onreadystatechange=function(){
      if (this.readyState==4 && this.status==200){
          let users=JSON.parse(this.responseText);
          for(let i=0;i<users.length;i++){
              if(users[i].sujet==sujet){
                 res.innerHTML="Date Expose: " +users[i].dateExpose+"<br>"+"Sujet: "+users[i].Sujet
                 +"<br>"+"Tags: "+users[i].Tags+"<br>"+"Membres: "+users[i].Membres;
                 lien.href=users[i].lien;
                 lien.innerText=users[i].lien;
                 found=true;
              }
          }
          if(!found){
              res.innerHTML="Vielle n'exists pas!!!!!!!";
              lien.innerHTML="";
          }
          
      }
    }
    xhttp.open("GET","users.json");
    xhttp.send();
}
function find(){
    search();
    createButton();
}
function createButton(){
    var element=document.createElement("button");
    document.getElementById("btn").remove();
    element.classList.add("nice");
    var spn=document.getElementById("mer");
    element.innerHTML="<span class='glyphicon glyphicon-search'></span>";
    element.style.border="none";
    element.style.outline="none";
    spn.appendChild(element);
    element.addEventListener("click",function(){
        search();
    })
}
