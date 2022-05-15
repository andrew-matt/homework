import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "../h1/Message.module.css";
import styles from './HW10.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(!loading))
        console.log('loading...')
        setTimeout(() => dispatch(loadingAC(loading)), 2000)
    };

    return (
        <div>
            <hr className={s.line}/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={styles.loader}></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr className={s.line}/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr className={s.line}/>
        </div>
    )
}

export default HW10
