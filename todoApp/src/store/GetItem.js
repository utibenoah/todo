const GetItem = () => {
    return JSON.parse(localStorage.getItem('cart'))
}
 
export default GetItem;