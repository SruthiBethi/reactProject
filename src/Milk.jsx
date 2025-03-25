import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';

function Milk() {
  const milkItems = useSelector((state) => state.products.milkItems);
  const dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filters
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle price filter change
  const handlePriceFilterChange = (filter) => {
    setPriceFilter(filter);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Filter items based on price and search query
  const filteredItems = milkItems.filter(item => {
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'below-30' && item.price < 30) ||
      (priceFilter === '30-55' && item.price >= 30 && item.price <= 55) ||
      (priceFilter === 'above-55' && item.price > 55);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPrice && matchesSearch;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container my-4 d-flex flex-column align-items-center text-center" style={{ minHeight: "100vh"}}>
      <h3 className="text-primary mb-4">Milk Items</h3>

      {/* Search Bar and Price Filter */}
      <div className="d-flex flex-column align-items-center mb-4 w-100">
        <input
          type="text"
          className="form-control mb-2 w-50 text-center"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <h3 className='text-success'>Filter By Price Range</h3>
        <div className="btn-group d-flex justify-content-center" role="group" aria-label="Price Filter">
          <button className={`btn btn-outline-primary ${priceFilter === 'all' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('all')}>All</button>
          <button className={`btn btn-outline-primary ${priceFilter === 'below-30' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('below-30')}>Below $30</button>
          <button className={`btn btn-outline-primary ${priceFilter === '30-55' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('30-55')}>$30 - $55</button>
          <button className={`btn btn-outline-primary ${priceFilter === 'above-55' ? 'active' : ''}`} onClick={() => handlePriceFilterChange('above-55')}>Above $55</button>
        </div>
      </div>

      {/* Product Grid or No Items Found Message */}
      <div className="row d-flex flex-wrap justify-content-center w-100">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
              <div className="card">
                <img
                  src={item.image}
                  className="img-fluid" alt="Milk Product"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-dark ">${item.price}</p>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="btn btn-primary btn-sm mt-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-danger">No items found</h5>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            </li>
            {pageNumbers.map(number => (
              <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(number)}>{number}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Milk;
