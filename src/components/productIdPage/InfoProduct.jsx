import React, { useState } from 'react';

const InfoProduct = ({ productId }) => {

    const  [quantity, setQuantity] = useState(1);

    const handleLess = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    }

    const handlePlus = () => {
        setQuantity(quantity + 1);
    }

  return (
    <div>
      <div>
        <h2>{productId?.brand}</h2>
        <h3>{productId?.title}</h3>
        <p>{productId?.description}</p>
      </div>
      <div>
        <ul>
            <li>Price</li>
            <li>$ {productId?.price}</li>
        </ul>
        <div>
            <p>Quantity</p>
            <button onClick={handleLess}>-</button>
            <span>{}</span>
            <button onClick={handlePlus}>+</button>
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default InfoProduct;
