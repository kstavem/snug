const productContainer = document.querySelector(".content--wrap");
const otherProducts = document.querySelector(".other--products");
const otherHeading = document.querySelector(".other--heading");
const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const productId = params.get("id");

// Event that pops when the html is done, so I can add eventlisteners to the dynamically built elements
function documentReady() {
    const myEvent = new Event("doc-ready-ish");
    document.body.dispatchEvent(myEvent);
};

// Adds the productID and the quantity selected to the querystring for order.html
function placeOrder() {
    const select = document.querySelector("#quantity--select");
    const quantity = select.value;
    location.href = `order.html?id=${productId}&quantity=${quantity}`;
}

// Listener for dispatched event, adds clickevent to dynamically built order button
document.body.addEventListener("doc-ready-ish", function () {
    const button = document.querySelector(".cart");
    button.addEventListener("click", function (event) {
        event.preventDefault();
        placeOrder();
    });
});

// Product details page
function createHTML(myArray) {
    productContainer.innerHTML = "";
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].id === productId) {
            const product = myArray[i];
            const name = product.name;
            const description = product.description;
            const image = product.image.sm;
            const alt = product.image.alt;
            const materials = product.materials;
            const carryPositions = product.positions;

            const price = product.price.dollar.amount;
            const price_symbol = product.price.dollar.currency;
            let discount = product.price.discountpct;
            let newPrice = Math.floor(price - (price * discount / 100));
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
                <p class="link--pagination"><a href="product.html">Products</a> &gt <a href="${window.location.href}">${name}</a></p>

                <div class="product--details">
                    <div>
                        <img class="product--image" src="${image}" alt="${alt}"/>
                        <div class="flex unicef">
                            <p class="para">
                                <strong>Snug</strong> cares deeply about the wellbeing of children. The company donates 5% of every purchase made to the <span>United Nations Children's Fund</span> (<a href="#">UNICEF</a>).
                            </p>
                            <img src="assets/images/unicef-logo.svg" alt="unicef logo" class="unicef--logo">
                        </div>
                    </div>

                    <div class="product--info">
                        <h2>${name}</h2>
                        <p>
                            <span class="${saleStatus}">${price_symbol}${price}</span>
                            <span class="${salePrice} mx-2">
                                <strong>${price_symbol}${newPrice}.00</strong>                  
                            </span>
                            <span class="${salePrice} stock__yes">
                                ${discount}% sale <i class="fas fa-comment-dollar"></i>
                            </span>
                        </p>
                        <p class="${stockColor}">${stock}</p>
                        <p class="para">${description}</p>
                        <div> 
                            <select name="quantity" id="quantity--select">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>                         
                            </select>
                            <button class="cart shadow">Add to cart</button>                            
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
            otherHeading.innerHTML = `People who bought the ${name} also viewed:`;
            document.title = `${name} product page`;
        } else {
            const product = myArray[i];
            const name = product.name;
            const image = product.image.sm;
            const id = product.id;
            const link = `detailed.html?id=${id}`;
            let discount = product.price.discountpct;
            let sale = "product--onsale__nodisplay";
            if (discount > 0) {
                sale = "product--text__sale";
            }

            otherProducts.innerHTML +=
                `                
                <a href="${link}" class="product--display" style="background-image: url(${image})">
                    <h2 class="product--text shadow">${name}</h2>
                    <p class="${sale}"><i class="fas fa-comment-dollar"> sale </i></p>
                </a>
            `
        }  // End of if/else statement
    }; // End of for loop
    documentReady(); // Dispatch event
};

createHTML(productArray);


