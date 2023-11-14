import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from "./Pages/Product" 
import Cart from "./Pages/Cart" 
import LoginSignup from "./Pages/LoginSignup"
import banner_mens from './Components/Assets/banner_mens.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kids from './Components/Assets/banner_kids.png'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<ShopCategory banner={banner_mens} category="men"/>} />
          <Route path='/women' element={<ShopCategory banner={banner_women} category="women"/>} />
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kids"/>} />
          <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/cart" element={<Cart />}/>
          </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
