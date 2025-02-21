import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container py-5" style={{paddingLeft:"125px"}}>
      <h3 className="text-center mb-4 text-primary">Welcome to LocalMart</h3>
      
      <div className="card">
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
        <h5 className="text-danger">Why Choose LocalMart?</h5>
        <ul className="list-unstyled">
          <li><i className="fa-solid fa-check-circle text-success"></i> Fresh and Local Products</li>
          <li><i className="fa-solid fa-check-circle text-success"></i> Affordable Prices</li>
          <li><i className="fa-solid fa-check-circle text-success"></i> Fast and Reliable Delivery</li>
          <li><i className="fa-solid fa-check-circle text-success"></i> Easy Online Shopping</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
