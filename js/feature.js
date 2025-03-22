// Object to store cart items
const cart = {};

// Function to add a product to the cart
function addToCart(productName, productPrice, imgSrc) {
    // If the product is already in the cart, increase quantity and update total price
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        // If the product is not in the cart, add it with an initial quantity of 1
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice,
            image: imgSrc
        };
    }
    // Update the cart display after adding an item
    updateCartDisplay();
}

/* function addToCart(imageSrc) {
    let cart = document.getElementById("cart-items");

    // Create a new image element
    let img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Cart Item";
}*/

// Function to remove a product from the cart
function removeFromCart(productName, productPrice) {
    // Check if the product exists in the cart and has at least one quantity
    if (cart[productName] && cart[productName].quantity > 0) {
        cart[productName].quantity -= 1; // Decrease the quantity
        cart[productName].totalPrice -= productPrice; // Adjust the total price

        // If quantity reaches zero, remove the product from the cart
        if (cart[productName].quantity == 0) {
            delete cart[productName];
        }
    } else {
        // Alert the user if they try to remove an item not in the cart
        alert('The item is not in the cart!');
    }
    // Update the cart display after removing an item
    updateCartDisplay();
}

function calculateTotalPrice() {
    let total = 0;
    for (let product in cart) {
        total += cart[product].totalPrice;
    }
    return total;
}

// Function to update the cart display on the webpage
function updateCartDisplay() {
    const cartList = document.getElementById('products');
    cartList.innerHTML = ''; // Clear the current cart list

    // Loop through the cart object and display each product
    for (let product in cart) {
        const listItem = document.createElement('div');
        listItem.innerText = `${product} 
                            - Quantity: ${cart[product].quantity} 
                            - Total Product Price: Php ${cart[product].totalPrice.toFixed(2)}`;
        cartList.appendChild(listItem); // Add the item to the cart list
      //  cart.appendChild(img);
    }

    // Calculate and display the total price
   
}
function updateCartDisplay() {
    const cartList = document.getElementById('products');
    cartList.innerHTML = ''; // Clear the current cart list

    

    // Loop through the cart object and display each product
    for (let product in cart) {

        const listItem = document.createElement('div');
        listItem.innerText = `${product}
                             Quantity: ${cart[product].quantity} 
                             Price: Php ${cart[product].totalPrice.toFixed(2)}`;
        listItem.classList.add("list_of_items");

        const img = document.createElement('img');
        img.src = cart[product].image;
        img.alt = product;
        img.style.width = "50%";
        img.style.justifySelf="center";
        img.style.height = "auto"// Adjust image size
        img.style.marginTop = "10px"; // Space between image and text
        listItem.appendChild(img);

        cartList.appendChild(listItem); // Add the item to the cart list
    }
    const totalPrice = calculateTotalPrice();
    const totalPriceElement = document.createElement('div');
    totalPriceElement.innerText = `Total Price: Php ${totalPrice.toFixed(2)}`;
    totalPriceElement.classList.add("total-cart-price");
    cartList.appendChild(totalPriceElement);
}
