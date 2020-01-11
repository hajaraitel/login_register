//a tester avec le getelementbyclassename pour eviter la redondance

var registerLink = document.getElementById("registerLink");
var singinLink=document.getElementById("singinLink");
var formSign=document.getElementById("formSign");
var formRegister=document.getElementById("formRegister");
formRegister.style.display='none';
registerLink.addEventListener("click", function(){
    formSign.style.display='none';
    formRegister.style.display='block';
});

singinLink.addEventListener("click", function(){
    formRegister.style.display='none';
    formSign.style.display='block';
});