import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from "../h1/Message.module.css";
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const user = {
            _id: v1(),
            name
        }
        setUsers([...users, user]) // need to fix
    }

    return (
        <div>
            <hr className={s.line}/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr className={s.line}/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr className={s.line}/>
        </div>
    )
}

export default HW3
