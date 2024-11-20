import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state over here
            // console.log('add');
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearItem: (state) => {

            //? RTK said that either mutating the existing state or return a new state
            //? all options are ok
            //? in these below 2 option you are mutating the state
            state.items.length = 0;
            // state.items = [];
            //? in this one you are replacing the state by returning a new state []
            // return {items : []};


            //? IMP : If you do normal console log of state, it will show you some proxy object
            // console.log("state without current method - ", state);

            //? IMP : To show the actuakk value of state you have to use current() which comes from "@reduxjs/toolkit"
            // console.log('state with current method - ', current(state));




        },
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;