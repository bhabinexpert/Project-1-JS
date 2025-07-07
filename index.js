import products from "./database/product.js";

const productContainer = document.getElementById("products")


for(let product of products){
    const cardContainer = document.createElement("div")
    cardContainer.classList.add(
        "card",
        "card-vertical",
        "d-flex",
        "direction-column",
        "relative",
        "shadow")

        // IMAGE CONTAINER
        const imgContainer = document.createElement("div")
        imgContainer.classList.add("card-image-container")

        const img = document.createElement("img")
        img.classList.add("card-image")
        img.setAttribute("src", product.img)
        img.setAttribute("alt", product.name)

        imgContainer.appendChild(img)

        // CARD DETAILS CONTIANER:

        const cardDetailsContainer = document.createElement("div")
        cardDetailsContainer.classList.add("card-details")
        
        const brandContainer = document.createElement("div")
        brandContainer.classList.add("card-title")
        brandContainer.innerText = product.brand
        cardDetailsContainer.appendChild(brandContainer)

        // card description container::

         const descriptionContainer = document.createElement("div")
         descriptionContainer.classList.add("card-description")

        //  product name

         const name = document.createElement("p")
         name.classList.add("card-des")
         name.innerText = product.name
         descriptionContainer.appendChild(name)


        //  product price 

        const price = document.createElement("p")
        price.classList.add("card-price","d-flex", "align-end", "gap-sm")
        price.innerText = `Rs.${product.price}`

        const oldPrice = document.createElement("span")
        oldPrice.classList.add("price-strike-through")
        oldPrice.innerText = `Rs.${product.oldprice}`
        price.appendChild(oldPrice)


        const discount = document.createElement("span")
        discount.classList.add("discount")
        discount.innerText = `(${product.discount}% OFF)`
        price.appendChild(discount)
        descriptionContainer.appendChild(price)

        
        // RAting container

        const ratings = document.createElement('p')
        ratings.classList.add('d-flex', "align-center")

        const rating = document.createElement('span')
        rating.innerText = product.rating
        ratings.appendChild(rating)

        const star = document.createElement("span")
        star.classList.add("material-icons-outlined","star")
        star.innerText = "star"
        ratings.appendChild(star)
        descriptionContainer.appendChild(ratings)
        cardDetailsContainer.appendChild(descriptionContainer)

        const idealFor = document.createElement("span")
        idealFor.innerText = ` Best known for :- ${product.idealFor}`
        descriptionContainer.appendChild(idealFor)

        // CTA button container

        const ctaButton = document.createElement("div")
        const cartButton = document.createElement("button")
       
        cartButton.classList.add(
            'button',
            "btn-primary",
            "btn-icon",
            "cart-btn",
            "d-flex",
            "align-center",
            "justify-center",
            "gap",
            "cursor",
            "btn-margin"
        )

        cartButton.setAttribute("data-id", product._id);

        const cart = document.createElement("span")
        // cart.classList.remove("material-icons-outlinedstar")
        cart.classList.add("material-icons-outlined", "star")
        cart.innerText = "shopping_cart"
        cartButton.appendChild(cart)

        const buttonText = document.createElement("span")
        buttonText.innerText = "Add to Cart"
        cartButton.appendChild(buttonText)

        ctaButton.appendChild(cartButton)
        cardDetailsContainer.appendChild(ctaButton)
       


        // cardDetailsContainer(descriptionContainer)
        cardContainer.appendChild(imgContainer)
        cardContainer.appendChild(cardDetailsContainer)
        // cardContainer.appendChild(ctaButton)


        
        productContainer.appendChild(cardContainer)
}