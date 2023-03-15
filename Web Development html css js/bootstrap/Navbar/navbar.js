
let modetoggle = document.getElementById('modetoggle');
let mainbody = document.getElementsByClassName('mainbody')[0];
document.getElementById('modeicon').addEventListener("click",()=>{
    mainbody.classList.toggle('light');
    modetoggle.classList.toggle('fa-moon');
});

let ham = document.getElementById('ham');
let con = document.getElementsByClassName('container')[0];
ham.addEventListener("click",function(){
    console.log(ham);
    console.log(con);
    con.classList.toggle('sidebar-min');
});