import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  return (
    <div className="container-fluid py-5 text-center">
      <h3 className="text-center mb-4 text-success bg-light p-2 rounded">
        Welcome to LocalMart
      </h3>

      {/* Image Section */}
      <div className="container py-4">
        <div className="row justify-content-center">
          {/* Veg Items */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center mb-4">
            <img
              src="vege.png"
              alt="Fresh Veggies"
              className="img-fluid rounded shadow-lg"
              style={{ width: "100%", maxWidth: "300px", height: "300px", objectFit: "cover" }}
            />
            <button className="btn btn-success mt-3 w-75" onClick={() => navigate('/veg')}>
              Explore Veg
            </button>
          </div>

          {/* Non-Veg Items */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center mb-4">
            <img
              src="non.png"
              alt="Non-Veg Items"
              className="img-fluid rounded shadow-lg"
              style={{ width: "100%", maxWidth: "300px", height: "300px", objectFit: "cover" }}
            />
            <button className="btn btn-danger mt-3 w-75" onClick={() => navigate('/NonVeg')}>
              Explore Non-Veg
            </button>
          </div>

          {/* Milk Items */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center mb-4">
            <img
              src="dairy.png"
              alt="Milk Products"
              className="img-fluid rounded shadow-lg"
              style={{ width: "100%", maxWidth: "300px", height: "300px", objectFit: "cover" }}
            />
            <button className="btn btn-primary mt-3 w-75" onClick={() => navigate('/Milk')}>
              Explore Milk
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="card bg-light p-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-success">About LocalMart</h5>
          <p className="card-text text-dark">
            LocalMart is your go-to online store for fresh and high-quality groceries. We offer a wide range of products including fresh vegetables, meats, dairy products, and much more.
          </p>
          <p className="card-text text-muted">
            Our online platform is easy to navigate and provides a hassle-free shopping experience. Get your groceries delivered right to your door in a few simple clicks.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-5 text-center">
        <h5 className="text-warning">Our Mission</h5>
        <p className="text-info">
          To provide quality groceries and products from local markets, delivered with care to your doorstep.
        </p>
      </div>

      {/* Why Choose LocalMart */}
      <div className="mt-5 text-center">
        <h5 className="text-success bg-light p-2 rounded">Why Choose LocalMart?</h5>
        <div className="bg-light p-3 rounded shadow-sm">
          <ul className="list-unstyled">
            <li className="d-flex align-items-center">
              <i className="fa fa-check-circle text-success me-2"></i> Fresh and Local Products
            </li>
            <li className="d-flex align-items-center">
              <i className="fa fa-check-circle text-success me-2"></i> Affordable Prices
            </li>
            <li className="d-flex align-items-center">
              <i className="fa fa-check-circle text-success me-2"></i> Fast and Reliable Delivery
            </li>
            <li className="d-flex align-items-center">
              <i className="fa fa-check-circle text-success me-2"></i> Easy Online Shopping
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
