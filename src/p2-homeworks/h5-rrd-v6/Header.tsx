import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './HW5.module.css'

const image = <img src={'https://i0.wp.com/www.pnglib.com/wp-content/uploads/2020/08/grey-menu-icon_5f34586f4553a.png?w=2000&ssl=1'} alt={'nav-menu'} width={25} height={25} />

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link}>junior+</NavLink>
            <div className={s.block}>{image}</div>
        </div>
    )
}

export default Header
