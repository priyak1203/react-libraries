import { useEffect } from 'react';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isModalOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
