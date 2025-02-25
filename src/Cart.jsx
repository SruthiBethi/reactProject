import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  
  const finalCart = cart.map((item, index) => (
    <li key={index} className="list-group-item d-flex flex-wrap justify-content-between align-items-center shadow-sm mb-2">
      <div className="d-flex align-items-center">
        <img src={item.image} alt={item.name} className="me-3" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }} />
        <strong>{item.name}</strong> - <span className="text-muted">${item.price}</span>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn btn-success btn-sm me-2" onClick={() => dispatch(increment(item))}>+</button>
        <span className="mx-2">{item.quantity}</span>
        <button className="btn btn-primary btn-sm me-2" onClick={() => dispatch(decrement(item))}>-</button>
        <button className="btn btn-danger btn-sm ms-3" onClick={() => dispatch(remove(item))}>Remove</button>
      </div>
    </li>
  ));

  let totalAmount = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponCodeDiscountPer, setcouponCodeDiscountPer] = useState(0);
  const [showCoupon, setShowCoupon] = useState(false);

  const handlingCoupenPer = () => {
    switch (couponCode.toUpperCase()) {
      case 'SRUTHI10': setcouponCodeDiscountPer(10); setShowCoupon(true); break;
      case 'SRUTHI20': setcouponCodeDiscountPer(20); setShowCoupon(true); break;
      case 'SRUTHI30': setcouponCodeDiscountPer(30); setShowCoupon(true); break;
      case 'SRUTHI40': setcouponCodeDiscountPer(40); setShowCoupon(true); break;
      default: alert("Invalid Coupon Code"); setcouponCodeDiscountPer(0);
    }
  };

  let couponDiscountAmount = (totalAmount * couponCodeDiscountPer) / 100;
  let discountAmount = (totalAmount * discountPercentage) / 100;
  let finalAmount = totalAmount - discountAmount - couponDiscountAmount;

  const handleCompletePurchase = () => {
    const purchaseDate = new Date().toLocaleDateString();
    const purchaseTime = new Date().toLocaleTimeString();
    let purchaseDetails = { date: purchaseDate, time: purchaseTime, items: [...cart], totalAmount: totalAmount };
    dispatch(clearCart());
    dispatch(addPurchaseDetails(purchaseDetails));
  };

  let auth = useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;

  return (
    <>
      {cart.length > 0 ? (
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <h2 className="mb-4 text-center text-primary">Your Cart Items</h2>
              
              <ul className="list-group mb-4">{finalCart}</ul>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>Total Amount: <span className="text-success">${totalAmount.toFixed(2)}</span></h5>
              </div>

              {showDiscount && (
                <div className="alert alert-info text-center">
                  <p>Discount Applied: <strong>{discountPercentage}%</strong></p>
                  <p>Discount Amount: <strong>${discountAmount.toFixed(2)}</strong></p>
                </div>
              )}

              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5>Net Amount To Pay: <strong>${finalAmount.toFixed(2)}</strong></h5>
              </div>

              <div className="d-flex justify-content-between mb-4">
                <button className="btn btn-outline-success w-100 me-2" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>10% Off</button>
                <button className="btn btn-outline-success w-100 me-2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>20% Off</button>
                <button className="btn btn-outline-success w-100" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>30% Off</button>
              </div>

              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Enter Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
              </div>

              <div className="d-flex justify-content-center mb-3">
                <button className="btn btn-warning w-100" onClick={() => handlingCoupenPer()}>Apply Coupon</button>
              </div>

              {showCoupon && (
                <div className="alert alert-info text-center">
                  <p>Your Coupon Code Applied: <strong>{couponCode}</strong></p>
                  <p>Your Coupon Code Discount Amount: <strong>${couponDiscountAmount.toFixed(2)}</strong></p>
                </div>
              )}

              <div className="text-center">
                <button className="btn btn-success btn-lg w-100" onClick={() => isAuthenticated ? handleCompletePurchase() : alert("Please login to complete purchase", navigate("/login"))}>
                  Complete Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <h2 className="text-center text-danger">Your Cart is Empty</h2>
        </div>
      )}
    </>
  );
}

export default Cart;
