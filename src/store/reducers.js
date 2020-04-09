import { combineReducers } from "redux";

import  {CarouselReducer} from "./carousel"
import  {UpcomingReducer} from "./upcoming"
import  {PopularReducer} from "./popular"
import  {TopReducer} from "./top"
import  {SearchReducer} from "./search"

export default combineReducers({
    CarouselReducer,
    UpcomingReducer,
    PopularReducer,
    TopReducer,
    SearchReducer
})