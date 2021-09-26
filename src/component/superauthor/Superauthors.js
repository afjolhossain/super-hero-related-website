import React, { useEffect, useState } from 'react';
import Author from '../author/Author';
import Cart from '../cart/Cart';
import './Superauthors.css'

const Superauthors = () => {
    const [ authors,setauthors]=useState([]);
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('./authorsdata.json')
        .then(res=>res.json())
        .then(data=>setauthors(data))
    },[])
    const hnadleAddToCart =(author)=>{
        const NewCart=[...cart,author];
        setCart(NewCart);
    }
    return (
        <div className="superauthor-container">
        <div className="authors-container">
             <div className="grid-cloum">      
              {
                  authors.map(author =><Author
                  key={author.id}
                  author={author}
                  hnadleAddToCart={hnadleAddToCart}
                  ></Author>)
              }
             </div>
        </div>
        <div className="cart-container">
         <Cart cart={cart}></Cart>
        </div>       
    </div>
    );
};

export default Superauthors;