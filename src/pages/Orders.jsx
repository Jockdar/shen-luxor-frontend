import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
    const { backendUrl, token, currency } = useContext(ShopContext);
    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async() => {
        try {
            if (!token) {
                return null;
            }

            const response = await axios.post(backendUrl + '/api/order/userOrders', {}, { headers: { token } })
            if (response.data.success) {
                let allOrdersItem = []
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMethod'] = order.paymentMethod
                        item['date'] = order.date
                        allOrdersItem.push(item)
                    })
                })
                setOrderData(allOrdersItem.reverse());
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadOrderData()
    }, [token])

    return ( <
        div className = 'border-t pt-16 font-sans min-h-[60vh] pb-20' >
        <
        div className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' >
        <
        div className = 'text-2xl mb-12' >
        <
        Title text1 = { 'MY' }
        text2 = { 'ORDERS' }
        /> <
        /div>

        <
        div className = 'flex flex-col gap-6' > {
            orderData.length === 0 ? ( <
                p className = 'text-gray-500 text-sm' > You have no orders yet. < /p>
            ) : (
                orderData.map((item, index) => ( <
                    div key = { index }
                    className = 'py-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:bg-gray-50 transition-colors p-4' > { /* Product Info */ } <
                    div className = 'flex items-start gap-6 text-sm' >
                    <
                    img className = 'w-16 sm:w-20 aspect-[3/4] object-cover'
                    /* FIX: Simplified check to prevent syntax errors */
                    src = { item.image && item.image.length > 0 ? item.image[0] : '' }
                    alt = { item.name || 'Order item' }
                    /> <
                    div >
                    <
                    p className = 'sm:text-base font-serif font-medium uppercase tracking-wide text-gray-900' > { item.name } < /p> <
                    div className = 'flex items-center gap-3 mt-2 text-base text-gray-700' >
                    <
                    p > { currency } { item.price } < /p> <
                    p > Quantity: { item.quantity } < /p> <
                    p > Size: { item.size } < /p> <
                    /div> <
                    p className = 'mt-2 text-gray-500 text-xs' > Date: < span className = 'text-gray-700' > { new Date(item.date).toDateString() } < /span></p >
                    <
                    p className = 'mt-1 text-gray-500 text-xs' > Payment: < span className = 'text-gray-700 uppercase' > { item.paymentMethod } < /span></p >
                    <
                    /div> <
                    /div>

                    { /* Status & Actions */ } <
                    div className = 'md:w-1/2 flex justify-between gap-4' >
                    <
                    div className = 'flex items-center gap-2' >
                    <
                    p className = { `min-w-2 h-2 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-[#C5A059]'}` } > < /p> <
                    p className = 'text-sm md:text-base font-medium text-gray-700' > { item.status } < /p> <
                    /div> <
                    button onClick = { loadOrderData }
                    className = 'border border-gray-300 px-6 py-2 text-sm font-medium rounded-none uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300' >
                    Track Order <
                    /button> <
                    /div> <
                    /div>
                ))
            )
        } <
        /div> <
        /div> <
        /div>
    )
}

export default Orders