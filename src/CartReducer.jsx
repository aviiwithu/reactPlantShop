export const CartReducer = ((state,action)=>{
    let product;
    let updatedPrice;
    let updatedQty;
    let index;
    const{cart,qty,totalPrice}= state;

    switch (action.type) {
        case "addToCart":
            const checkProduct = cart.find(item=> item.id ===action.id);
            if(checkProduct){
                return state
            } else {
                product = action.product;
                product["qty"] = 1;
                updatedQty = qty +1;
                updatedPrice = totalPrice+product.price;
                return { cart:[...cart,product],totalPrice:updatedPrice,qty:updatedQty}
            }
            break;
            case 'increment' :
                product = action.cartItem;
                product.qty = product.qty + 1;
                updatedPrice = totalPrice + product.price;
                updatedQty = qty+1;
                index = cart.findIndex(cart=>cart.id ===action.id);
                cart[index] = product;
                return {cart:[...cart],totalPrice:updatedPrice,qty:updatedQty }
            break;
            case 'decrement' :
                product = action.cartItem;
                if(product.qty>1){
                    product.qty = product.qty - 1;
                    updatedPrice = totalPrice - product.price;
                    updatedQty = qty-1;
                    index = cart.findIndex(cart=>cart.id ===action.id);
                    cart[index] = product;
                    return {cart:[...cart],totalPrice:updatedPrice,qty:updatedQty }
                } else {
                    let deleteItem = cart.filter(item=>item.id!==action.id);
                    updatedQty = qty - product.qty;
                updatedPrice = totalPrice - product.price;
                return {cart:deleteItem,totalPrice:updatedPrice,qty:updatedQty};
                }
            break;
            case 'delete':
                product = action.cartItem;
                let tempCart = cart.filter(item=> item.id !==action.id);

                updatedQty = qty - product.qty;
                updatedPrice = totalPrice - product.price*product.qty;
                return {cart:tempCart,totalPrice:updatedPrice,qty:updatedQty};
            break;
            case "empty":
                return {cart:[],totalPrice:0,qty:0}

                break;
        default:
            return state
            break;
    }
})