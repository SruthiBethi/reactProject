import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';

function Home() {
 let navigate= useNavigate();
  return (
    
    <div className="container-fluid py-5 text-center justify-content-center align-items-center" style={{paddingLeft:"200px"}}>
    
      <h3 className="text-center mb-4 text-success bg-light p-2 rounded">Welcome to LocalMart</h3>
      <div className="container-fluid py-5 text-center justify-content-center align-items-center">
      {/* Image Section */}
      <div className="row justify-content-center">
        {/* Veg Items */}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <img 
            src="vege.png"  // Replace with actual path
            alt="Fresh Veggies" 
            className="img-fluid rounded shadow-lg"
            style={{ width: "300px", height: "300px", objectFit: "cover" }} 
          />
          <button 
            className="btn btn-success mt-3 px-4 py-2"
            onClick={() => navigate('/veg')}
          >
            Explore Veg
          </button>
        </div>

        {/* Non-Veg Items */}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <img 
            src="non.png"  // Replace with actual path
            alt="Non-Veg Items" 
            className="img-fluid rounded shadow-lg"
            style={{ width: "300px", height: "300px", objectFit: "cover" }} 
          />
          <button 
            className="btn btn-danger mt-3 px-4 py-2"
            onClick={() => navigate('/NonVeg')}
          >
            Explore Non-Veg
          </button>
        </div>

        {/* Milk Items */}
        <div className="col-md-4 d-flex flex-column align-items-center">
          <img 
            src="dairy.png"  // Replace with actual path
            alt="Milk Products" 
            className="img-fluid rounded shadow-lg"
            style={{ width: "300px", height: "300px", objectFit: "cover" }} 
          />
          <button 
            className="btn btn-primary mt-3 px-4 py-2"
            onClick={() => navigate('/Milk')}
          >
            Explore Milk
          </button>
        </div>
        
      </div>
      
    </div>
    
      <div className="card bg-light bg-opacity-75">
        <div className="card-body">
          <h5 className="card-title text-success">About LocalMart</h5>
          <p className="card-text text-dark">
            LocalMart is your go-to online store for fresh and high-quality groceries. We offer a wide range of products including fresh vegetables, meats, dairy products, and much more. Our goal is to bring the best products from local farms and markets right to your doorstep.
          </p>
          <p className="card-text text-muted">
            Our online platform is easy to navigate and provides a hassle-free shopping experience. Get your groceries delivered right to your door in a few simple clicks. Experience the convenience of shopping at LocalMart today!
          </p>
        </div>
      </div>

      <div className="mt-5 text-center">
        <h5 className="text-warning">Our Mission</h5>
        <p className="text-info">To provide quality groceries and products from local markets, delivered with care to your doorstep. We are committed to supporting local farmers and bringing fresh produce directly to your home.</p>
      </div>

      <div className="mt-5 text-center">
        <h5 className="text-success bg-light mb-4 p-2 rounded">Why Choose LocalMart?</h5>
        <ul className="list-unstyled bg-secondary">
          <li><i className="fa-solid fa-check-circle text-white bg-success p-2 rounded-circle"></i> Fresh and Local Products</li>
          <li><i className="fa-solid fa-check-circle text-white bg-success p-2 rounded-circle"></i> Affordable Prices</li>
          <li><i className="fa-solid fa-check-circle text-white bg-success p-2 rounded-circle"></i> Fast and Reliable Delivery</li>
          <li><i className="fa-solid fa-check-circle text-white bg-success p-2 rounded-circle"></i> Easy Online Shopping</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
