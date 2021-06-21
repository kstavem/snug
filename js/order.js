const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const productId = params.get("id");
const container = document.querySelector(".container");

for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].id === productId) {
        const product = productArray[i];
        container.innerHTML =
            `
        <div>
            <p>${product.name}</p>
            <p>${product.stock}</p>
        </div>
        `
    }
}

