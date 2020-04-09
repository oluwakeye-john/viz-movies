const initialState = {
    upcoming: [],
    upcoming_page: 1,
    is_fetching: true
}

export const UpcomingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_UPCOMING":
            return {
                ...state,
                upcoming: action.payload
            }

        case "SET_UPCOMING_PAGE":
            return {
                ...state,
                upcoming_page: action.payload
            }

        case "SET_UPCOMING_FETCHING":
            return {
                ...state,
                is_fetching: action.payload
            }

        default:
            return state
    }
}