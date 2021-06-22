const productArray = [
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
        positions: "Front, front-low, front-facing and back",
        machinewash: true,
        tumbledry: false,
        age: {
            months: {
                min: "0",
                max: "36",
            },
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
        image: {
            sm: "assets/images/baby-carrier-infant-nature_sm.jpg",
            alt: "Mother with a baby in a Snug Carrier",
        },
        stock: 0,
        id: "x0001"
    },
    {
        //STURDY SNUG
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
        positions: "Back only",
        machinewash: false,
        tumbledry: false,
        age: {
            months: {
                min: "6",
                max: "48",
            },
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
        image: {
            sm: "assets/images/baby-carrier-sturdy_sm.jpg",
            alt: "Child in a Sturdy Snug getting carried through the forest",
        },
        stock: 40,
        id: "x0002"
    },
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
        tumbledry: true,
        age: {
            months: {
                min: "0",
                max: "36",
            },
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
        image: {
            sm: "assets/images/baby-sling_sm.jpg",
            alt: "Mother in the forest with her baby in a Snug Sling",
        },
        stock: 105,
        id: "x0003"
    }
]

console.log(productArray);

