import React, { useEffect, useState } from 'react';
import { Categories } from '../../Categories'
import { cards } from '../../data/data'
import { Checkbox } from 'antd';
import styles from './Category.module.css';

export default function Category(props) {
    const [data, setData] = useState({
        categories: [],
        selected: []
    });
    const getAmount = (id, arr) => {
        const result = arr.filter(item => item.id === id);
        return result.length
    }

    useEffect(() => {

        if (data.categories.length === 0) {
            const cardsWithAmount = Categories.map((item, index, arr) => {
                let amount = getAmount(item.id, cards);
                item.amount = amount;
                return item
            })
            setData({ ...data, categories: cardsWithAmount })
        }

    }, [])



    const onChange = (obj) => {
        let selected = [...data.selected];
        const { checked, id } = { ...obj.target };
        if (checked) {
            if (!selected.includes(id)) {
                selected.push(id);
                setData({ ...data, selected })
            }
        } else {
            if (data.selected.length > 0) {
                let selected = data.selected.filter(ID => ID !== id);
                setData({ ...data, selected })
            }
        }

    }


    return (
        <div className={styles.category}>
            <h3>Categories </h3>
            <ul>
                {data.categories.length > 0 && data.categories.map(category => <li key={category.id}>
                    <Checkbox
                        id={category.id}
                        name={category.name}
                        className={styles.checkItem}
                        onChange={onChange}
                        checked={data.selected.includes(category.id) ? true : false}
                    >
                        {category.name}<span className={styles.amount}>{category.amount}</span>
                    </Checkbox>
                </li>)}
            </ul>
        </div>
    )
}
