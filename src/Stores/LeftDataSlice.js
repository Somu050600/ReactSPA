import { createSlice } from "@reduxjs/toolkit";
const initialState = {
        value : [
            {"url":"", "img_url":"/images/Left_SVGs/Home.svg", "title": "Home"},
            {"url":"", "img_url":"/images/Left_SVGs/Explore.svg", "title": "Explore"},
            {"url":"", "img_url":"/images/Left_SVGs/Notifications.svg", "title": "Notifications"},
            {"url":"", "img_url":"/images/Left_SVGs/Messages.svg", "title": "Messages"},
            {"url":"", "img_url":"/images/Left_SVGs/Bookmarks.svg", "title": "Bookmarks"},
            {"url":"", "img_url":"/images/Left_SVGs/Twitter_Blue.svg", "title": "Twitter Blue"},
            {"url":"", "img_url":"/images/Left_SVGs/Profile.svg", "title": "Profile"},
            {"url":"", "img_url":"/images/Left_SVGs/More.svg", "title": "More"}
            
        ],
        status: 'idle',
};

export const LeftDataSlice = createSlice ({
    name : 'LeftDataSlice',
    initialState,
    reducers : {}
})

export default LeftDataSlice.reducer