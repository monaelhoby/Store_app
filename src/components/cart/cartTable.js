import React, {useContext} from 'react';
import {ProductContext} from "../../Context_API/context";
import CartCell from "./cartCell";


const CartTable = () => {

    const context = useContext(ProductContext);
    const {cart,increment ,decrement ,removeItem , addTotals} = context ;

    return (
    cart.length > 0 ? (<div className="row">
        <div className="col-sm-12">
            <table className="table table-striped table-border checkout-table">
                <tbody>
                <tr>
                    <th className="hidden-xs">Item</th>
                    <th>Name</th>
                    <th className="hidden-xs">Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
                {cart.map((item) => { return <CartCell key={item.id} cart={item}
                                                        decrement={decrement} increment={increment}
                                                        removeItem ={removeItem}
                                                        />})}
                </tbody>
            </table>
            </div>
                <div className="col-sm-9"></div>
                <div className="col-sm-3">
                <div className="form-group">
                <button className="btn btn-block btn-round btn-d pull-right" type="submit" onClick={(e) => addTotals(e)}>Update Cart</button>
            </div>
            </div>
        </div> ) : "" 
    )
}

export default CartTable