import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartControlActions } from '../store/cartControl';




const CartItem = (props) => {

  const dispatch = useDispatch()
  const { title, quantity, total, price, id } = props.item;



  const removeItemFromHandler = () => {
    dispatch(cartControlActions.removeItemFromCart(id))
  }
  const addItemtoHandler = () => {
    dispatch(cartControlActions.addItemtoCart(
      {
        id,
        title,
        price
      }
    ))
  }




  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromHandler}>-</button>
          <button onClick={addItemtoHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
