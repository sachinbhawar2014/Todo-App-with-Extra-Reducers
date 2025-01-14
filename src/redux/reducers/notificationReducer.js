import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";

const initialState = {
    message: "",
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.message = "";
        },
    },
    // extraReducers:{
    //     "todo/add":(state, action)=>{
    //       state.message="Todo is created";
    //     }
    // }
    // extraReducers:(builder)=>{
    //     builder.addCase(todoActions.add, (state, action)=>{
    //         state.message="Todo is created";
    //     })
    // }
    extraReducers: {
        // map objects: [key]: value
        [todoActions.add]: (state, action) => {
            state.message = "Todo is created";
        },
    },
});

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;

export const notificationSelector = (state) => state.notificationReducer.message;
