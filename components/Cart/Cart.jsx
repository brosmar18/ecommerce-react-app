import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Toast } from 'react-hot-toast';

import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../library/client';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();

    
    return (
        <>Cart</>
    )
}

export default Cart;
