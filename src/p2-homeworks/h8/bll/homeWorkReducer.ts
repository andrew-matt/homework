import {UserType} from "../HW8";

type ActionType = {
    type: 'sortUp' | 'sortDown' | 'check'
    payload: any

}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    let stateCopy = state.map(el => ({...el}))
    switch (action.type) {
        case "sortUp":
            return stateCopy.sort((a, b) => a.name > b.name ? 1 : -1)
        case "sortDown":
            return stateCopy.sort((a, b) => a.name < b.name ? 1 : -1)
        case 'check': {
            return state.filter(m => m.age > 18).sort((a, b) => a.age - b.age)
        }
        default:
            return state
    }
}
