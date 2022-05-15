type ActionType = LoadingActionType;

export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        default: return state
    }
}

type LoadingActionType = {
    type: 'LOADING',
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {
        type: 'LOADING',
        isLoading: isLoading
    }
} // fix any