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
        <div className={styles.price}>
            <h3>Price</h3>
            <Slider className={styles.slider} range defaultValue={[20, 50]}
                onChange={onChange}
                onAfterChange={onAfterChange} />
            <div className={styles.btnArea}>
                <p >
                    <span className={styles.amount}>$35 - $250</span>
                </p>
                <button className={styles.btn}>Filter</button>
            </div>

        </div>
    )
}