import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function NonVeg() {
  const nonVegItems = useSelector((state) => state.products.nonVeg);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Checkbox state
  const [selectedItems, setSelectedItems] = useState({});
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle checkbox toggle
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
  const filteredItems = nonVegItems.filter(item => {
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'below-120' && item.price < 120) ||
      (priceFilter === '120-500' && item.price >= 120 && item.price <= 500) ||
      (priceFilter === 'above-500' && item.price > 500);
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
          className="img-fluid" alt="Responsive Image" 
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
      <h3 className="text-primary text-center mb-4">Non-Veg Items</h3>
      
      {/* Fixed Search Bar and Price Filter */}
      <div className="d-flex flex-column align-items-center mb-4 position-sticky top-0 bg-white py-3" style={{ zIndex: 1000 }}>
        <input
          type="text"
          className="form-control mb-2 w-50"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <h3 className='text-success'>Filter By Price Range</h3>
        <div className="btn-group" role="group" aria-label="Price Filter">
          <button className={`btn btn-outline-primary ${priceFilter === 'all' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('all')}>All</button>
          <button className={`btn btn-outline-primary ${priceFilter === 'below-120' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('below-120')}>Below $120</button>
          <button className={`btn btn-outline-primary ${priceFilter === '120-500' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('120-500')}>$120 - $500</button>
          <button className={`btn btn-outline-primary ${priceFilter === 'above-500' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('above-500')}>Above $500</button>
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

export default NonVeg;
