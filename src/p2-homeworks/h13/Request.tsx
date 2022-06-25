import React, {ChangeEvent, useState} from 'react';
import s from './HW13.module.css';
import {requestsAPI} from './requestsAPI';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

export const Request = () => {

    const [checked, setChecked] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const checkedValue = e.currentTarget.checked;
        console.log(e.currentTarget.checked);
        setChecked(checkedValue);
    };

    const onClickHandler = () => {
        requestsAPI.createStatus(checked)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            });
    };

    return (
        <div className={s.container}>
            <div>
                <input
                    type="checkbox"
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <SuperButton onClick={onClickHandler}>
                    Send request
                </SuperButton>
            </div>
        </div>
    );
};