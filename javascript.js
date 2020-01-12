
var formSign=document.getElementById("formSign");
var formRegister=document.getElementById("formRegister");
var links=document.getElementsByClassName("link");

Array.from(links).forEach(element => {
    element.addEventListener("click",function(e){
        if(e.target.id=="registerLink")
        {   
            formSign.style.display='none';
            formRegister.style.display='block';
        }
        else
        {  
            formRegister.style.display='none';
            formSign.style.display='block';
        } 
    });
});
