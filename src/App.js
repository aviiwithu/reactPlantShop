import './App.css';
import {Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import {ProductContext} from './Context'
import ProductPage from './Components/ProductPage'
import CartContextProvider from './CartContext'
import Cart from './Components/Cart'


function App() {
  return (
    <>
    <CartContextProvider>
    <ProductContext>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductPage} />
        <Route exact path="/cart" component={Cart}/>
      </Switch>


    </ProductContext>
    </CartContextProvider>
      
    </>
  );
}

export default App;
