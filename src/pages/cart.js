import React, {useContext} from 'react';
import CartTable from "../components/cart/cartTable";
import CartCheck from "../components/cart/cartcheck"


const Cart = () => {


  return (
    <section className="module">
          <div className="container">
            <h1 className="module-title font-alt">Checkout</h1>
            <hr className="divider-w pt-20" />
               <CartTable />
            <hr className="divider-w" />
              <CartCheck />
          </div>
        </section>
  );
}

export default Cart;
