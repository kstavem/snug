const productContainer = document.querySelector(".product--container");

function createHTML(myArray) {
    productContainer.innerHTML = "";

    for (var i = 0; i < myArray.length; i++) {
        const product = myArray[i];
        productContainer.innerHTML +=
            `
        <div>
            <p>${product.name}</p>
            <p>${product.stock}</p>
            <a href="order.html?id=${product.id}">ORDER NOW</a>
        </div>
    `
    }
};

createHTML(productArray);