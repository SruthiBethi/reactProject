import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./Non-Veg";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Milk from "./Milk";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { logout } from "./Store";
import NotFound from "./NotFound";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  const cart=useSelector(state=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  const {isAuthenticated,user}=useSelector(state=>state.auth);
  const dispatch=useDispatch();
  return(
    <>
  <BrowserRouter>
  <nav className="navbar">

    <Link to='/home' className="class"><i className="fa-solid fa-shop"></i>LocalMart</Link>
    <Link to='/veg' className="class"><i className="fa-solid fa-carrot"></i>VegItems</Link>
    <Link to='/nonveg' className="class"><i className="fa-solid fa-drumstick-bite"></i>Non-VegItems</Link>
    <Link to='/milk' className="class"><i className="fa-solid fa-cow"></i>Milk Items</Link>
    <Link to='/cart' className="class"><i className="fa-solid fa-cart-shopping"></i>Cart<span> {totalItems} </span></Link>
    <Link to='/orders' className="class"> <i className="fa-solid fa-sort"></i> Your Orders</Link>
    <Link to='/about' className="class"><i className="fa-solid fa-address-card"></i>About Us</Link>
    <Link to='/contact' className="class"><i className="fa-solid fa-address-book"></i>Contact Us</Link>
     
    { isAuthenticated ? (
      <>
      <span>Welcome,{user}</span>
      <button onClick={()=>dispatch(logout())}>Logout</button>

      </>
    ):(
      <Link to='/login' className="class"><i className="fa-solid fa-right-to-bracket"></i>Login</Link>
      
    )
    }
    </nav>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/veg" element={<Veg/>}/>
      <Route path="/nonveg" element={<NonVeg/>}/>
      <Route path="/milk" element={<Milk/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  </>
  )
}
export default App;