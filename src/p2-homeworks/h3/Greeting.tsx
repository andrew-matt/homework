import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.input + ' ' + (error && s.error)// need to fix with (?:)

    const disabled  = error ? true : false

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && addUser()
    }

    return (
        <div className={s.content}>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
            <button onClick={addUser} className={s.addButton} disabled={disabled}>add</button>
            <span className={s.total}>{totalUsers}</span>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
