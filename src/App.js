import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import CartContextProvider from './Store/cart_context';
import Cart from './components/Cart/Cart';
import Modal from './components/UI/Modal/Modal';
function App() {

  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartContextProvider>
      {showCart && <Modal onBackdropClick={hideCartHandler} ><Cart onClose={hideCartHandler} /></Modal>}
      <Header onCartShow={showCartHandler} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
