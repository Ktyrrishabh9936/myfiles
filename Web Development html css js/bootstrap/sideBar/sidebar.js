
let modetoggle = document.getElementById('modetoggle');
let mainbody = document.getElementsByClassName('mainbody')[0];
document.getElementById('modeicon').addEventListener("click",()=>{
    mainbody.classList.toggle('light');
    modetoggle.classList.toggle('fa-moon');
});

let dash = document.getElementsByClassName('board')[0];
let serve = document.getElementsByClassName('ser')[0];
let dashlist = document.getElementById('dashitem');
let rot = document.getElementsByClassName('subicon')[0];
dash.addEventListener("click",function(){
    dash.classList.toggle('show');
});
serve.addEventListener("click",function(){
    serve.classList.toggle('show');
});