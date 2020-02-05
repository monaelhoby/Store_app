import React from 'react';
import {Link} from "react-router-dom";

const SingleClothes = ({item,handleClick}) => {
    const {name, slug, images, price,inCart,id} = item;
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
        <div className="shop-item">
           <div className="shop-item-image"><img src={images[0]} alt="Accessories Pack"/>
            <div className="shop-item-detail">
                <a className={`btn btn-round btn-b ${inCart ? "disabled" : ""}`} onClick={() => handleClick(id)}>
                <i class="fas fa-cart-plus"></i> Add To Cart
                </a>
                <Link className="btn btn-round btn-b" to="/cart" style={{"marginLeft" : "10px"}}>
                <i class="fas fa-cart-arrow-down"></i>  Go To Cart
                </Link>
                <Link className="btn btn-round btn-b" to={`/products/${slug}`} style={{"display":"block","margin":"20px auto auto","width":"130px"}}>
                    <i className="fas fa-info"></i>  Features
                </Link>
            </div>
           </div>
            <h4 className="shop-item-title link">{name}</h4>
            <h4 className="shop-item-title" style={{"color":"#777"}}>$ {price}</h4>
        </div>
    </div>
  );
}
export default SingleClothes;
