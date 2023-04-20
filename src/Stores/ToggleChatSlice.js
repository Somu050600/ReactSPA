import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : {
        currId : '',
        currName :'',
        isChat : false,
    },
    status: 'idle',
};

export const ToggleChatSlice = createSlice({
    name : 'currIdSlice',
    initialState, 
    reducers: {
        ToggleChatCombiner : (state,action) => {
            state.value.currId = action.payload.profile_id;
            state.value.currName = action.payload.profile_name;
            state.value.isChat = !state.value.isChat;
        },
        ToggleChat : (state) => {
            state.value.isChat = !state.value.isChat;
        }
    },

});
export const { ToggleChatCombiner, ToggleChat } = ToggleChatSlice.actions;

export default ToggleChatSlice.reducer