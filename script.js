var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

function subscribed(){
    var check=document.getElementById("Sbtn").innerHTML;
    if(check=="subscribed"){
        document.getElementById("Sbtn").innerHTML="subscribe";
        document.getElementById("Sbtn").style.background="red";
    }
    else{
    document.getElementById("Sbtn").innerHTML="subscribed";
    document.getElementById("Sbtn").style.background="#5a5a5a";
    }
}