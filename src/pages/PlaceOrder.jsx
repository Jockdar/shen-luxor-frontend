import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';

const PlaceOrder = () => {

    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [method, setMethod] = useState('cod');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({...data, [name]: value }))
    }

    const onSubmitHandler = async(event) => {
        event.preventDefault();
        try {

            let orderItems = []

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }

            switch (method) {
                // API Call for COD
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
                    if (response.data.success) {
                        setCartItems({})
                        navigate('/orders')
                    } else {
                        toast.error(response.data.message)
                    }
                    break;

                default:
                    break;
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return ( <
        form onSubmit = { onSubmitHandler }
        className = 'border-t pt-14 min-h-[80vh] font-sans pb-20' >

        <
        div className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' >

        <
        div className = 'flex flex-col lg:flex-row justify-between gap-12 lg:gap-24' >

        { /* ---------------- Left Side: Delivery Information ---------------- */ } <
        div className = 'flex flex-col gap-6 w-full lg:max-w-[600px]' >

        <
        div className = 'text-2xl mb-6' >
        <
        Title text1 = { 'DELIVERY' }
        text2 = { 'INFORMATION' }
        /> <
        /div>

        <
        div className = 'flex gap-3' >
        <
        input required name = 'firstName'
        onChange = { onChangeHandler }
        value = { formData.firstName }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "text"
        placeholder = 'First name' / >
        <
        input required name = 'lastName'
        onChange = { onChangeHandler }
        value = { formData.lastName }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "text"
        placeholder = 'Last name' / >
        <
        /div>

        <
        input required name = 'email'
        onChange = { onChangeHandler }
        value = { formData.email }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "email"
        placeholder = 'Email address' / >
        <
        input required name = 'street'
        onChange = { onChangeHandler }
        value = { formData.street }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "text"
        placeholder = 'Street address' / >

        <
        div className = 'flex gap-3' >
        <
        input required name = 'city'
        onChange = { onChangeHandler }
        value = { formData.city }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "text"
        placeholder = 'City' / >
        <
        input required name = 'state'
        onChange = { onChangeHandler }
        value = { formData.state }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "text"
        placeholder = 'State' / >
        <
        /div>

        <
        div className = 'flex gap-3' >
        <
        input required name = 'zipcode'
        onChange = { onChangeHandler }
        value = { formData.zipcode }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "number"
        placeholder = 'Zipcode' / >
        <
        input required name = 'country'
        onChange = { onChangeHandler }
        value = { formData.country }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "text"
        placeholder = 'Country' / >
        <
        /div>

        <
        input required name = 'phone'
        onChange = { onChangeHandler }
        value = { formData.phone }
        className = 'border border-gray-300 rounded-none py-3.5 px-4 w-full text-sm focus:outline-none focus:border-[#C5A059] placeholder-gray-400 transition-colors bg-white'
        type = "number"
        placeholder = 'Phone number' / >
        <
        /div>

        { /* ---------------- Right Side: Cart Totals & Payment ---------------- */ } <
        div className = 'mt-12 lg:mt-0 w-full lg:max-w-[500px]' >

        { /* Cart Total Container */ } <
        div className = 'bg-gray-50 p-8 border border-gray-100' >
        <
        CartTotal / >
        <
        /div>

        <
        div className = 'mt-12' >
        <
        div className = 'mb-6' >
        <
        Title text1 = { 'PAYMENT' }
        text2 = { 'METHOD' }
        /> <
        /div>

        { /* Payment Selection Container */ } <
        div className = 'flex gap-4 flex-col lg:flex-row' >

        { /* Stripe */ } <
        div onClick = {
            () => setMethod('stripe') }
        className = { `flex items-center justify-center gap-3 border p-4 cursor-pointer hover:bg-gray-50 transition-all duration-300 ${method === 'stripe' ? 'border-[#C5A059] bg-white ring-1 ring-[#C5A059]' : 'border-gray-200'}` } >
        <
        img className = 'h-5 object-contain'
        src = { assets.stripe_logo }
        alt = "Stripe" / >
        <
        /div>

        { /* Razorpay */ } <
        div onClick = {
            () => setMethod('razorpay') }
        className = { `flex items-center justify-center gap-3 border p-4 cursor-pointer hover:bg-gray-50 transition-all duration-300 ${method === 'razorpay' ? 'border-[#C5A059] bg-white ring-1 ring-[#C5A059]' : 'border-gray-200'}` } >
        <
        img className = 'h-5 object-contain'
        src = { assets.razorpay_logo }
        alt = "Razorpay" / >
        <
        /div>

        { /* COD */ } <
        div onClick = {
            () => setMethod('cod') }
        className = { `flex items-center justify-center gap-3 border p-4 cursor-pointer hover:bg-gray-50 transition-all duration-300 ${method === 'cod' ? 'border-[#C5A059] bg-white ring-1 ring-[#C5A059]' : 'border-gray-200'}` } >
        <
        p className = 'text-gray-600 text-xs font-bold uppercase tracking-widest' > Cash on Delivery < /p> <
        /div>

        <
        /div>

        { /* Submit Button */ } <
        div className = 'w-full mt-12' >
        <
        button type = 'submit'
        className = 'w-full bg-black text-white py-4 text-sm uppercase tracking-[0.25em] hover:bg-[#C5A059] transition-all duration-500 rounded-none' >
        Place Order <
        /button> <
        /div>

        <
        /div> <
        /div>

        <
        /div> <
        /div> <
        /form>
    )
}

export default PlaceOrder