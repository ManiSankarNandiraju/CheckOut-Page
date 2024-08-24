import React, { useState } from 'react';
import './App.css';

function App() {

  const [expandedBox, setExpandedBox] = useState(2);

  const boxes = [
    {
      discount: "30% Off",
      title: "Buy 1 Get 2",
      amount: "$18.00",
      previousAmount: "$20.00",
      mostPopular: false
    },
    {
      discount: "20% Off",
      title: "Buy 2 Get 4",
      amount: "$24.00",
      previousAmount: "$28.00",
      mostPopular: true
    },
    {
      discount: "20% Off",
      title: "Buy 3 Get 6",
      amount: "$36.00",
      previousAmount: "$40.00",
      mostPopular: false
    }
  ];

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const totalAmount = expandedBox !== null ? boxes[expandedBox].amount : "$0.00";

  return (
    <div className="app-container">
      <div className="box-container">
        <h1 className="heading">YAY! It’s BOGO</h1>
        <div className="select-container">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`select-box ${expandedBox === index ? 'expanded' : ''}`}
              onClick={() => setExpandedBox(expandedBox === index ? null : index)}
            >
              <div className="ticket-content">
                <div className={`color-box ${expandedBox === index ? 'hidden' : ''}`}>
                  <span className="discount-text">{box.discount}</span>
                </div>
                <div className={`circular-icon ${expandedBox === index ? 'expanded' : ''}`}></div>
                <div className="ticket-details">
                  <div className="ticket-text">
                    <div className="title-row">
                      <span className="title">{box.title}</span>
                      {expandedBox === index && (
                        <span className={`discount-text ${expandedBox === index ? 'highlighted' : ''}`}>
                          {box.discount}
                        </span>
                      )}
                      {box.mostPopular && expandedBox !== index && (
                        <span className="most-popular">Most Popular</span>
                      )}
                    </div>
                    <div className="amount">
                      {box.amount} USD
                      {expandedBox === index && (
                        <span className="previous-amount">{box.previousAmount} USD</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {expandedBox === index && (
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Size</th>
                        <th>Colour</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#1</td>
                        <td>
                          <select onClick={handleDropdownClick}>
                            <option value="S">S</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                          </select>
                        </td>
                        <td>
                          <select onClick={handleDropdownClick}>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Green">Green</option>
                            <option value="Blue">Blue</option>
                            <option value="Red">Red</option>
                            <option value="Yellow">Yellow</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>#2</td>
                        <td>
                          <select onClick={handleDropdownClick}>
                            <option value="S">S</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                          </select>
                        </td>
                        <td>
                          <select onClick={handleDropdownClick}>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Green">Green</option>
                            <option value="Blue">Blue</option>
                            <option value="Red">Red</option>
                            <option value="Yellow">Yellow</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="amount-container">
          <span className="free-delivery">Free Delivery</span>
          <span className="total-amount">Total: {totalAmount} USD</span>
        </div>
        <button className="add-cart-button">+ Add to Cart</button>
        <div className="powered-by">Powered by <m>Pumper</m></div>
      </div>
    </div>
  );
}

export default App;