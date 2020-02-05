import React,{Component} from 'react';
import Banner from "../components/banner";
import {ProductContext} from "../Context_API/context";
import {Link} from "react-router-dom"

class SingleProducts extends Component {
  static contextType = ProductContext;
  state={
    slug:this.props.match.params.slug
  }
  render (){
    const {getClothes,addItem} = this.context;
    const clothes = getClothes(this.state.slug);
    if(!clothes){
      return(
        <div className="error">No Data to show 
        <button className="btn btn-primary text-center">
          <Link to="/products">Go To Product</Link>
          </button>
          </div>
      )
    }
    const {name,description,
          color,id,
          size,
          price, images, inCart
          } = clothes;
           
    return (
      <div>
       <section class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 "><img src={images[0]} alt="Single Product Image"/>
                <ul class="product-gallery">
                  <li><img src={images[0]} alt="Single Product"/></li>
                  <li><img src={images[0]} alt="Single Product"/></li>
                  <li><img src={images[0]} alt="Single Product"/></li>
                </ul>
              </div>
              <div class="col-sm-6">
                    <h1 class="product-title">{name}</h1>
                  <div class="col-sm-12">
                   <div class="price"><span class="amount">$ {price}</span></div>
                    <div class="description">
                      <p>{description}</p>
                    </div>
                  <div class="col-sm-12">
                    <div class="product_meta">Colors :
                    {color.map(item => {
                      return <span> {item} ,</span>
                    })}
                    </div>
                  </div>
                  <div class="col-sm-12"><div class="product_meta">Size : <span>{size}</span></div></div>
                </div>
                  <div class="col-sm-8">
                    <Link class={`btn btn-round btn-b ${inCart ? "disabled" : ""}`} onClick={() => addItem(id)} to="/cart">
                    <i class="fas fa-cart-plus"></i> Add To Cart</Link>
                     </div>
              </div>
            </div>
            </div>
        </section>
      </div>
    );
  }
}

export default SingleProducts;
