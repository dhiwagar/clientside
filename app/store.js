import { combineReducers,configureStore} from "@reduxjs/toolkit";
import  resturantreducer from "../slices/Resturantslice";


const reducer = combineReducers({
 
    restaurant: resturantreducer,
  });
  
  export const store = configureStore({
    reducer,
  });
  