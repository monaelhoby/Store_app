import React from "react";


const CartCell = ({cart, decrement , increment, removeItem}) => {
    const {images,name,price,total,count,id} = cart;

    return (
      <tr>
        <td className="hidden-xs">
         <a href="#"><img src={images[0]} alt="Accessories Pack" style={{"width":"100%"}}/></a>
        </td>
        <td>
          <h5 className="product-title font-alt">{name}</h5>
        </td>
        <td className="hidden-xs">
          <h5 className="product-title font-alt">$ {price}</h5>
        </td>
        <td>
          <span className="form-control text-center">
          <i className="far fa-minus-square cartIcon" onClick={() => decrement(id)}></i>
            <span className="count">{count}</span>
          <i className="far fa-plus-square cartIcon" onClick={() => increment(id)}></i>
          </span>
        </td>
        <td>
          <h5 className="product-title font-alt">$ {total}</h5>
        </td>
        <td className="pr-remove text-center"><a title="Remove" onClick={() => {removeItem(id)}}><i className="fas fa-times"></i></a></td>
      </tr>
    )
}

export default CartCell