import { createSlice } from "@reduxjs/toolkit";

const initialState={
    resturant:{
        id:null,
        image:null,
        name:null,
        rating:null,
        address:null,
        short_description:null,
        dishes:null,
        long:null,
        lat:null,
    },
};

export const resturantslice = createSlice({
    name: "restaurant",
    initialState,
    reducers: {
      setRestaurant: (state, action) => {
        state.resturant=action.payload
      },
    },
  })

  export const { setRestaurant } = resturantslice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;

export default resturantslice.reducer;
