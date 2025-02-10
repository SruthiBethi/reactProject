import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

function Orders() {
  const purchaseHistory = useSelector((state) => state.purchasDetails);

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center text-primary mb-4">Purchase History</h2>

        {purchaseHistory.length === 0 ? (
          <div className="alert alert-warning text-center">
            No Purchase History Yet
          </div>
        ) : (
          <ul className="list-group">
            {purchaseHistory.map((purchase, index) => (
              <li
                key={index}
                className="list-group-item shadow-sm mb-3 rounded"
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>
                    <strong>Date:</strong> {purchase.date}
                  </h5>
                  
                </div>

                <ul className="list-group list-group-flush">
                  {purchase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="list-group-item">
                      {item.name} - ${item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
                <h5>
                    <strong>Total Amount:</strong> $
                    {purchase.totalAmount.toFixed(2)}
                  </h5>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Orders;
