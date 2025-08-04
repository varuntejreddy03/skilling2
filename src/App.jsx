import React, { useState, useMemo } from 'react';
import './App.css';

const products = [
  { name: 'Red Summer Dress', price: '$49' },
  { name: 'Red Party Dress', price: '$79' },
  { name: 'Maroon Gown', price: '$99' },
  { name: 'Blue Jeans', price: '$39' },
  { name: 'Black T-shirt', price: '$25' }
];

function App() {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="app">
      <h1 className="title">Smart Product Filter</h1>

      <input
        className="search-box"
        type="text"
        placeholder='Search for "red dress"'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products"
      />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <div className="product-item" key={idx}>
              {`${product.name} - ${product.price}`}
            </div>
          ))
        ) : (
          <div className="no-results">No products found</div>
        )}
      </div>
    </div>
  );
}

export default App;
