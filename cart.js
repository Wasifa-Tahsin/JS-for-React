const addProduct=()=>{
const productName=document.getElementById('product-name')
const productQuantity=document.getElementById('product-quantity')
const product=productName.value
const quantity=productQuantity.value
productName.value=''
productQuantity.value=''
console.log(product,quantity)
displayProduct(product,quantity)
saveProductToLocalStorage(product,quantity)

}

const displayProduct=(product,quantity)=>{
    const ul=document.getElementById('product-container')
    const li=document.createElement('li')
    li.innerText=`${product}:${quantity}`
    ul.appendChild(li)
}


const getStoredShoppingCart=()=>{
    let cart={};
const storedCard=localStorage.getItem('cart')

if(storedCard){
cart=JSON.parse(storedCard)
}
return cart
}


const saveProductToLocalStorage=(product,quantity)=>{
const cart=getStoredShoppingCart()
cart[product]=quantity
// console.log(cart)
const cartStringified=JSON.stringify(cart)
// console.log(cartStringified)

localStorage.setItem('cart',cartStringified)
}


const displayProductsFromLocalStorage=()=>{
    const savedCart=getStoredShoppingCart();
    console.log(savedCart)
    for(const product in savedCart){
        const quantity=savedCart[product]

        console.log(product,quantity)
        displayProduct(product,quantity)
    }
}
displayProductsFromLocalStorage()