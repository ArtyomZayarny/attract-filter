import Card from '../components/Card/'
import React, { useState, useEffect, useContext } from 'react';
import { getName } from '../functions';
import { Locations } from '../Locations';
import { Categories } from '../Categories';
import { cards } from '../data/data';
import { AppContext } from '../AppContext'
import styles from './Content.module.css';

export default function Content(props) {

    const appContext = useContext(AppContext);
    const filter = appContext.filter;
    const setFilter = appContext.setFilter;
    const [data, setData] = useState({
        cities: [],
        categories: [],
        items: [],
        loading: false
    })

    const normalizeData = (obj) => {
        const result = {}
        result.id = obj.hasOwnProperty('id') ? obj.id : props.id;

        result.cityId = obj.hasOwnProperty('city') ? obj.city : null;
        result.name = obj.hasOwnProperty('name') ? obj.name : '';
        result.categoryId = obj.hasOwnProperty('category') ? obj.category : null;
        //Fetching location name and catgory name by id
        result.city = result.cityId ? getName(result.cityId, data.cities) : '';
        result.category = result.categoryId ? getName(result.categoryId, data.categories) : '';

        result.pic = obj.hasOwnProperty('pic') ? obj.pic : '';

        result.price = obj.hasOwnProperty('price') ? obj.price : null;
        return result;
    }

    const inRange = (x, [min, max]) => {
        if (x >= min && x <= max) {
            return true
        }
        return false
    }

    useEffect(() => {
        let category = filter.category;
        let city = filter.city;
        let price = filter.price;

        if (data.cities.length === 0) {
            setData({ ...data, cities: Locations, loading: true })
        }
        if (data.categories.length === 0) {
            setData({ ...data, categories: Categories, loading: true });
        }

        if (data.cities.length > 0 && data.categories.length > 0) {
            if (data.items.length === 0) {
                const normalizedData = cards.map(card => normalizeData(card));
                setData({ ...data, items: normalizedData, loading: false });
            } else {
                if (filter.filtering) {
                    let filteredCards = cards.filter((item) => {
                        if (category.length > 0) {
                            if (category.includes(item.category)) {

                                if (inRange(item.price, price) || item.city === city) {
                                    return item
                                } else {
                                    return item
                                }
                            }
                        }

                        if (item.city === city) {
                            if (inRange(item.price, price)) {
                                return item
                            }
                        }

                        if (city === null && category.length === 0) {
                            if (inRange(item.price, price)) {
                                return item
                            } else {
                                return item
                            }
                        }
                    });
                    const normalizedData = filteredCards.map(card => normalizeData(card));
                    setData({ ...data, items: normalizedData, loading: false });
                }
            }
        }

        if (data.loading === false) {
            setFilter({ ...filter, filtering: false });
        }

    }, [data.cities, data.categories, data.loading, filter.filtering]);


    return (
        <div className={styles.content}>
            { data.loading ? <h2>Loading....</h2> : data.items.length > 0 && data.items.map(item => <Card key={item.id} {...item} />)}
        </div>
    )
}
