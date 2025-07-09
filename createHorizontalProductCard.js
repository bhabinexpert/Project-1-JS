export const createHorizontalProductCard = (products, parentElement) =>{
    for (let product of products){
        const cardContainer = document.createElement("div")
        cardContainer.classList.add("card-horizontal", "d-flex", "shadow")

        // image Container
         const imgContainer = document.createElement("div")
        imgContainer.classList.add("card-hori-image-container","relative")

        const img = document.createElement("img")
        img.classList.add("card-image")
        img.setAttribute("src", product.img)
        img.setAttribute("alt", product.name)

        imgContainer.appendChild(img)
        cardContainer.appendChild(imgContainer)

        // card details container
        const cardDetailsContainer = document.createElement("div")
        cardDetailsContainer.classList.add("card-details","d-flex",'direction-column')
        
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
        price.classList.add("card-price")
        price.innerText = `Rs.${product.price}`

        const oldPrice = document.createElement("span")
        oldPrice.classList.add("price-strike-through")
        oldPrice.innerText = `Rs.${product.oldprice}`
        price.appendChild(oldPrice)


        const discount = document.createElement("span")
        discount.classList.add("discount","padding-all-8")
        discount.innerText = `(${product.discount}% OFF)`
        price.appendChild(discount)
        descriptionContainer.appendChild(price)
        cardDetailsContainer.appendChild(descriptionContainer)

        // quantity container
        const quantityContainer = document.createElement("div")
        quantityContainer.classList.add("quantity-conatiner", "d-flex", "gap")

        const QuantityContainerTitle = document.createElement("p")
        QuantityContainerTitle.classList.add("q-title")
        QuantityContainerTitle.innerText= "Qunatity"
        quantityContainer.appendChild(QuantityContainerTitle)

        const quantity =document.createElement("div")
        quantity.classList.add("count-container", "d-flex", "align-center", "gap")
        const incBtn = document.createElement("button") 
        incBtn.classList.add("count")
        incBtn.innerText = "+"

        const value = document.createElement("span")
        value.classList.add("count-value")
        value.innerText = "1"

        const decBtn = document.createElement("button")
        decBtn.classList.add("count")
        decBtn.innerText = "-"

        quantity.appendChild(incBtn)
        quantity.appendChild(value)
        quantity.appendChild(decBtn)

        quantityContainer.appendChild(quantity)
        cardDetailsContainer.appendChild(quantityContainer)

        // cta button
        const ctaButton = document.createElement("div")
        ctaButton.classList.add("cta-btn", "d-flex","gap")
        
        const removeBtn = document.createElement("button")
        removeBtn.classList.add(
            'button',
            "btn-primary",
            "hori-btn",
            "btn-icon",
            "d-flex",
            "align-center",
            "justify-center",
            "gap",
            "cursor",
            "btn-margin",
            "cart-btn",
            "card-width",
        )
        removeBtn.setAttribute("data-id", product._id);
        removeBtn.innerText = "Remove"        
        // Remove logic
        removeBtn.addEventListener("click", () => {
            // Get cart from localStorage
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            // Remove the product by _id
            cart = cart.filter(item => item._id !== product._id);
            // Update localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
            // Remove the card from the DOM
            cardContainer.remove();
            // Optionally, reload or update cart UI if needed
        })
        
        const saveBtn = document.createElement("button")
        saveBtn.classList.add(
            'button',
            "btn-primary",
            "hori-btn",
            "btn-icon",
            "d-flex",
            "align-center",
            "justify-center",
            "gap",
            "cursor",
            "btn-margin"
        )
        saveBtn.setAttribute("data-id", product._id);
        saveBtn.innerText = "Save to wishlist"
        ctaButton.appendChild(removeBtn)
        ctaButton.appendChild(saveBtn)
        cardDetailsContainer.appendChild(ctaButton)
        cardContainer.appendChild(cardDetailsContainer)
        parentElement.appendChild(cardContainer)

    

    }

    
}