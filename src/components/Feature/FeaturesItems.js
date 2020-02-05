import React, {useContext} from 'react';
import {ProductContext} from "../../Context_API/context";
import Loading from "../loading";
import SingleItem from "./singleItem";

const FeatureClothes = () => {
 const context = useContext(ProductContext);
 const {featureClothes,loading, addItem} = context ;
  return (
    <section className="module-small">
      <div className="container">
        <div>
          <h2 className="module-title text-center">Latest in clothing</h2>
        </div>
        {loading ? <Loading /> :
        <div className="row">
            {featureClothes.map(item => {
               return <SingleItem key={item.id} item={item} handleClick={addItem}/>
            })}
        </div>
        }
      </div>
    </section>
  );
}

export default FeatureClothes;
