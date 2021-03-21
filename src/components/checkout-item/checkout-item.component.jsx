import { React } from "react";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckOutItem;
