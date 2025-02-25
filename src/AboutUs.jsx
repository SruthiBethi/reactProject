import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div className="container mt-3 mx-auto">   {/* Reduced margin-top */}
      <h2 className="text-center mb-3" style={{ fontSize: '1.75rem', color:'ButtonHighlight'}}>About LocalMart</h2> {/* Smaller font-size */}
      
      <div className="row">
        <div className="col-md-6 bg-light p-2 rounded"> {/* Light background color */}
          <h4 style={{ fontSize: '1.25rem', color:'blue'}}>Welcome to LocalMart!</h4>  {/* Smaller heading size */}
          <p className="lead" style={{ fontSize: '1rem', color:'palevioletred'}}>  {/* Reduced text size */}
            LocalMart is your one-stop shop for all your daily essentials. Whether you're looking for fresh vegetables, meats, dairy products, or grocery items, we've got you covered. We are proud to serve the local community with quality products at affordable prices.
          </p>

          <p style={{ fontSize: '0.95rem', color:'salmon' }}>
            Our mission is simple: to make shopping convenient and accessible for everyone. We aim to offer an extensive range of products to meet all your household needs in one place. With our easy-to-use platform, you can now shop from the comfort of your home and have your order delivered right to your doorstep.
          </p>
        </div>

        <div className="col-md-4 bg-info p-4 rounded text-white"> {/* Light blue background color with white text */}
          <img
            src="https://content.jdmagicbox.com/v2/comp/lucknow/e1/0522px522.x522.200818154743.k4e1/catalogue/local-mart-gomti-nagar-lucknow-departmental-stores-2qucbv5dn7.jpg?fit=around%7C350:350&crop=350:350;*,*"  // Smaller image size
            alt="LocalMart"
            className="img-fluid rounded"
            style={{ maxHeight: '200px',width:'400px', objectFit: 'cover' }}  // Limit the height of the image
          />
        </div>
      </div>

      <div className="mt-3 bg-warning p-2 rounded"> {/* Yellow background color */}
        <h5 className="text-center" style={{ fontSize: '1.1rem' }}>Why Choose LocalMart?</h5>  {/* Slightly smaller font-size */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ fontSize: '0.95rem' }}>✔ Fresh and high-quality products</li>  {/* Adjusted text size */}
          <li className="list-group-item" style={{ fontSize: '0.95rem' }}>✔ Wide variety of categories</li>
          <li className="list-group-item" style={{ fontSize: '0.95rem' }}>✔ Affordable prices for everyone</li>
          <li className="list-group-item" style={{ fontSize: '0.95rem' }}>✔ Easy online shopping experience</li>
          <li className="list-group-item" style={{ fontSize: '0.95rem' }}>✔ Reliable delivery service</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
