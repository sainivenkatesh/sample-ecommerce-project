import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Product from './components/Product';
import Cart from './components/cart';

function App() {
  return (<>
   <Navbar />
  <Routes>
 <Route path='/' element={<Home/>} />
  <Route path='/products' element={<Products/>} />
  <Route path='/products/:id' element={<Product/>} />
  <Route path='/cart' element={<Cart/>} />
  </Routes>
  </>
   );
}

export default App;
