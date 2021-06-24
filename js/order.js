const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const productId = params.get("id");
const productQuantity = params.get("quantity");
const quantSelect = document.querySelector("#quantity--select");
const itemSelect = document.querySelector("#snug--product");
const priceDisplayEach = document.querySelector("#order--price");
const priceDisplayTotal = document.querySelector("#order--price__total");
const currencyDisplay = document.querySelectorAll(".order--currency");
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

// Populate the order-fields with the correct product/price and change the image to match.
function myOrder() {
    for (var i = 0; i < productArray.length; i++) {
        const product = productArray[i];
        const id = product.id;
        const image = product.image.sm;
        const imageAlt = product.image.alt;
        const imageDisplay = document.querySelector(".product--image");
        const selected = itemSelect.options[itemSelect.selectedIndex].value;
        const itemPrice = product.price.dollar.amount;
        const currency = product.price.dollar.currency;
        const discount = product.price.discountpct;
        let sellPrice = itemPrice;
        if (discount !== 0) {
            sellPrice = Math.floor(itemPrice - (itemPrice * discount / 100));
        }

        if (selected == id) {
            priceDisplayEach.innerHTML = sellPrice;
            priceDisplayTotal.innerHTML = (sellPrice * Number(quantSelect.value));
            imageDisplay.src = image;
            imageDisplay.alt = imageAlt;
            currencyDisplay.forEach(function (span) {
                span.innerHTML = currency;
            });
        };
    };
};

myOrder();

// Eventlisteners to update when any of the selects change
itemSelect.addEventListener("change", myOrder);
quantSelect.addEventListener("change", myOrder);

//////// FORM ////////
const fullName = document.querySelector("#fullname");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const button = document.querySelector("button");
let errorArray = [];

function checkLength(name, len) {
    if (name.value.trim().length > len) {
        name.labels[0].classList = "stock__yes"
        return true;
    } else {
        name.labels[0].classList = "stock__no";
        errorArray.push(`${name.placeholder} needs to be at least ${len + 1} letters<br>`);
        return false;
    }
};

function checkEmail(address) {
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(address.value);
    if (match) {
        email.labels[0].classList = "stock__yes";
        return match;
    } else {
        email.labels[0].classList = "stock__no";
        errorArray.push(`Email address is invalid`)
        return match;
    }
};

function validateForm() {
    let messageContainer = document.querySelector("#order--confirm__lg");
    let donationBase = priceDisplayTotal.innerHTML;
    let donationTotal = Number(donationBase * 5 / 100).toFixed(2);
    let purchasedItem = itemSelect.options[itemSelect.selectedIndex].innerHTML;
    const donationCurrency = currencyDisplay[0].innerHTML;
    const orderConfirm =
        `
            <p class="para">
                Congratulations on purchasing the ${purchasedItem}. Snug has donated ${donationCurrency}${donationTotal} on your behalf to UNICEF. Thank you!
            </p>
        `;
    messageContainer.innerHTML = ``;
    errorArray = [];
    const validName = checkLength(fullName, 0);
    const validAddress = checkLength(address, 14);
    const validEmail = checkEmail(email);

    if ((validName) && (validAddress) && (validEmail)) {
        messageContainer.classList.add("order--success");
        messageContainer.classList.remove("order--error", "nodisplay", "para");
        messageContainer.innerHTML = orderConfirm;
    } else {
        for (i = 0; i < errorArray.length; i++) {
            messageContainer.innerHTML += errorArray[i];
            messageContainer.classList.remove("nodisplay");
            messageContainer.classList.add("order--error", "para")
        }
    }
};

button.addEventListener("click", function (event) {
    event.preventDefault();
    validateForm();
});









