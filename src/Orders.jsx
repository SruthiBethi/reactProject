import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Orders() {
  const purchaseHistory = useSelector((state) => state.purchasDetails);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-primary fw-bold">Order History</h2>

      {purchaseHistory.length === 0 ? (
        <p className="alert alert-warning text-center">No purchase history available</p>
      ) : (
        <div className="row justify-content-center">
          {purchaseHistory.map((purchase, index) => (
            <div key={index} className="col-lg-12 col-md-10 col-sm-12">
              <div className="card mb-4 shadow-lg p-3">
                <div className="card-body">
                  <p className="text-muted text-center fs-5">
                    <strong>Order Date:</strong> {purchase.date}  
                    <br />
                    <strong>Order Time:</strong> {purchase.time}
                  </p>
                  <hr />
                  
                  <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between bg-primary text-white fw-bold">
                      <span>Item</span>
                      <span>Price</span>
                      <span>Qty</span>
                      <span>Subtotal</span>
                    </li>

                    {purchase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-group-item d-flex align-items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="me-3" 
                          style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} 
                        />
                        <span className="flex-grow-1">{item.name}</span>
                        <span className="text-muted">${item.price.toFixed(2)}</span>
                        <span>{item.quantity}</span>
                        <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex justify-content-center mt-3">
                    <h5 className="fw-bold text-success">Total Amount: ${purchase.totalAmount.toFixed(2)}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
