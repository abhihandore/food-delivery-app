import React from 'react';

export const cartBtnClickCtx = React.createContext({
    isClicked : false
})

const CartBtnClickContextProvider = (props) => {

    const cartBtnClickCtxInit = {
        isClicked : false
    };
    return (
        <cartBtnClickCtx.Provider value={cartBtnClickCtxInit} >
            {props.children}
        </cartBtnClickCtx.Provider>
    )
}

export default CartBtnClickContextProvider;