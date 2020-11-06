import React from 'react';
import { Select } from 'antd';
import { cities } from '../../data/city'

const { Option } = Select;

export default function City(props) {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    return (
        <>
            <h3>City</h3>
            <Select defaultValue="London" style={{ width: 120 }} onChange={handleChange}>
                {cities.map(city => <Option key={city.id} value={city.id}>{city.name}</Option>)}
            </Select>
        </>
    )
}