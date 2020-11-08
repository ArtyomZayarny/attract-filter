import React from 'react';
import { Select } from 'antd';
import { cities } from '../../data/city'
import styles from './City.module.css'

const { Option } = Select;

export default function City(props) {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    return (
        <div className={styles.city}>
            <h3>City</h3>
            <Select defaultValue="London" className={styles.select} onChange={handleChange}>
                {cities.map(city => <Option key={city.id} value={city.id}><p>{city.name}</p></Option>)}
            </Select>
        </div>
    )
}