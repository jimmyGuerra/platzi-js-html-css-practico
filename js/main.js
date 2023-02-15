//Desktop menu
const desktopmenu = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click', toggleDesktopMenu);

//Mobile Menu
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

iconMenuMobile.addEventListener('click', toggleMobileMenu)




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

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
