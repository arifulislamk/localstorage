const btnhandler =() =>{
    let productcontainer = document.getElementById('Product-content')
    const productText = productcontainer.value
    const quantitycontainer = document.getElementById('quantity-content')
    const quantityText = quantitycontainer.value
    console.log(productText,quantityText)
    productcontainer.value = '';
    quantitycontainer.value ='';
    elementAdd(productText,quantityText)
    saveProductToLocalStorage(productText,quantityText)
}

const elementAdd = (products, quatity) =>{
    const ulContainer =document.getElementById('ul-container')
    const li = document.createElement('li')
    li.innerText = `${products}  ${quatity}`
    ulContainer.appendChild(li)
}

const getStoredShopoingCart = () =>{
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart ;  
}

const saveProductToLocalStorage = (product, quatity)=>{
    const cart = getStoredShopoingCart();
    cart[product]= quatity ;
    // console.log(cart)
    const cartStringify = JSON.stringify(cart);
    console.log(cartStringify)
    localStorage.setItem('cart' , cartStringify)
    // displaySaveFiletoLocalStorage('cart',cartStringify)
}

const displaySaveFiletoLocalStorage = () =>{
    const saveCart = getStoredShopoingCart()
    for(const product in saveCart){
        const quantity = saveCart[product]
        elementAdd(product,quantity)
    }
}
displaySaveFiletoLocalStorage()