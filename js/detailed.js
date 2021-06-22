const productContainer = document.querySelector(".content--wrap");
const otherProducts = document.querySelector(".other--products");
const otherHeading = document.querySelector(".other--heading");
const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const productId = params.get("id");

function documentReady() {
    const myEvent = new Event("doc-ready-ish");
    document.body.dispatchEvent(myEvent);
};

function createHTML(myArray) {
    productContainer.innerHTML = "";
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].id === productId) {
            const product = myArray[i];
            const id = product.id;
            const name = product.name;
            const description = product.description;

            const image = product.image.sm;
            const alt = product.image.alt;

            const price = product.price.dollar.amount;
            const price_symbol = product.price.dollar.currency;
            let discount = product.price.discountpct / 100;
            let saleStatus;
            let salePrice;
            if (discount > 0) {
                saleStatus = "product--onsale";
                salePrice = "";
            } else {
                saleStatus = "";
                salePrice = "product--onsale__nodisplay"
            }

            let stock = "";
            let stockColor = "";
            if (product.stock > 0) {
                stock = "in stock";
                stockColor = "stock__yes";
            } else {
                stock = "out of stock";
                stockColor = "stock__no";
            }

            const minAge = product.age.months.min;
            const maxAge = product.age.months.max;
            const age = `${minAge} to ${maxAge} months.`;
            const minWeightKg = product.weight.min.kg;
            const maxWeightKg = product.weight.max.kg;
            const minWeightLb = product.weight.min.lb;
            const maxWeightsLb = product.weight.max.lb;
            const weight = `${minWeightKg} to ${maxWeightKg}kg (${minWeightLb} to ${maxWeightsLb}lb).`;

            const materials = product.materials;
            const carryPositions = product.positions;

            let wash = product.machinewash;
            if (wash) {
                wash = "Yes. Wash no higher than 40&degC.";
            } else {
                wash = "Not machine washable"
            }
            let tumbledry = product.tumbledry;
            if (tumbledry) {
                tumbledry = "Yes, you can tumbledry this product."
            } else {
                tumbledry = "No, do not tumbledry this product."
            }

            productContainer.innerHTML +=
                `
                <p class="pagination"><a href="product.html">Products</a> &gt <a href="${window.location.href}">${name}</a></p>

                <div class="product--details">
                    <div>
                        <img class="product--image" src="${image}" alt="${alt}"/>
                        <div class="flex unicef">
                            <p class="para">
                                <strong>Snug</strong> cares deeply about the wellbeing of children. The company donates 5% of every purchase made to the <span>United Nations Children's Fund</span> (<a href="#">UNICEF</a>).
                            </p>
                            <img src="assets/images/unicef-logo.png" alt="unicef logo" class="unicef--logo">
                        </div>
                    </div>

                    <div class="product--info">
                        <h2>${name}</h2>
                        <p>
                            <span class="${saleStatus}">${price_symbol}${price}</span>
                            <span class="${salePrice}">
                                <strong>${price_symbol}${Math.floor(price - (price * discount))}.00</strong>
                            </span>
                        </p>
                        <p class="${stockColor}">${stock.toUpperCase()}</p>
                        <p class="para">${description}</p>
                        <div> 
                            <select name="quantity" id="quantity--select">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>                         
                            </select>
                            <button class="cart"><span class="shadow">Add to cart</span></button>                            
                        </div>
                        <p class="para"><span class="stock__yes">01:28:54</span> for order to ship today.</p>
                        <h3>Additional info</h3>
                        <p class="para"><strong>Age</strong>: ${age}</p>
                        <p class="para"><strong>Weight</strong>: ${weight}</p>
                        <p class="para"><strong>Carry positions</strong>: ${carryPositions}</p>
                        <p class="para"><strong>Materials</strong>: ${materials}</p>
                        <p class="para"><strong>Machine wash</strong>:${wash}</p>
                        <p class="para"><strong>Tumbledry</strong>:${tumbledry}</p>                      
                    </div>
                    
                </div>
            `
            otherHeading.innerHTML = `People who bought ${name} also viewed:`;
            document.title = `${name} product page`;
        } else {
            const product = myArray[i];
            const name = product.name;
            const image = product.image.sm;
            const id = product.id;
            const link = `detailed.html?id=${id}`

            otherProducts.innerHTML +=
                `                
                <a href="${link}" class="product--display" style="background-image: url(${image})">
                    <h2 class="product--text shadow">${name}</h2>
                </a>
            `
        }  // End of if/else statement
    }; // End of for loop
    documentReady();
};

function placeOrder() {
    const select = document.querySelector("#quantity--select");
    const quantity = select.value;
    location.href = `order.html?id=${productId}&quantity=${quantity}`;
}

document.body.addEventListener("doc-ready-ish", function () {
    const button = document.querySelector(".cart");
    button.addEventListener("click", function (event) {
        event.preventDefault();
        placeOrder();
    });
});

createHTML(productArray);


