import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item]
                        })
                    }
                }
            }
            setCartData(tempData);
        }
    }, [cartItems, products])

    return ( <
        div className = 'border-t pt-14 pb-20 font-sans min-h-[60vh]' >

        { /* Page Title */ } <
        div className = 'text-2xl mb-12 flex justify-center' >
        <
        Title text1 = { 'YOUR' }
        text2 = { 'SHOPPING BAG' }
        /> <
        /div>

        <
        div className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' >

        { /* Cart Items List */ } <
        div className = 'flex flex-col gap-8' > {
            cartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id);

                return ( <
                    div key = { index }
                    className = 'py-6 border-b border-gray-200 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4' >

                    { /* Product Image & Details */ } <
                    div className = 'flex items-start gap-6' >
                    <
                    img className = 'w-20 sm:w-24 aspect-[3/4] object-cover border border-gray-100'
                    src = { productData.image[0] }
                    alt = "" / >
                    <
                    div >
                    <
                    p className = 'text-lg font-serif text-gray-900 uppercase tracking-wide' > { productData.name } < /p> <
                    div className = 'flex items-center gap-5 mt-2' >
                    <
                    p className = 'text-sm text-gray-500 font-medium' > { currency } { productData.price } < /p> <
                    p className = 'px-3 py-1 border border-gray-200 bg-gray-50 text-xs uppercase tracking-widest' > { item.size } < /p> <
                    /div> <
                    /div> <
                    /div>

                    { /* Quantity Input (Minimalist) */ } <
                    input onChange = {
                        (e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value)) }
                    className = 'border border-gray-300 max-w-[3rem] sm:max-w-[4rem] px-2 py-2 text-center text-sm rounded-none focus:outline-none focus:border-[#C5A059]'
                    type = "number"
                    min = { 1 }
                    defaultValue = { item.quantity }
                    />

                    { /* Delete Icon */ } <
                    img onClick = {
                        () => updateQuantity(item._id, item.size, 0) }
                    className = 'w-5 cursor-pointer opacity-60 hover:opacity-100 transition-opacity ml-auto sm:ml-0'
                    src = { assets.bin_icon }
                    alt = "Remove" /
                    >
                    <
                    /div>
                )
            })
        } <
        /div>

        { /* Cart Totals Section */ } <
        div className = 'flex justify-end mt-16' >
        <
        div className = 'w-full sm:w-[450px]' >
        <
        CartTotal / >
        <
        div className = 'w-full text-end mt-8' >
        <
        button onClick = {
            () => navigate('/place-order') }
        className = 'bg-black text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#C5A059] transition-colors duration-300 rounded-none w-full sm:w-auto' >
        Proceed to Checkout <
        /button> <
        /div> <
        /div> <
        /div>

        <
        /div> <
        /div>
    )
}

export default Cart