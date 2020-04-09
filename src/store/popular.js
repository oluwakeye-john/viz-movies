const initialState = {
    popular: [],
    popular_page: 1,
    is_fetching: true
}

export const PopularReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_POPULAR":
            return {
                ...state,
                popular: action.payload
            }

        case "SET_POPULAR_PAGE":
            return {
                ...state,
                popular_page: action.payload
            }

        case "SET_POPULAR_FETCHING":
            return {
                ...state,
                is_fetching: action.payload
            }

        default:
            return state
    }
}