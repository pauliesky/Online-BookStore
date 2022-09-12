import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { cartToggleActions } from './components/store/cartToggle'

let isInitial = true;

function App() {
  const isDisplayed = useSelector(state => state.cartToggle.isDisplayed)
  const cart = useSelector((state) => state.cartControl)
  const dispatch = useDispatch()
  const notification = useSelector(state=>state.cartToggle.notification)

  useEffect(() => {
    const sendCardData = async () => {

      dispatch(cartToggleActions.showNotification({
        status: 'pending',
        title: 'Sending....',
        message: 'Sending Cart data'
      }))
      const response = await fetch('https://react-http-63750-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })

      if (!response.ok) {
        throw new Error('Not able to send cart')
      }

      dispatch(cartToggleActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully'
      }))
    }
    if (isInitial) {
      isInitial =false
      return
    }
    
    sendCardData().catch(
      (error) => {
        dispatch(cartToggleActions.showNotification({
          status: 'error',
          title: 'Unable to send data!',
          message: 'Sending cart data failed!'
        }))
      })
  }, [cart,dispatch])

  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message ={notification.title}     
      />}
    <Layout>
      {isDisplayed && <Cart />}
      <Products />
    </Layout>

    </Fragment>
  );
}

export default App;
