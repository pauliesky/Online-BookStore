import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { cartToggleActions } from '../store/cartToggle';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cartControl.totalQuantity)

  const onToggleHandler = () => {
    dispatch(cartToggleActions.toggle())
  }

  return (
    <button
      onClick={onToggleHandler}
      className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
