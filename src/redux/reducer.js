import Action from './action' 

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Action.CREATE_NEW_ITEM:
        return { ...state, ...payload }

    default:
        return state
    }
}
