import Action from './action'

const initialState = {
    items: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case Action.CREATE_NEW_ITEM:
            return { ...state, items: [...state.items, payload] }

        case Action.MESSAGE_LOADED:
            return { ...state, items: [...payload] }

        default:
            return state
    }
}
