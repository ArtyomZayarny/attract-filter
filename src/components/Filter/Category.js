import React from 'react';
import { categories } from '../../data/category'
import { Checkbox } from 'antd';

export default function Category(props) {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }


    return (
        <>
            <h3>Category </h3>
            <ul>
                {categories.map(category => <li key={category.id}><Checkbox onChange={onChange}>{category.name}</Checkbox></li>)}
            </ul>
        </>
    )
}
