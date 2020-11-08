import React from 'react';
import { categories } from '../../data/category'
import { Checkbox } from 'antd';
import styles from './Category.module.css';

export default function Category(props) {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }


    return (
        <div className={styles.category}>
            <h3>Categories </h3>
            <ul>
                {categories.map(category => <li key={category.id}><Checkbox className={styles.checkItem} onChange={onChange}>{category.name}</Checkbox></li>)}
            </ul>
        </div>
    )
}
