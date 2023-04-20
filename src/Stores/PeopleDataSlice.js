import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:
        [
            {url:"",img_url:"/images/Messages/profile_photos/Bharath_sai.jpg", profile_name:"Bharat Sai", profile_id: "Bharath2731", last_msg:"", time:"10:00", msgs:[
                "Hi", "How are you?"
            ],},
            {url:"", img_url:"/images/Messages/profile_photos/budda.jpg", profile_name: "Budda", profile_id: "budda_.1", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ]},
            {url:"", img_url:"/images/Messages/profile_photos/bharath.jpg", profile_name: "Bharath", profile_id: "Style_roomie", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
            {url:"", img_url:"/images/Messages/profile_photos/suri.jpg", profile_name: "Sureedu", profile_id: "Style_is_easy", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
            {url:"", img_url:"/images/Messages/profile_photos/akhilesh.jpg", profile_name: "Akhilesh", profile_id: "Ekhilesh", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
            {url:"", img_url:"/images/Messages/profile_photos/abhilash.jpg", profile_name: "Abhilash Bandari", profile_id: "abhilash_b", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
            {url:"", img_url:"/images/Messages/profile_photos/adith.jpg", profile_name: "Adith Old", profile_id: "adith_aptha", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
            {url:"", img_url:"/images/Messages/profile_photos/nithin.jpg", profile_name: "Nithin", profile_id: "Paluchuri", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
            {url:"", img_url:"/images/Messages/profile_photos/gokul.jpg", profile_name: "Gokul Javvaji", profile_id: "gokul_j", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
            {url:"", img_url:"/images/Messages/profile_photos/sharan.jpg", profile_name: "sharan T", profile_id: "Thummala_s", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
            {url:"", img_url:"/images/Messages/profile_photos/akhil.jpg", profile_name: "akhil", profile_id: "akhil", time : "10:00", last_msg:"", msgs:[
                "Hi", "How are you?"
            ],}, 
        ],
    status: 'idle',
  };

export const PeopleDataSlice = createSlice({
    name: 'peopleDataSlice',
    initialState,
    reducers : {
        addMsg : (state, action) => {
            let idx = state.value.findIndex( (obj)=>{
                return    obj.profile_id === action.payload.profile_id;
            })
            state.value[idx].msgs = [...state.value[idx].msgs, action.payload.String];
        },
    },
});

export const { addMsg } = PeopleDataSlice.actions;

export default PeopleDataSlice.reducer
