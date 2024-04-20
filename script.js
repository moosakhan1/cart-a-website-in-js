// show real products
var products = [
    {name: "Blue Chair", headline: "Lakdi ka stool." , price: "10,000", image:"https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},
    {name: "White Chair", headline: "Soft like cloud." , price: "15,000", image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Traditional Chair", headline: "Looks very old" , price: "16,500", image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];
var popular = [ 
    {name: "red Chair", headline: "Painted blood red" , price: "11,000", image:"https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXIlMjBncmVlbiUyMHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "Empty Chair", headline: "Painted blood empty" , price: "20,000", image:"https://plus.unsplash.com/premium_photo-1681558402395-c2ef667e77dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Pink Chair", headline: "Painted blood pink" , price: "17,500", image:"https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww"}
];
var cart = [];

function addProduct() {
var clutter = "";
    products.forEach(function (product, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
            <img class="w-full h-full object-cover" src="${product.image}" />
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20"${product.headline}</h3>
                    <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                <i  data-index="${index}" class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`
    });

document.querySelector(".products").innerHTML = clutter;

}



function addPopularProducts() {
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars").innerHTML = clutter
}
 
function addToCard() {
    document.querySelector(".products")
    .addEventListener("click", function(details){
            if(details.target.classList.contains('add')){
                cart.push(products[details.target.dataset.index])
            };
    })
}
function showCart() {
    document.querySelector(".carticon")
    .addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";
      

        var clutter = "";
        cart.forEach(function (prod, index) {
            clutter +=`<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}" />
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div> 
            </div>`
        });

        document.querySelector(".cartexpnd")
        .innerHTML = clutter;

    })
}
showCart();
addToCard();
addPopularProducts();
addProduct();


// show real popular products
// on click of product add button add it to the cart