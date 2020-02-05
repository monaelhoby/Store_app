import React from 'react';
import Banner from "../components/banner";
import AllProducts from "../components/Products/AllProducts";
import Filter from "../components/Products/ProductBar";

const Products = () => {
  return (
    <div>
       <Banner title="Shop Products" subtitle="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."/>
       <Filter />
       <AllProducts />
    </div>
  );
}

export default Products;
