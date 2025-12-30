import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

    const { currency } = useContext(ShopContext);

    return ( <
        Link className = 'text-gray-700 cursor-pointer block'
        to = { `/product/${id}` } >

        { /* Image Container - Enforced Portrait Aspect Ratio (3:4) */ } <
        div className = 'overflow-hidden w-full aspect-[3/4] relative bg-gray-100' >

        { /* SAFE IMAGE RENDER: Checks if image exists before zooming */ } <
        img className = 'w-full h-full object-cover hover:scale-110 transition duration-[1500ms] ease-in-out'
        src = { image && Array.isArray(image) && image.length > 0 && image[0] ? image[0] : '' }
        alt = { name || 'Product image' }
        onError = {(e) => { e.target.src = ''; }}
        /> <
        /div>

        { /* Product Details */ } <
        div className = 'pt-4 pb-1 text-center' >
        <
        p className = 'pt-3 pb-1 text-xs font-serif tracking-widest uppercase text-gray-500 hover:text-[#C5A059] transition-colors' > { name } <
        /p> <
        p className = 'text-sm font-medium text-[#1A1A1A]' > { currency } { price } <
        /p> <
        /div> <
        /Link>
    )
}

export default ProductItem