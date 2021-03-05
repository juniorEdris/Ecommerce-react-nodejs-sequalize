import React from 'react'
import './product.css'


function Product({ id, title, price, rating, image }) {

    return (
        <div className='product col col-sm-4' key={ id}>
                <div className="">
                    <img className='product__image' src={image} alt='' />
                </div>
                <div className='product__info'>
                    <h4>{title}</h4>
                    <p className='product__price'>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='product__ratings'>
                        {
                            Array(rating)
                            .fill()
                            .map(_ => (
                                <p> &#9733; </p>
                                ))
                        }
                    </div>
                </div>
                <button  className="product__button btn">Add to basket</button>
            </div>
    )
}

export default Product
