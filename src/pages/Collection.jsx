import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setSubCategory((prev) => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
        }

        setFilterProducts(productsCopy);
    };

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, products]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return ( <
        div className = 'flex flex-col sm:flex-row gap-1 sm:gap-16 pt-12 border-t font-sans pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' >

        { /* ---------------- Sidebar Filters ---------------- */ } <
        div className = 'min-w-60' >

        { /* Mobile Toggle */ } <
        p onClick = {
            () => setShowFilter(!showFilter) }
        className = 'my-2 text-xl flex items-center cursor-pointer gap-2 font-serif text-gray-900 tracking-wide' >
        FILTERS <
        img className = { `h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}` }
        src = { assets.dropdown_icon }
        alt = "" / >
        <
        /p>

        { /* Material Filter (Mapped to Category) */ } <
        div className = { `mt-10 ${showFilter ? '' : 'hidden'} sm:block` } >
        <
        p className = 'mb-4 text-xs font-bold font-serif uppercase tracking-[0.15em] text-gray-900' > Material < /p> <
        div className = 'flex flex-col gap-3 text-sm font-light text-gray-600' >
        <
        label className = 'flex items-center gap-3 cursor-pointer hover:text-[#C5A059] transition-colors' >
        <
        input className = 'w-3 h-3 accent-[#C5A059] border-gray-300 rounded-none'
        type = "checkbox"
        value = { 'Men' }
        onChange = { toggleCategory }
        /> 
        Yellow Gold <
        /label> <
        label className = 'flex items-center gap-3 cursor-pointer hover:text-[#C5A059] transition-colors' >
        <
        input className = 'w-3 h-3 accent-[#C5A059] border-gray-300 rounded-none'
        type = "checkbox"
        value = { 'Women' }
        onChange = { toggleCategory }
        /> 
        White Gold <
        /label> <
        label className = 'flex items-center gap-3 cursor-pointer hover:text-[#C5A059] transition-colors' >
        <
        input className = 'w-3 h-3 accent-[#C5A059] border-gray-300 rounded-none'
        type = "checkbox"
        value = { 'Kids' }
        onChange = { toggleCategory }
        /> 
        Rose Gold <
        /label> <
        /div> <
        /div>

        { /* Divider */ } <
        div className = { `h-[1px] bg-gray-200 my-8 w-1/2 ${showFilter ? '' : 'hidden'} sm:block` } > < /div>

        { /* Type Filter (Mapped to SubCategory) */ } <
        div className = { `mb-10 ${showFilter ? '' : 'hidden'} sm:block` } >
        <
        p className = 'mb-4 text-xs font-bold font-serif uppercase tracking-[0.15em] text-gray-900' > Jewellery Type < /p> <
        div className = 'flex flex-col gap-3 text-sm font-light text-gray-600' >
        <
        label className = 'flex items-center gap-3 cursor-pointer hover:text-[#C5A059] transition-colors' >
        <
        input className = 'w-3 h-3 accent-[#C5A059] border-gray-300 rounded-none'
        type = "checkbox"
        value = { 'Ring' }
        onChange = { toggleSubCategory }
        /> 
        Rings <
        /label> <
        label className = 'flex items-center gap-3 cursor-pointer hover:text-[#C5A059] transition-colors' >
        <
        input className = 'w-3 h-3 accent-[#C5A059] border-gray-300 rounded-none'
        type = "checkbox"
        value = { 'Necklace' }
        onChange = { toggleSubCategory }
        /> 
        Necklaces <
        /label> <
        label className = 'flex items-center gap-3 cursor-pointer hover:text-[#C5A059] transition-colors' >
        <
        input className = 'w-3 h-3 accent-[#C5A059] border-gray-300 rounded-none'
        type = "checkbox"
        value = { 'Earring' }
        onChange = { toggleSubCategory }
        /> 
        Earrings <
        /label> <
        label className = 'flex items-center gap-3 cursor-pointer hover:text-[#C5A059] transition-colors' >
        <
        input className = 'w-3 h-3 accent-[#C5A059] border-gray-300 rounded-none'
        type = "checkbox"
        value = { 'Bracelet' }
        onChange = { toggleSubCategory }
        /> 
        Bracelets <
        /label> <
        /div> <
        /div> <
        /div>

        { /* ---------------- Right Side: Products ---------------- */ } <
        div className = 'flex-1' >

        <
        div className = 'flex justify-between items-end mb-8 border-b border-gray-100 pb-4' >
        <
        Title text1 = { 'ALL' }
        text2 = { 'COLLECTIONS' }
        />

        { /* Product Sort - Minimalist */ } <
        select onChange = {
            (e) => setSortType(e.target.value) }
        className = 'border-none text-sm px-2 cursor-pointer focus:outline-none bg-transparent text-gray-600 hover:text-gray-900' >
        <
        option value = "relevant" > Sort by: Relevant < /option> <
        option value = "low-high" > Price: Low to High < /option> <
        option value = "high-low" > Price: High to Low < /option> <
        /select> <
        /div>

        { /* Map Products */ } <
        div className = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12' > {
            filterProducts.map((item, index) => ( <
                ProductItem key = { index }
                name = { item.name }
                id = { item._id }
                price = { item.price }
                image = { item.image }
                />
            ))
        } <
        /div> <
        /div>

        <
        /div>
    )
}

export default Collection;