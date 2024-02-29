import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/homePage/ProductCard';
import './styles/homePage.css';
import SelectCategory from '../components/homePage/SelectCategory';
import FormPrice from '../components/homePage/FormPrice';

const body = document.querySelector('body');

const HomePage = () => {

    const [formValue, setFormValue] = useState({
        from: 0,
        to: Infinity,
    });
    const [selectValue, setSelectValue] = useState(0);
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
        const {from, to} = formValue;
        const ByName = prod.title.toLowerCase().includes(productName);
        const Bycategory = +selectValue === 0 ? true : prod.categoryId === +selectValue;
        const ByPrice = +prod.price > +from &&  +prod.price < +to;

        return ByName &&  Bycategory &&  ByPrice;
    }

    const handleDark = () => {
        body.classList.toggle('dark');
    }

  return (
    <div>
        <div className='filtersContainer'>
            <button onClick={handleDark}>Dark Mode</button>
            <FormPrice 
                setFormValue= {setFormValue}
            />
            <div>
                <h3>By Name</h3>
                <input type="text" ref={textInput} onChange={handleSearch}/>
            </div>
            <SelectCategory
                setSelectValue={setSelectValue}
            />
        </div>
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