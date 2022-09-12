import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PROUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Kenneth Hagin Books',
    description: 'Love,the way to victory'
  },

  {
    id: 'p2',
    price: 6,
    title: 'Kayode Oyegoke Books',
    description: 'Doctrine Ayeraye'
  },
]



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROUCTS.map(product => (<ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}

      </ul>
    </section>
  );
};

export default Products;
