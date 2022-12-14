const cart = {
    currentPrice:0,
    items :[],
    additem: function(cookie,price) {
        //add a cookie(string) to the items array
        
        this.items.push(cookie)
        
        //add the price(number) to the currentPrice properties
        
        this.currentPrice=this.currentPrice+price
    },
clear:function() {
    //reset the currentPrice and items properties
    this.currentPrice=0
    this.items=[]
},
}

function addToCart(cookie) {
    /*PRICES
    peanut-butter:20
    sandies:30
    party press:35
    chcocolate chip:25
    */

    console.log('The user is ading this type of cookie to their cart: ' , cookie)

    //add 1 to the itemcount vairable

    

    

    //add the correct price to the currentPrice variable

    if (cookie == 'peanut butter'){cart.additem(cookie,20)}
    if (cookie == 'sandles'){cart.additem(cookie, 30)}
    if (cookie == 'party press') {cart.additem(cookie,35)}
    if (cookie == 'chocolate chip') { cart.adddItem(cookie,25}
   
   document.querySelector(".hoverText").innerHTML = cart.currentPrice
   console.log(cart)
   document.getElementById("cartItems").InnerHTML=cart.items.length
}
functioncheckout()
    {

    console.log('User is checking out.')
    //let your customer know how many items they are purchasing and the price 
window.alert(`You have a total of ${itemCount} items that will cost ${currentPrice}. Thank you for shopping with us `)
prompt("Please provide your name and address. /n Thank you for shopping with us!")
cart.clear()
document.querySelector(".hoverText").innerHTML = cart.currentPrice
console.log(cart)
document.getElementById("cartItems").innerHTML = cart.items.length
    }

function darkMode() {
    // add your code here

    document.querySelector("body").style.backgroundColor ="black"
    document.querySelector("main").style.color="white"
    document.querySelector("h1").style.color="white"
}


