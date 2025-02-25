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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { isAuthenticated, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top px-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold text-warning" href="/" style={{ fontFamily: 'Calibri, sans-serif' }}>
          <i className="fa-solid fa-store me-2"></i>LocalMart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item"><Link to='/home' className="nav-link text-light"><i className="fa-solid fa-shop"></i> Home</Link></li>
              <li className="nav-item"><Link to='/veg' className="nav-link text-light"><i className="fa-solid fa-carrot"></i> Veg Items</Link></li>
              <li className="nav-item"><Link to='/nonveg' className="nav-link text-light"><i className="fa-solid fa-drumstick-bite"></i> Non-Veg Items</Link></li>
              <li className="nav-item"><Link to='/milk' className="nav-link text-light"><i className="fa-solid fa-cow"></i> Milk Items</Link></li>
              <li className="nav-item"><Link to='/cart' className="nav-link text-light"><i className="fa-solid fa-cart-shopping"></i> Cart <span className="badge bg-warning">{totalItems}</span></Link></li>
              <li className="nav-item"><Link to='/orders' className="nav-link text-light"><i className="fa-solid fa-sort"></i> Your Orders</Link></li>
              <li className="nav-item"><Link to='/about' className="nav-link text-light"><i className="fa-solid fa-address-card"></i> About Us</Link></li>
              <li className="nav-item"><Link to='/contact' className="nav-link text-light"><i className="fa-solid fa-address-book"></i> Contact Us</Link></li>
            </ul>
          </div>
          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <>
                <li className="nav-item"><span className="navbar-text text-light me-3">Welcome, {user}</span></li>
                <li className="nav-item"><button className="btn btn-danger" onClick={() => dispatch(logout())}>Logout</button></li>
              </>
            ) : (
              <li className="nav-item"><Link to='/login' className="nav-link text-warning"><i className="fa-solid fa-right-to-bracket"></i> Login</Link></li>
            )}
          </ul>
        </div>
      </nav>
      
      <div className="container mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
