import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = async() => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? ( <
        div className = "border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 font-sans pb-20" >

        { /* ----------- Product Data Container ----------- */ } <
        div className = "flex gap-12 sm:gap-16 flex-col sm:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >

        { /* ----------- Left Side: Product Images (50% Width) ----------- */ } <
        div className = "flex-1 flex flex-col-reverse gap-3 sm:flex-row" > { /* Thumbnails */ } <
        div className = "flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-start sm:w-[15%] w-full h-auto sm:h-[500px]" > {
            productData.image.map((item, index) => ( <
                img onClick = {
                    () => setImage(item) }
                src = { item }
                key = { index }
                className = "w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover aspect-[3/4] border border-transparent hover:border-gray-400 transition-all"
                alt = "" /
                >
            ))
        } <
        /div> { /* Main Image */ } <
        div className = "w-full sm:w-[85%]" >
        <
        img className = "w-full h-auto object-cover aspect-[3/4]"
        src = { image }
        alt = "" / >
        <
        /div> <
        /div>

        { /* ----------- Right Side: Product Details (50% Width) ----------- */ } <
        div className = "flex-1 mt-8 sm:mt-0" >

        { /* Category Breadcrumb */ } <
        p className = "text-xs text-gray-500 tracking-[0.2em] uppercase mb-6" >
        Home / { productData.category }
        / {productData.subCategory} <
        /p>

        { /* Product Title (Serif & Uppercase like Azza Fahmy) */ } <
        h1 className = "font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4 tracking-wide uppercase" > { productData.name } <
        /h1>

        { /* Price */ } <
        p className = "text-xl font-serif text-gray-800 mt-2 mb-8" > { currency } { productData.price } <
        /p>

        { /* Description */ } <
        p className = "text-gray-600 text-sm leading-7 md:w-4/5 mb-10 font-light" > { productData.description } <
        /p>

        { /* Size Selector */ } <
        div className = "flex flex-col gap-4 my-8" >
        <
        p className = "text-xs uppercase tracking-widest text-gray-800 font-semibold" > Select Size < /p> <
        div className = "flex gap-3" > {
            productData.sizes.map((item, index) => ( <
                button onClick = {
                    () => setSize(item) }
                className = { `border py-3 px-6 bg-transparent text-sm transition-all duration-300 rounded-none min-w-[3rem] ${
                    item === size ? 'border-[#C5A059] text-[#C5A059]' : 'border-gray-300 text-gray-700 hover:border-gray-900'
                  }` }
                key = { index } >
                { item } <
                /button>
            ))
        } <
        /div> <
        /div>

        { /* Add to Cart Button (Sharp & Wide) */ } <
        button onClick = {
            () => addToCart(productData._id, size) }
        className = "w-full bg-[#000] text-white px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors duration-300 rounded-none mb-12" >
        Add to Cart <
        /button>

        { /* ----------- Accordion Style Info Sections ----------- */ } <
        div className = "border-t border-gray-300" >

        { /* Technical Description */ } <
        div className = "border-b border-gray-300 py-6" >
        <
        h3 className = "text-xs font-serif uppercase tracking-widest text-gray-900 mb-4" > Technical Description < /h3> <
        ul className = "text-sm text-gray-600 list-disc pl-5 space-y-2 font-light" >
        <
        li > Handcrafted from 18 kt Gold and Sterling Silver. < /li> <
        li > Inscribed with authentic calligraphy. < /li> <
        li > Weight: Approx 15 g(may vary by size). < /li> <
        /ul> <
        /div>

        { /* Shipping & Returns */ } <
        div className = "border-b border-gray-300 py-6" >
        <
        h3 className = "text-xs font-serif uppercase tracking-widest text-gray-900 mb-4" > Shipping & Returns < /h3> <
        p className = "text-sm text-gray-600 leading-relaxed font-light" >
        Free worldwide shipping on all orders over $500.Each piece is made to order and comes with a certificate of authenticity. <
        /p> <
        /div> <
        /div>

        <
        /div> <
        /div>

        { /* ----------- Related Products Section ----------- */ } <
        div className = "mt-24 mb-12" >
        <
        div className = "text-center py-10" >
        <
        h2 className = "font-serif text-2xl sm:text-3xl text-gray-900 mb-4 uppercase tracking-widest" > You May Also Like < /h2> <
        div className = "w-24 h-[1px] bg-[#C5A059] mx-auto" > < /div> <
        /div>

        { /* Full Width Container for Related Products */ } <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        RelatedProducts category = { productData.category }
        subCategory = { productData.subCategory }
        /> <
        /div> <
        /div>

        <
        /div>
    ) : ( <
        div className = "opacity-0" > < /div>
    );
};

export default Product;