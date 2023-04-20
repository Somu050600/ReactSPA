import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {
        msgs : false,
        arrow : false,
    },
    status: 'idle',
};

export const ToggleMsgSlice = createSlice({
    name : 'ToggleMsgSlice',
    initialState, 
    reducers: {
        combinedActions : (state) => {
                state.value.msgs = !state.value.msgs;
                state.value.arrow = !state.value.arrow;
        }
    },
});
export const { combinedActions } = ToggleMsgSlice.actions;

export default ToggleMsgSlice.reducer