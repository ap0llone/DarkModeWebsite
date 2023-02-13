//dark theme
const btn = document.getElementById("btn");
const btnText = document.getElementById("btnText");
const btnIcon = document.getElementById("btnIcon");

btn.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "style/images/sun.png";
        btnText.innerHTML = "Light";
    }else{
        btnIcon.src = "style/images/moon.png"
        btnText.innerHTML = "Dark";
    }
}

//navbar hamburger
const menu = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('open');
}
