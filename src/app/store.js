import { configureStore } from '@reduxjs/toolkit';
import PeopleDataReducer from '../Stores/PeopleDataSlice';
import ToggleMsgReducer from '../Stores/ToggleMsgSlice';
import LeftDataSlice from '../Stores/LeftDataSlice';
import ToggleChatSlice  from '../Stores/ToggleChatSlice';

export const store = configureStore({
  reducer: {
    PeopleData: PeopleDataReducer,
    ToggleMsg: ToggleMsgReducer,
    LeftData: LeftDataSlice,
    ToggleChat: ToggleChatSlice,
  },
});
