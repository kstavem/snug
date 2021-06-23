const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const productId = params.get("id");
const productQuantity = params.get("quantity");
const quantSelect = document.querySelector("#quantity--select");
const itemSelect = document.querySelector("#snug--product");
const priceDisplayEach = document.querySelector("#order--price");
const priceDisplayTotal = document.querySelector("#order--price__total");

// Set the selected quantity to match the querystring, or 1 if none is present.
if (productQuantity) {
    quantSelect.value = productQuantity;
} else {
    quantSelect.value = "1";
};

// Create select options based on product JSON, and if the id matches the querystring parameter set it as selected option.
function myItem() {
    let itemOption = "";
    for (var i = 0; i < productArray.length; i++) {
        const product = productArray[i];
        const id = product.id;
        const name = product.name;
        itemOption = document.createElement(`option`);
        itemOption.value = `${id}`;
        itemOption.innerHTML = `${name}`;
        if (id == productId) {
            itemOption.selected = true;
        };
        itemSelect.add(itemOption);
    };
};

myItem();

function myPrice() {
    for (var i = 0; i < productArray.length; i++) {
        const product = productArray[i];
        const id = product.id;
        const selected = itemSelect.options[itemSelect.selectedIndex].value;
        const itemPrice = product.price.dollar.amount;
        const currency = product.price.dollar.currency;
        const discount = product.price.discountpct;
        let sellPrice;
        if (discount == 0) {
            sellPrice = itemPrice;
        } else {
            sellPrice = itemPrice - (itemPrice * discount / 100);
        };



    }
}






