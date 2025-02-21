import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div className="container mt-5" style={{paddingLeft:"450px"}}>
      {/* Header Section */}
      <h2 className="text-primary text-center">Contact Us</h2>

      {/* Contact Information */}
      <div className="d-flex justify-content-center mt-5">
        <div className="col-md-6 p-4 text-center" style={{ backgroundColor: "lightgray", borderRadius: "10px" }}>
          <h4 className="text-success">Email Us</h4>
          <p className="lead" style={{ color: "navy" }}>
            For any inquiries or support, feel free to reach out to us:
          </p>
          <ul className="list-unstyled">
            <li>
              <strong className="text-success">Email:</strong>{' '}
              <a href="mailto:support@localmart.com">support@localmart.com</a>
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
    </div>
  );
}

export default Contact;
