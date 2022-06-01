import React from "react";
import s from "./HW12.module.css";
import styles from "../h1/Message.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

function HW12() {

    const dispatch = useDispatch();
    const themes = useSelector<AppStoreType, string[]>(state => state.changeTheme.themes);
    const theme = useSelector<AppStoreType, string>(state => state.changeTheme.currentTheme);

    const changeTheme = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <>
            <div className={s[theme]}>
                <hr className={styles.line}/>
                <span className={s[theme + '-text']}>
                    THEME EXAMPLE
                </span>

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                <hr className={styles.line}/>
            </div>
            <span>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={changeTheme}
                />
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={changeTheme}
                />
            </span>
        </>
    );
}

export default HW12;
