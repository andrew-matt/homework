import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h1/Message.module.css";
import styles from "../h11/common/c7-SuperRange/SuperRange.module.css";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onSuperDoubleRangeChangeHandler = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    return (
        <div>
            <hr className={s.line}/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={styles.range_div}>
                <span className={styles.left_span}>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div className={styles.range_div}>
                <span className={styles.left_span}>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    value={[value1, value2]}
                    onChangeRange={onSuperDoubleRangeChangeHandler}
                />
                {/*<RangeSlider/>*/}
                <span className={styles.right_span}>{value2}</span>
            </div>

            <hr className={s.line}/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr className={s.line}/>
        </div>
    )
}

export default HW11
