import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartControlActions } from '../store/cartControl'





const ProductItem = (props) => {


  const { title, price, description,id } = props;

  const dispatch = useDispatch()

  const addCartHandler = () => {
    dispatch(cartControlActions.addItemtoCart({
      id,
      title,
      price
  }))
  }
  
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button  onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
