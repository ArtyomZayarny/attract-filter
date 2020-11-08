import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

Card.propTypes = {
    id: PropTypes.number,
    city: PropTypes.string,
    cityId: PropTypes.number,
    pic: PropTypes.string,
    categoty: PropTypes.string,
    categoryId: PropTypes.number,
    price: PropTypes.number
}

Card.defultProps = {
    id: Date.now(),
    city: '',
    pic: '/static/media/pic_1.png',
    title: 'Affiliate Marketing - A Beginner\'s Guide to Earning Online',
    category: 'Architecture',
    price: 115
}

export default function Card(props) {
    const { id, city, cityId, name, pic, category, categoryId, price } = { ...props };
    const [data, setData] = useState({
        id: null,
        city: '',
        cityId: null,
        name: '',
        pic: '',
        category: '',
        categoryId: null,
        price: null,
    })





    useEffect(() => {
        if (!data.id) {
            setData({ ...data, id, city, cityId, name, pic, category, categoryId, price })
        }

    }, []);


    return (
        <div className={styles.card}>
            <div className={styles.back} style={{ height: 180, backgroundImage: `url(${data.pic})` }}>
                <div className={styles.inner}>
                    <span className={styles.location}>{data.city}</span>
                </div>
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{data.name}</h4>
                <div className={styles.priceArea}>
                    <span className={styles.category}>{data.category}</span>
                    <span className={styles.price}>${data.price}</span>
                </div>
            </div>
        </div>
    )
}
