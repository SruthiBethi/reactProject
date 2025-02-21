import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';

function Veg() {
  const vegItems = useSelector((state) => state.products.veg);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Checkbox state
  const [selectedItems, setSelectedItems] = useState({});
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle checkbox toggle without causing page re-render
  const handleCheckboxChange = (item, event) => {
    event.stopPropagation();
    setSelectedItems((prev) => ({
      ...prev,
      [item.name]: !prev[item.name],
    }));
  };

  // Handle price filter change
  const handlePriceFilterChange = (filter) => {
    setPriceFilter(filter);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on price and search query
  const filteredItems = vegItems.filter(item => {
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'below-100' && item.price < 100) ||
      (priceFilter === '100-250' && item.price >= 100 && item.price <= 250) ||
      (priceFilter === 'above-250' && item.price > 250);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPrice && matchesSearch;
  });

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render the current items
  const finalItems = currentItems.map((item, index) => (
    <div key={index} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
      <div className="card">
        <img
          src={item.image}
          alt={item.name}
          className="card-img"
          style={{ height: "200px", width: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">${item.price}</p>
          <button
            onClick={() => dispatch(addToCart(item))}
            className="btn btn-primary btn-sm mt-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  // Pagination controls
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container my-4">
      <h3 className="text-primary text-center mb-4">Veg Items</h3>
      
      {/* Fixed Search Bar and Price Filter */}
      <div className="d-flex flex-column align-items-center mb-4 position-sticky top-0 bg-white py-3" style={{ zIndex: 1000 }}>
        <input
          type="text"
          className="form-control mb-2 w-50"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="btn-group" role="group" aria-label="Price Filter">
          <button className={`btn btn-outline-primary ${priceFilter === 'all' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('all')}>All</button>
          <button className={`btn btn-outline-primary ${priceFilter === 'below-100' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('below-100')}>Below $100</button>
          <button className={`btn btn-outline-primary ${priceFilter === '100-250' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('100-250')}>$100 - $250</button>
          <button className={`btn btn-outline-primary ${priceFilter === 'above-250' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('above-250')}>Above $250</button>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        {finalItems}
      </div>
      
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

export default Veg;
