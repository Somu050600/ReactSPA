import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : false,
    status: 'idle',
};

export const ToggleMsgSlice = createSlice({
    name : 'ToggleMsgSlice',
    initialState, 
    reducers: {
        msgsToggle : (state) => {
            state.value = !state.value;
        }
    }
});
export const { msgsToggle } = ToggleMsgSlice.actions;

export default ToggleMsgSlice.reducer;