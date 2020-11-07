import React from 'react'
import City from '../components/Filter/City';
import Category from '../components/Filter/Category';
import Price from '../components/Filter/Price';

export default function Filter(props) {


    return (
        <div className="filter">
            <h2>Filter</h2>
            <City />
            <Category />
            <Price />
        </div>
    )
}
