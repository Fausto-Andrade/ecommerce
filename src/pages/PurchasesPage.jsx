import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import getToken from '../utils/getToken';

const PurchasesPage = () => {

  const [purchases, getPurchases] = useFetch();

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    getPurchases(url, getToken());    
  }, []);
  

  return (
    <div>
      PurchasesPage
    </div>
  )
}

export default PurchasesPage;
