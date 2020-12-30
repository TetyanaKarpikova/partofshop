import React from 'react';


export const ProductItem = ({ 
    isAddedToWishlist,
    isAddedToCart,
    onAddToCart,
    onAddToWishList,
    product,
    product: { id, title, price,description}
 }) => {
    return (
        <div key={id}>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{description}</h5>
            <button  style={{background: isAddedToCart ? 'red' : 'white'}}
              onClick={() => onAddToCart(product)}>add to cart</button>
            <button  style={{ background: isAddedToWishlist ? "green" : "white" }}            
              onClick={() => onAddToWishList(product)}>add to wishlist</button>
            <hr />
        </div>
    )
}