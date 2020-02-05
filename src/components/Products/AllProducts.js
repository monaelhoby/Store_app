import React from 'react';
import SingleItem from "../Feature/singleItem";
import {withItemConsumer} from "../../Context_API/context";
import Loading from "../loading";

const AllProducts = ({context}) => {
  const {sortedClothes,loading,addItem} = context ;
  if (sortedClothes.length === 0) {
    return (
      <div className="container">
      <div className="empty-search">
        <h3>unfortunately no Clothes matched your search parameters</h3>
      </div>
      </div>
    );
  }
  return (
      <div className="container">
      <hr className="divider-w" style={{"marginBottom":"60px"}}/>
      {loading ? <Loading /> :
        <div className="row">
            {sortedClothes.map(item => {
               return <SingleItem key={item.id} item={item} handleClick={addItem}/>
            })}
        </div>
        }
        </div>
  );
}

export default withItemConsumer(AllProducts);
