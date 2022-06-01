type InitStateType = {
    themes: Array<string>
    currentTheme: string
}

type changeThemeCType = {
    type: 'CHANGE THEME',
    theme: string
}

type ActionType = changeThemeCType

const initState: InitStateType = {
    themes: ['dark', 'red', 'some', 'purple', 'steel'],
    currentTheme: 'dark'
};

export const themeReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE THEME": {
            return {
                ...state,
                currentTheme: action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): changeThemeCType => {
    return {
        type: 'CHANGE THEME',
        theme: theme
    }
}; // fix any