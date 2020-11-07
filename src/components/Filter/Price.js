import React from 'react';
import { Slider } from 'antd';
import styles from './Price.module.css'

export default function Price(props) {
    const onChange = (value) => {
        console.log('onChange: ', value);
    }

    const onAfterChange = (value) => {
        console.log('onAfterChange: ', value);
    }


    return (
        <>
            <h3>Price</h3>
            <Slider style={{ width: 120 }} range defaultValue={[20, 50]}
                onChange={onChange}
                onAfterChange={onAfterChange} />
            <div>
                <p >
                    <span className={styles.price}>$35 - $250</span>
                </p>
                <button className={styles.btn}>Filter</button>
            </div>

        </>
    )
}