import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';

function NonVeg() {
  const nonVegItems = useSelector((state) => state.products.nonVeg);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Define how many items you want per page

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nonVegItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render the current items
  const finalItems = currentItems.map((item, index) => (
   <div key={index} className="col-md-4 mb-4">
         <div className="card">
           <img
             src={item.image}
             alt={item.name}
             className="card-img"
             style={{ height: "50px", width: "50px", objectFit: "cover" }} // Square shape
           />
           <div className="card-body">
             <h5 className="card-title">{item.name}</h5>
             <p className="card-text">${item.price}</p>
             <button
               onClick={() => dispatch(addToCart(item))}
               className="btn btn-primary btn-sm"
             >
               Add to Cart
             </button>
           </div>
         </div>
       </div>
     ));

  // Pagination controls
  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mt-5">
      <h3 className="text-primary text-center mb-4">Non-Veg Items</h3>
      <ul className="row">
        {finalItems}
      </ul>

      {/* Pagination buttons */}
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NonVeg;
