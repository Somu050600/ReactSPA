import './Chat.css';
import { ToggleChat } from '../../../../Stores/ToggleChatSlice';
import { useSelector, useDispatch } from 'react-redux';
import { msgsToggle } from "../../../../Stores/ToggleMsgSlice";
import { addMsg } from '../../../../Stores/PeopleDataSlice';
import { useState } from 'react';

function Chat() {

    const dispatch = useDispatch();
    const AllChats = useSelector((state) => state.PeopleData);
    const ToggleArrow = useSelector ( (state) => state.ToggleMsg);
    const Profile = useSelector ((state) => state.ToggleChat);
    const profile_id = Profile.value.currId;
    const profile_name = Profile.value.currName;
    const isUp = ToggleArrow.value;
    const [string, setString] = useState('');

    let idx = AllChats.value.findIndex( (obj)=>{
        return    obj.profile_id === profile_id;
    })
    let finalChat = AllChats.value[idx].msgs;
    let profile_photo_url = AllChats.value[idx].img_url;

    const idAndMsg = {
        id : profile_id,
        str : string,
    }

    const helperfun = (obj) => {
        setString(obj);
    }

    const msgAdding = (obj) => {
        dispatch(addMsg(obj));

        // setTimeout = (() => {
        //     let element = document.getElementById('scroll_to');
        //     element.scrollIntoView();
        // }, 100)
    }

    return (
        
        <div class="chat" >
            <div class="messages_title" >
                <div id='back_arrow' >
                    <img onClick={() => {dispatch(ToggleChat())}}  src={process.env.PUBLIC_URL + '/images/Messages/back_arrow.svg'} alt="" width="20px" height="20px" />
                </div>
                <div id='Chat_header' onClick={() => {dispatch(msgsToggle())}}>
                    <span id='profile_name'>{profile_name}</span>
                    <span id='profile_id'>@{profile_id}</span>
                </div>
                <div onClick={() => {dispatch(msgsToggle())}}>
                    <img className={!isUp ? 'arrow1': 'arrow2' } src={process.env.PUBLIC_URL + '/images/Messages/double-up-arrow.svg'} alt="" width="20px" height="20px" />
                </div>
            </div>
                <div class="message_body">

                    <div className='chat_profile'>
                    <img src={process.env.PUBLIC_URL + profile_photo_url} alt="" width="100px" height="100px" />
                    <span id='profile_name'>{profile_name}</span>
                    <span id='profile_id'>@{profile_id}</span>
                    </div>

                    <div className='chat_body'>
                    {
                        finalChat.map ((obj)=>{
                            return (
                                <span>{obj}</span>
                            )
                        })
                    }
                    </div>
                </div>
            <div id="scroll_to"></div>
            <div class="message_input_bg">
                <div class="message_input" >
                        <img src={process.env.PUBLIC_URL + '/images/Messages/media.svg'} alt="" width="20px" height="20px" />
                        <img src={process.env.PUBLIC_URL + '/images/Messages/GIF.svg'} alt="" width="20px" height="20px" />
                        <img src={process.env.PUBLIC_URL + '/images/Messages/emoji.svg'} alt="" width="20px" height="20px" />
                        <input type="text" size="30" onChange={(obj) => {helperfun(obj.target.value)}} placeholder="Start a new message" />
                        <button type="button" onClick={() => {msgAdding(idAndMsg)}} ><img  src={process.env.PUBLIC_URL + '/images/Messages/send.svg'} alt="" width="20px" height="20px" /></button>
                </div>
            </div>
        </div>

    )
}

export default Chat;