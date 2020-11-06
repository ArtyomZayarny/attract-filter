import React from 'react';
import { Slider } from 'antd';

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
                <span>$35</span> - <span>$250</span>
            </div>

        </>
    )
}