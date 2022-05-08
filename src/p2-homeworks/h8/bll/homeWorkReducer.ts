import {UserType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort":
            let newState = [...state].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            return action.payload === 'up' ? newState : newState.reverse()
        case 'check': {
            return state.filter(m => m.age > action.payload).sort((a, b) => a.age - b.age)
        }
        default:
            return state
    }
}
