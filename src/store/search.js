const initialState = {
    search: [],
    search_text: "",
    is_fetching: true
}

export const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_SEARCH":
            return {
                ...state,
                search: action.payload
            }

        case "SET_SEARCH_FETCHING":
            return {
                ...state,
                is_fetching: action.payload
            }

        case "SET_SEARCH_TEXT":
            return {
                ...state,
                search_text: action.payload
            }

        default:
            return state
    }
}