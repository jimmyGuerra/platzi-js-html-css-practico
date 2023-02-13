const desktopmenu = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.navbar-email')

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    //de esta manera se resume todo el condicional que se encuentra comentado
    desktopmenu.classList.toggle('inactive');

/*    if(desktopmenu.getAttribute('class') == "desktop-menu inactive"){
        desktopmenu.classList.remove('inactive');
        console.log(desktopmenu.getAttribute('class'));
    }else{
        desktopmenu.classList.add('inactive');
        console.log(desktopmenu.getAttribute('class'));
    }*/
}
