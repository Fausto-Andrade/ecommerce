import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/homePage/ProductCard';
import './styles/homePage.css';

const HomePage = () => {

    const [productName, setproductName] = useState('');
    const products = useSelector(store => store.products);
    const dispatch = useDispatch();

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
       dispatch(getProductsThunk(url));

    }, []);

    const textInput = useRef();

    const handleSearch = () => {
        setproductName(textInput.current.value.toLowerCase().trim());
    }

    const cbFilter = (prod) => {
       return prod.title.toLowerCase().includes(productName);
    }

  return (
    <div>
        <h1 className="title">Welcome to Ecommerce!</h1>
        <input type="text" ref={textInput} onChange={handleSearch}/>
        <section className='producstContainer'>
            {
                products?.filter(cbFilter).map(prod => (
                    <ProductCard 
                        key={prod.id}
                        prod= {prod}
                    />
                ))
            }
        </section>
    </div>
  )
}

// Redux para los estado globales (slices)

export default HomePage;