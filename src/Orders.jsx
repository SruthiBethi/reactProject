import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Orders() {
  const purchaseHistory = useSelector((state) => state.purchasDetails);

  const orderItems = purchaseHistory.map((purchase, index) => (
    <div key={index} className="card mb-4 shadow-lg mx-auto p-3" style={{ maxWidth: "800px" }}>
      <div className="card-body">
        <p className="text-muted text-center fs-5">
          <strong>Order Date:</strong> {purchase.date}  
          <br />
          <strong>Order Time:</strong> {purchase.time}
        </p>
        <hr />
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between bg-primary text-white">
            <strong>Item</strong>
            <strong>Price</strong>
            <strong>Quantity</strong>
            <strong>Subtotal</strong>
          </li>
          {purchase.items.map((item, itemIndex) => (
            <li key={itemIndex} className="list-group-item d-flex align-items-center">
              <img src={item.image} alt={item.name} className="me-3 img-fluid" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} />
              <span className="fw-bold">{item.name}</span>
              <span className="ms-auto text-muted">${item.price}</span>
              <span className="ms-3">x {item.quantity}</span>
              <span className="ms-3">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="text-center mt-3">
          <h5 className="fw-bold text-success">Total Amount: ${purchase.totalAmount.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-primary fw-bold">Order History</h2>
      {purchaseHistory.length === 0 ? (
        <p className="alert alert-warning text-center">No purchase history available</p>
      ) : (
        <div>{orderItems}</div>
      )}
    </div>
  );
}

export default Orders;
