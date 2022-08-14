var menuShow = document.querySelector('nav ul');
var menuBar = document.querySelector('.icon-menu');
var iconMenu = document.querySelector('.icon-menu img');


menuBar.addEventListener('click', function(){
    
    if (iconMenu.getAttribute('src') == 'img/menu.png') {
        iconMenu.setAttribute('src', 'img/close.png');
    }
    
    else {
        iconMenu.setAttribute('src', 'img/menu.png');
    }
      
    menuShow.classList.toggle('active');
});