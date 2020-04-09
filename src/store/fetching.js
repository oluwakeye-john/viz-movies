const initialState = {
    is_fetching: true
}

export const FetchingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FETCHING":
            return {
                ...state,
                is_fetching: action.payload
            }

        default:
            return state
    }
}