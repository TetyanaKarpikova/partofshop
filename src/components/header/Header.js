import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';

export const Header = (props) => {
    const {cart, wishlist} = useSelector(
        ({cart: {cart}, wishlist: {wishlist} }) => (
            {wishlist, cart}));
    // console.log(cart);
    const priceCart = useMemo(() => {       
        let result = 0;
        cart.forEach(element => {
            result += element.price;
        });
        return result;
    }, [cart])

    const priceWishlist = useMemo(()=> {
        let result = 0;
        wishlist.forEach(element => {
            result += element.price;
        })
        return result;
    }, [wishlist])

    return (
        <header className='d-flex justify-between align-center'>
            <h2>Hello in shop</h2>


            <div className='d-flex justify-between'>            
            <div className='mx-10' title={priceCart}>cart:{cart.length}</div>
            <div className='mx-10' title={priceWishlist}>wishList: {wishlist.length}</div>
            </div>
        </header>
    )
}