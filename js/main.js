//Desktop menu
const desktopmenu = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.navbar-email');
navEmail.addEventListener('click', toggleDesktopMenu);

//Mobile Menu
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
iconMenuMobile.addEventListener('click', toggleMobileMenu);

//Carrito de compras
const iconCar = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('#shoppingCartConteiner');
iconCar.addEventListener('click', toggleShoppingCar)

//Lista de productos 
const cardConteiner = document.querySelector('.cards-conteiner');

//Detalles de los productos
const productDetailConteiner = document.querySelector('#productDetail');
const buttonClosedDetails = document.querySelector('.product-detail-close');

//Desktop menu
function toggleDesktopMenu(){
    //de esta manera se resume todo el condicional que se encuentra comentado
    shoppingCar.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopmenu.classList.toggle('inactive');
    productDetailConteiner.classList.add('inactive');

/*    if(desktopmenu.getAttribute('class') == "desktop-menu inactive"){
        desktopmenu.classList.remove('inactive');
        console.log(desktopmenu.getAttribute('class'));
    }else{
        desktopmenu.classList.add('inactive');
        console.log(desktopmenu.getAttribute('class'));
    }*/
}


//Mobile Menu
function toggleMobileMenu(){
    //se le agrega a shoppingCar la clase inactive, en dado caso no este abierto
    //de esta manera se evita que en mobile se monte un menu sobre otro
    shoppingCar.classList.add('inactive');
    desktopmenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    productDetailConteiner.classList.add('inactive');
}


//Carrito de compras
function toggleShoppingCar(){
    //se le agrega a mobileMenu la clase inactive, en dado caso no este abierto
    //de esta manera se evita que en mobile se monte un menu sobre otro

    mobileMenu.classList.add('inactive');
    desktopmenu.classList.add('inactive');
    shoppingCar.classList.toggle('inactive');
    productDetailConteiner.classList.add('inactive');

}

//Lista de productos
const productList = [];


productList.push({
    name: 'computadora',
    price: 1202,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


productList.push({
    name: 'pantalla',
    price: 550,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProduct(productList){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
    
        productPrice.innerText = '$' + product.price;
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src', './css/icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCar);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg,productInfo)
    
        cardConteiner.append(productCard);
    
    }
}

renderProduct(productList)


//Detalles de los productos
buttonClosedDetails.addEventListener('click', closedProductDetails);

function toggleProductDetail(){
    productDetailConteiner.classList.toggle('inactive');
}

function closedProductDetails(){
    productDetailConteiner.classList.add('inactive');
    shoppingCar.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopmenu.classList.add('inactive');
}
