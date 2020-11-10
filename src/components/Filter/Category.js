import React, { useEffect, useState, useContext } from 'react';
import { Categories } from '../../Categories'
import { cards } from '../../data/data'
import { Checkbox } from 'antd';
import styles from './Category.module.css';
import { AppContext } from '../../AppContext';

const LS = localStorage

export default function Category(props) {

    let filterLS = JSON.parse(LS.getItem('filter'));

    const appContext = useContext(AppContext);
    const filter = appContext.filter;
    const setFilter = appContext.setFilter;

    const [data, setData] = useState({
        categories: [],
        selected: []
    });
    const getAmount = (id, arr) => {
        const result = arr.filter(item => item.category === id);
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

        if (filterLS) {
            if (filterLS.category.length > 0 && data.selected.length === 0) {
                setData({ ...data, selected: filterLS.category })
            }
        }

    }, [data.categories, data.selected])



    const onChange = (obj) => {
        let selected = [...data.selected];
        const { checked, id } = { ...obj.target };
        if (checked) {
            if (!selected.includes(id)) {
                selected.push(id);
                setFilter({ ...filter, category: selected });
                setData({ ...data, selected })
            }
        } else {
            if (data.selected.length > 0) {
                let updatedSelected = selected.filter(ID => ID !== id);
                setFilter({ ...filter, category: updatedSelected })
                setData({ ...data, selected: updatedSelected })
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
