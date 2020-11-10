import React, { useEffect, useState, useContext } from 'react';
import { Select } from 'antd';
import { Locations } from '../../Locations';
import styles from './City.module.css';
import { AppContext } from '../../AppContext';
import { getName } from '../../functions';

const { Option } = Select;

const LS = localStorage;

export default function City(props) {

    let filterLS = JSON.parse(LS.getItem('filter'))



    const appContext = useContext(AppContext);
    const filter = appContext.filter;

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
            let cityID = filterLS.city === null ? id : filterLS.city;
            let cityName = getName(cityID, data.cities)
            appContext.setFilter({ ...filter, city: cityID });
            setData({ ...data, name: cityName, id: cityID })

        }

    }, [data.cities, data.name])

    const handleChange = (value, obj, ...arg) => {
        appContext.setFilter({ ...filter, city: obj.id });
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