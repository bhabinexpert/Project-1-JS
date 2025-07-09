 export const findproductInCart = (cart, prodId )=>{
    const isproductInCart = cart && cart.length > 0 && cart.some(({_id})=>
        _id === prodId
    )
    return isproductInCart
}
