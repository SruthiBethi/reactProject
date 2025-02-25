import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Contact() {
  return (
    <div className="container-fluid mt-5 d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">Contact Us</h2>
        </div>

        {/* Contact Information Section */}
        <div className="col-12 col-md-8 col-lg-6 p-4 text-center bg-light rounded shadow">
          <h4 className="text-success">Email Us</h4>
          <p className="lead text-dark">
            For any inquiries or support, feel free to reach out to us:
          </p>
          <ul className="list-unstyled">
            <li>
              <strong className="text-success">Email:</strong>{' '}
              <a href="mailto:support@localmart.com" className="text-decoration-none">
                support@localmart.com
              </a>
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
