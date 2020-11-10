import React, { useState, useEffect, useContext } from 'react';
import { Slider } from 'antd';
import { cards } from '../../data/data';
import styles from './Price.module.css';
import { AppContext } from '../../AppContext';

export default function Price(props) {

    const appContext = useContext(AppContext);
    const filter = appContext.filter;
    const setFilter = appContext.setFilter;

    const [price, setPrice] = useState({
        min: null,
        max: null,
        range: []
    })

    const onChange = (value) => {
        const [minPercet, maxPercent] = [...value];
        const result = calcPrice(minPercet, maxPercent, [price.min, price.max])
        setFilter({ ...filter, price: result })
        setPrice({ ...price, range: result });
    }

    const calcPrice = (minPercent, maxPercent, range) => {
        const [minPrice, maxPrice] = [...range];
        const pricePercent = maxPrice / 100;
        const minResult = (minPercent * pricePercent);
        const maxResult = (maxPercent * pricePercent);

        return [minResult, maxResult]
    }

    const getMinMaxPrice = (products) => {
        //Sorting products from min price  to max
        const sortedProducts = products.sort(function (a, b) { return a.price - b.price });
        //Get min max products
        const minPriceProduct = sortedProducts[0];
        const maxPriceProducts = sortedProducts[sortedProducts.length - 1];
        return [minPriceProduct.price, maxPriceProducts.price]
    }

    useEffect(() => {
        if (price.min === null && price.max === null) {
            let productCards = [...cards];
            const [min, max] = [...getMinMaxPrice(productCards)];
            setFilter({ ...filter, price: [min, max] })
            setPrice({ ...price, min, max, range: [min, max] })
        }

    }, [price.range])

    const handleFilter = () => {
        setFilter({ ...filter, filtering: true });
    }
    return (
        <div className={styles.price}>
            <h3>Price</h3>
            <Slider className={styles.slider}
                range
                tooltipVisible={false}
                defaultValue={[1, 100]}
                onChange={onChange}
            />
            <div className={styles.btnArea}>
                <p >
                    <span className={styles.amount}>${price.range[0]} - ${price.range[1]}</span>
                </p>
                <button className={styles.btn} onClick={() => { handleFilter() }}>Filter</button>
            </div>
        </div >
    )
}