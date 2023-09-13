import GetItem from "./GetItem";

const cart = (item) => {
    
    const cart=GetItem()
    let cartItems=[...cart,item]
    return cartItems
    
    
}
 
export default cart;