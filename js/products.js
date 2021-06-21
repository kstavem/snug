const productArray = [
    {
        // SNUG BABY SLING
        name: "Snug Baby Sling",
        type: "Sling",
        description: "Ideal starter carrier for new parents. One continous piece of flexible fabric, complete with instructions on how to tie several different configurations to fit you and your baby's needs. Perfect for new-borns that want to feel secure and close to their parent.",
        price: {
            dollar: {
                amount: 27.99,
                currency: "$"
            },
            euro: {
                amount: 23.99,
                currency: "€",
            },
            discountpct: 0,
        },
        positions: ["Comes with a guide on how to tie 6 different types of sling, try out which ones suits you and your baby best!"],
        machinewash: true,
        tumbledry: false,
        age: {
            min: "0 months",
            max: "36 months",
        },
        weight: {
            min: {
                kg: 2,
                lb: 4.4,
            },
            max: {
                kg: 20,
                lb: 44,
            },
        },
        materials: "95% cotton, 5% lycra",
        image: "../assets/images/baby-sling.jpg",
        stock: 49,
        id: "x0001"
    },
    {
        // SNUG CARRIER
        name: "Snug Carrier",
        type: "Lightweight carrier",
        description: "A lightweight, soft and ergonomic carrier for both you and your baby. The carrier is adjustable to fit a growing baby, with a low seat and neck support for the first 6 months of your baby's life.",
        price: {
            dollar: {
                amount: 37.99,
                currency: "$"
            },
            euro: {
                amount: 31.99,
                currency: "€",
            },
            discountpct: 0,
        },
        positions: ["front", "front-infant", "front-forward", "back"],
        machinewash: true,
        tumbledry: false,
        age: {
            min: "0 months",
            max: "36 months",
        },
        weight: {
            min: {
                kg: 3,
                lb: 6.5,
            },
            max: {
                kg: 20,
                lb: 44,
            },
        },
        materials: "85% polyester, 15% cotton",
        image: "../assets/images/baby-carrier-infant-nature.jpg",
        stock: 69,
        id: "x0002"
    },
    {
        //SNUG STURDY
        name: "Sturdy Snug",
        type: "Framed carrier",
        description: "A stiff aluminium frame carrier perfect for hiking. Comfortable harness with adjustable seat height and foot bars to fit a growing child. 15L zipped back compartment.",
        price: {
            dollar: {
                amount: 69.99,
                currency: "$"
            },
            euro: {
                amount: 59.99,
                currency: "€",
            },
            discountpct: 10,
        },
        positions: ["back"],
        machinewash: true,
        tumbledry: false,
        age: {
            min: "6 months",
            max: "48 months",
        },
        weight: {
            min: {
                kg: 7,
                lb: 15,
            },
            max: {
                kg: 25,
                lb: 55,
            },
        },
        materials: "60% polyester, 20% cotton, 10% nylon, 10% aluminium.",
        image: "../assets/images/baby-carrier-sturdy.jpg",
        stock: 18,
        id: "x0003"
    }
]


