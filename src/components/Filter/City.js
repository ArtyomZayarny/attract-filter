import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
//import { cities } from '../../data/city'
import { Locations } from '../../Locations';
import styles from './City.module.css'

const { Option } = Select;

export default function City(props) {

    const [data, setData] = useState({
        name: '',
        id: null,
        cities: [],
    })

    useEffect(() => {
        if (data.cities.length === 0) {
            setData({ ...data, cities: Locations })
        }
        if (data.cities.length > 0 && data.name === '') {
            const defaultCity = data.cities[0];
            const { name, id } = { ...defaultCity }
            setData({ ...data, name, id })
        }

    }, [data.cities, data.name])

    const handleChange = (value, obj, ...arg) => {
        setData({ ...data, name: value, id: obj.id })
    }
    return (
        <div className={styles.city}>
            <h3>City</h3>
            { data.id &&
                <Select defaultValue={data.name} className={styles.select} onChange={handleChange}>
                    {data.cities.map(city => <Option key={city.id} value={city.name} id={city.id} ><p>{city.name}</p></Option>)}
                </Select>}
        </div >
    )
}