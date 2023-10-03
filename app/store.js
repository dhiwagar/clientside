import { combineReducers,configureStore} from "@reduxjs/toolkit";
import  resturantReducer from "../slices/resturantslice";
import basketReducer from "../slices/basketSlice";


const reducer = combineReducers({
 
    restaurant: resturantReducer,
    basket:basketReducer
  });
  
  export const store = configureStore({
    reducer,
  });
  