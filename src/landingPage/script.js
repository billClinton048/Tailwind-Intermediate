const products = [
  {
    name: "Sony Playstation 5",
    url: "images/playstation_5.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "images/samsung_galaxy.png",
    type: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "images/cannon_eos_camera.png",
    type: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "images/sony_a7_camera.png",
    type: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "images/lg_tv.png",
    type: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "images/nintendo_switch.png",
    type: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "images/xbox_series_x.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "images/samsung_tv.png",
    type: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "images/google_pixel.png",
    type: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "images/sony_zv1f_camera.png",
    type: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "images/toshiba_tv.png",
    type: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "images/iphone_14.png",
    type: "smartphones",
    price: 999.99,
  },
];

// getting dom elements

const productsWrapper = document.getElementById("productsWrapper");
const checkboxes = document.querySelectorAll(".check");
const filtersContainer = document.getElementById("filterContent");
const searchInput = document.getElementById("srch");
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");

filtersContainer.addEventListener('change', filterProducts)
searchInput.addEventListener('input', filterProducts)


let cartItem = 0;
const myProducts = [];

products.forEach((product) => {
    const productEl = createElementor(product)
  myProducts.push(productEl);
  productsWrapper.appendChild(productEl);
});

// function to createElement
function createElementor(product) {
  const productEl = document.createElement("div");
  productEl.className = "item space-y-2";
  productEl.innerHTML = `<div
    class="bg-bgGray flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl"
  >
    <img
      src="${product.url}"
      alt="${product.name}"
      class="w-full h-full object-cover"
    />
    <span
      class="status bg-bgcolor text-textred absolute bottom-0 left-0 right-0 text-center py-1 translate-y-full transition group-hover:translate-y-0"
      >Add To Cart</span
    >
  </div>
  <p class="text-xl">${product.name}</p>
  <strong>$${product.price.toLocaleString()}</strong>`;

  productEl.querySelector('.status').addEventListener('click', updateCart)

  return productEl
}

// updateCarte

function updateCart(e){
    const statusEl = e.target;
   if(statusEl.classList.contains("added")){
    statusEl.classList.remove("added")
    statusEl.innerText = 'Add to Cart'
    statusEl.classList.remove('bg-textred')
    statusEl.classList.remove('text-bgcolor')

    cartItem -= 1;


   }else{
    statusEl.classList.add("added")
    statusEl.innerText = 'Remove From Cart'
    statusEl.classList.add('bg-textred')
    statusEl.classList.add('text-bgcolor')
    cartItem += 1;


   }

   cartCount.innerText = cartItem.toString();
}


// filter function 
function filterProducts(){
    const searchTerm = searchInput.value.trim().toLowerCase();

    // get checked
    const checkedCartegories = Array.from(checkboxes).filter((check) => check.checked).map((check) => check.id)

    

    // loop
    myProducts.forEach((productElement, index) => {
        const product = products[index]


        const matchSearch = product.name.toLowerCase().includes(searchTerm);
        const isInCheck = checkedCartegories.length === 0 || checkedCartegories.includes(product.type)

        if(matchSearch && isInCheck){
            productElement.classList.remove('hidden')
        }else{
            productElement.classList.add('hidden')
        }
    })
    }


