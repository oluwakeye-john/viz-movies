const initialState = {
    carousel: [],
    is_fetching : true
}

export const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_CAROUSEL":
            return {
                ...state,
                carousel: action.payload

            }
        case "SET_CAROUSEL_FETCHING":
            return {
                ...state,
                is_fetching: action.payload
            }

        default:
            return state
    }
}