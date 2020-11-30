import Action from './action' 

const initialState = {
    items: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Action.CREATE_NEW_ITEM:
        console.log('Creating new item... ')
        console.log(payload)
        return { ...state, items: [...state.items, payload] }

    default:
        return state
    }
}
