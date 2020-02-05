import React, {useContext} from 'react';
import {ProductContext} from "../../Context_API/context";


const CartCheck = () => {
    const context = useContext(ProductContext);
    const {cartTax ,cartSubtotal, cartTotal} = context ;

    return (
        <div className="row">
            <div className="col-sm-7"></div>
            <div className="col-sm-5">
            <div className="shop-Cart-totalbox">
                <h4 className="font-alt">Cart Totals</h4>
                <table className="table table-striped table-border checkout-table">
                <tbody>
                    <tr>
                    <th>Cart Subtotal :</th>
                    <td>$ {cartSubtotal}</td>
                    </tr>
                    <tr>
                    <th>Shipping Tax :</th>
                    <td>$ {cartTax}</td>
                    </tr>
                    <tr className="shop-Cart-totalprice">
                    <th>Total :</th>
                    <td>{cartTotal}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>

    )}

    export default CartCheck