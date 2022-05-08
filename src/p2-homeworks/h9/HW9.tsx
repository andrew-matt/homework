import React from 'react'
import Clock from './Clock'
import s from "../h1/Message.module.css";

function HW9() {
    return (
        <div>
            <hr className={s.line}/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>

            <hr className={s.line}/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr className={s.line}/>
        </div>
    )
}

export default HW9
