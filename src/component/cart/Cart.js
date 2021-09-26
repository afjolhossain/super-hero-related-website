import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} =props;
    let total=0;
    for(const author of cart){
       total= total+author.Book;
    }

    return (
        <div className="cart-container">
             <h2>Authors Added : {props.cart.length}</h2>
             <h6>Total Book : {total}</h6>
              
        </div>
    );
};

export default Cart;