import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Author.css';

const Author = (props) => {
    // console.log('clicked')
   const {img,Author,Country,Book, Born,Age}= props.author;
   const element = <FontAwesomeIcon icon={faBook} />
    return (
        <div className="author-container">
            <div className="card-items">
            <img className="Author-img" src={img} alt="" />
            <h5 className="authorName">Author : {Author}</h5>
            <p className="born">Born :{Born}</p>
            <h6 className="book">Total-Book : {Book} </h6>
            <h5 className="country">Country : {Country}</h5>
            <p>Age : {Age}</p>
            
            <button  onClick={()=>props.hnadleAddToCart (props.author)} className="Regular-btn"> {element}Add To Cart</button><br />
            <FontAwesomeIcon icon={faFacebook} />
            </div>
        </div>
        
    );
};

export default Author;