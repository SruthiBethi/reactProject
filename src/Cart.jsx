import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  let totalAmount = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeDiscountPer, setcouponCodeDiscountPer] = useState(0);
  const [showCoupon, setShowCoupon] = useState(false);

  const handlingCouponPer = () => {
    const coupons = { SRUTHI10: 10, SRUTHI20: 20, SRUTHI30: 30, SRUTHI40: 40 };
    if (coupons[couponCode.toUpperCase()]) {
      setcouponCodeDiscountPer(coupons[couponCode.toUpperCase()]);
      setShowCoupon(true);
    } else {
      alert("Invalid Coupon Code");
      setcouponCodeDiscountPer(0);
    }
  };

  let couponDiscountAmount = (totalAmount * couponCodeDiscountPer) / 100;
  let discountAmount = (totalAmount * discountPercentage) / 100;
  let finalAmount = totalAmount - discountAmount - couponDiscountAmount;

  const handleCompletePurchase = () => {
    const purchaseDetails = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      items: [...cart],
      totalAmount: totalAmount,
    };
    dispatch(clearCart());
    dispatch(addPurchaseDetails(purchaseDetails));
  };

  let auth = useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;

  return (
    <div className="container my-4">
      {cart.length > 0 ? (
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-10 col-sm-12">
            <h2 className="mb-4 text-center text-primary">Your Cart Items</h2>

            {/* Cart Items List */}
            <ul className="list-group mb-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center shadow-sm mb-2"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      className="img-fluid me-2"
                      alt={item.name}
                      style={{ maxWidth: "60px", height: "auto" }}
                    />
                    <strong>{item.name}</strong> -{" "}
                    <span className="text-muted">${item.price}</span>
                  </div>
                  <div className="d-flex align-items-center mt-2 mt-md-0">
                    <button className="btn btn-success btn-sm me-2" onClick={() => dispatch(increment(item))}>
                      +
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => dispatch(decrement(item))}>
                      -
                    </button>
                    <button className="btn btn-danger btn-sm ms-3" onClick={() => dispatch(remove(item))}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total Amount */}
            <div className="text-center">
              <h5>
                Total Amount: <span className="text-success">${totalAmount.toFixed(2)}</span>
              </h5>
            </div>

            {/* Discount Section */}
            {showDiscount && (
              <div className="alert alert-info text-center mt-3">
                <p>
                  Discount Applied: <strong>{discountPercentage}%</strong>
                </p>
                <p>
                  Discount Amount: <strong>${discountAmount.toFixed(2)}</strong>
                </p>
              </div>
            )}

            {/* Net Amount */}
            <div className="text-center my-3">
              <h5>
                Net Amount To Pay: <strong>${finalAmount.toFixed(2)}</strong>
              </h5>
            </div>

            {/* Discount Buttons */}
            <div className="d-flex justify-content-center mb-3">
              {[10, 20, 30].map((percent) => (
                <button
                  key={percent}
                  className="btn btn-outline-success me-2"
                  onClick={() => {
                    setDiscountPercentage(percent);
                    setShowDiscount(true);
                  }}
                >
                  {percent}% Discount
                </button>
              ))}
            </div>

            {/* Coupon Code Section */}
            <div className="d-flex justify-content-center mb-3">
              <input
                type="text"
                className="form-control w-50"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-center mb-3">
              <button className="btn btn-warning" onClick={handlingCouponPer}>
                Apply Coupon
              </button>
            </div>

            {/* Coupon Applied Section */}
            {showCoupon && (
              <div className="alert alert-info text-center">
                <p>
                  Your Coupon Code Applied: <strong>{couponCode}</strong>
                </p>
                <p>
                  Coupon Discount Amount: <strong>${couponDiscountAmount.toFixed(2)}</strong>
                </p>
              </div>
            )}

            {/* Complete Purchase */}
            <div className="text-center">
              <button
                className="btn btn-success btn-lg"
                onClick={() =>
                  isAuthenticated ? handleCompletePurchase() : alert("Please login to complete purchase", navigate("/login"))
                }
              >
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h2 className="text-danger">Your Cart is Empty</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
