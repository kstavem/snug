const productContainer = document.querySelector(".product--container");

function createHTML(myArray) {

    for (var i = 0; i < myArray.length; i++) {
        const product = myArray[i];
        const name = product.name;
        const image = product.image.sm;
        const id = product.id;
        const link = `detailed.html?id=${id}`
        let discount = product.price.discountpct;
        let sale = "product--onsale__nodisplay";
        if (discount > 0) {
            sale = "product--text__sale"
        }
        productContainer.innerHTML +=
            `
            <a href="${link}" class="product--display" style="background-image: url(${image})">
                <h2 class="product--text shadow">${name}</h2>
                <p class="${sale}">sale</p>
            </a>
            `
    }
};

createHTML(productArray);

if (window.location.pathname.includes("product.html")) {
    createHTML(productArray);
    createHTML(productArray);
};