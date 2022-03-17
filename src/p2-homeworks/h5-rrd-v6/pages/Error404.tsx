import React from 'react'
import s from '../HW5.module.css'

function Error404() {
    return (
        <div className={s.errorPage}>
            <div className={s.errNumber}>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
