import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import CardContainer from './components/Card/CardContainer';
import MainContainer from './components/MainContainer';
import FilterContainer from './components/FilterContainer';
import { ColorFilter, GenderFilter, TypeFilter, PriceFilter } from './components/Filters';

function App() {

  const [productList, setProductList] = useState([]);
  console.log("heyy");

  useEffect(() => {
    const fetchProductList = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json();
      setProductList([...data]);
      console.log("product list", productList);
    };
    fetchProductList();
  }, []);

  return (
    <div className="App">
      <Header />
      <MainContainer>
        <FilterContainer>
          <ColorFilter />
          <GenderFilter />
          <PriceFilter />
          <TypeFilter />
        </FilterContainer>
        <div className='grid grid-cols-3 gap-x-2 gap-y-4'>
          {
            productList.map(product => {
              return (
                <CardContainer key={product.id} imgURL={product.imageURL} price={product.price} />
              );
            })
          }
        </div>
      </MainContainer>
    </div>
  );
}

export default App;
