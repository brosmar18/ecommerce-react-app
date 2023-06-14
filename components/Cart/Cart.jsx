import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Toast } from 'react-hot-toast';

import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../library/client';
import styles from './Cart.module.scss';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();


    return (
        <div className={styles.cartWrapper} ref={cartRef}>
            <div className={styles.cartContainer}>
                <button type='button' className={styles.cartHeading} onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className={styles.heading}>Your Cart</span>
                    <span className={styles.cartNumItems}>({totalQuantities})</span>
                </button>
                {cartItems.length < 1 && (
                    <div className={styles.emptyCart}>
                        <AiOutlineShopping size={150} />
                        <h3>Your shopping bag is empty</h3>
                        <Link href="/">
                            <button
                                type='button'
                                onClick={() => setShowCart(false)} className={styles.btn}>
                                    Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;
