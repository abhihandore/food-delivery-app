import React,{ useReducer }  from 'react';

export const CartContext = React.createContext({
    itemsInCart : [], // [{..item-1},{..item-2},....,{..item-N}]
    totalAmount : 0,
    addItem     : (item) => {},
    removeItem  : (id) => {},
});

const defaultCartState = {
    items : [],
    totalAmount : 0
}
const cartReducer = (state,action) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedCartItems;
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount 
            }
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedCartItems = state.items.concat(action.item);
        }
        return {
            items : updatedCartItems,
            totalAmount : updatedTotalAmount
        }
    }
    else if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedCartItems;
        if(existingCartItem.amount === 1){
            updatedCartItems = state.items.filter( (item) => {
                return item.id !== action.id
            })
        }else{
            let updatedItem = {...existingCartItem, amount : existingCartItem.amount - 1};
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items : updatedCartItems,
            totalAmount : updatedTotalAmount
        }
    }
    return defaultCartState;
}
const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemtoCartHandler    = (item) => {
        dispatchCartAction({
            type : 'ADD',
            item : item
        })
    }
    const removeItemtoCartHandler = (id) => {
        dispatchCartAction({
            type : 'REMOVE',
            id : id
        })
    }
    const cartInitContext = {
        itemsInCart : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem     : addItemtoCartHandler,
        removeItem  : removeItemtoCartHandler,
    }
    return (
        <CartContext.Provider value={cartInitContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;