import React, { useEffect, useState } from 'react';
import { Categories } from '../../Categories'
import { cards } from '../../data/data'
import { Checkbox } from 'antd';
import styles from './Category.module.css';

export default function Category(props) {
    const [data, setData] = useState({
        cards
    });

    useEffect(() => {
        if (data.cards.length === 0) {
            setData({ ...data, cards })
        }

    }, [data.cards])

    const getAmount = (id, arr) => {
        console.log(id, arr)
        const result = arr.filter(item => item.id === id);
        return result.length
    }

    const onChange = (obj) => {
        const { name, checked } = { ...obj.target };
        console.log(name, checked)
    }


    return (
        <div className={styles.category}>
            <h3>Categories </h3>
            <ul>
                {data.cards.length > 0 && Categories.map(category => <li key={category.id}>
                    <Checkbox
                        name={category.name}
                        className={styles.checkItem}
                        onChange={onChange}
                    >{category.name}<span className={styles.amount}>{`(${getAmount(category.id, data.cards)})`}</span></Checkbox></li>)}
            </ul>
        </div>
    )
}
