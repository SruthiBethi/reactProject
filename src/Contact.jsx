import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <h2 className="text-center mb-4 text-primary">Contact Us</h2>

      {/* Contact Information */}
      <div className="row">
        <div className="col-md-6">
          <h4 className='text-success'>Email Us</h4>
          <p className="lead" style={{color:'navy'}}>For any inquiries or support, feel free to reach out to us:</p>
          <ul className="list-unstyled">
            <li>
              <strong className='text-success'>Email:</strong> <a href="mailto:support@localmart.com">support@localmart.com</a>
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>

       
      </div>

      {/* <hr /> */}

      

      {/* Social Media Section */}
      {/* <h4 className="text-center mb-4">Follow Us</h4>
      <div className="text-center">
        <a
          href="https://facebook.com/localmart"
          target="_blank"
          className="btn btn-outline-primary mx-2"
          role="button"
        >
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a
          href="https://twitter.com/localmart"
          target="_blank"
          className="btn btn-outline-info mx-2"
          role="button"
        >
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a
          href="https://instagram.com/localmart"
          target="_blank"
          className="btn btn-outline-danger mx-2"
          role="button"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div> */}
    </div>
  );
}

export default Contact;
