const initialState = {
    top: [],
    is_fetching : true
}

export const TopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_TOP":
            return {
                ...state,
                top: action.payload
            }

        case "SET_TOP_FETCHING":
            return {
                ...state,
                is_fetching: action.payload
            }

        default:
            return state
    }
}