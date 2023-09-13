const InsertToStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
 
export default InsertToStorage;