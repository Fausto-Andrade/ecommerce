import React from 'react';
import './styles/productCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({prod}) => {

  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/product/${prod.id}`);
  }
    
  return (
    <article className='productCard'>
      <figure>
        <img src={prod.images[0].url} alt="product image" />
      </figure>
      <div>
        <ul>
          <li><span>{prod.brand}</span><span>{prod.title}</span></li>
          <li><span>Price</span><span>$ {prod.price}</span></li>
        </ul>
      </div>
      <div className='productbuttons'>
        <button>Add to Cart</button>
        <button onClick={handleView}>View more</button>
      </div>
    </article>
  )
}

export default ProductCard;