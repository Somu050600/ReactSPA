import './Chat.css';
import { ToggleChat } from '../../../../Stores/ToggleChatSlice';
import { useSelector, useDispatch } from 'react-redux';
import { combinedActions } from "../../../../Stores/ToggleMsgSlice";
import { addMsg } from '../../../../Stores/PeopleDataSlice';
import { useState } from 'react';

function Chat() {

    const dispatch = useDispatch();
    const AllChats = useSelector((state) => state.PeopleData);
    const ToggleArrow = useSelector ( (state) => state.ToggleMsg);
    const Profile = useSelector ((state) => state.ToggleChat);
    const profile_id = Profile.value.currId;
    const profile_name = Profile.value.currName;
    const isUp = ToggleArrow.value.arrow;
    const [string, setString] = useState('');

    let idx = AllChats.value.findIndex( (obj)=>{
        return    obj.profile_id === profile_id;
    })

    let finalChat = AllChats.value[idx].msgs;

    const AddMsg = {
        profile_id : profile_id,
        string : string,
    }

    const helperfun = (obj) => {
        setString(obj);
    }

    return (
        
        <div class="chat" >
            <div class="messages_title" >
                <div id='back_arrow' >
                    <img onClick={dispatch(ToggleChat())}  src={process.env.PUBLIC_URL + '/images/Messages/back_arrow.svg'} alt="" width="20px" height="20px" />
                </div>
                <div id='Chat_header' onClick={dispatch(combinedActions())}>
                    <span id='profile_name'>{profile_name}</span>
                    <span id='profile_id'>@{profile_id}</span>
                </div>
                <div onClick={dispatch(combinedActions())}>
                    <img className={isUp ? 'arrow1': 'arrow2' } src={process.env.PUBLIC_URL + '/images/Messages/double-up-arrow.svg'} alt="" width="20px" height="20px" />
                </div>
            </div>
                <div class="message_body">
                    <img src={process.env.PUBLIC_URL + '/images/Messages/media.svg'} alt="" width="200px" height="200px" />
                    <img src={process.env.PUBLIC_URL + '/images/Messages/GIF.svg'} alt="" width="200px" height="200px" />
                    <img src={process.env.PUBLIC_URL + '/images/Messages/emoji.svg'} alt="" width="200px" height="200px" />
                    {
                        
                        finalChat.map ((obj)=>{
                            return (
                                <div>{obj}</div>
                            )
                        })
                    }
                </div>
            <div id="forscroll"></div>
            <div class="message_input_bg">
                <div class="message_input" >
                        <img src={process.env.PUBLIC_URL + '/images/Messages/media.svg'} alt="" width="20px" height="20px" />
                        <img src={process.env.PUBLIC_URL + '/images/Messages/GIF.svg'} alt="" width="20px" height="20px" />
                        <img src={process.env.PUBLIC_URL + '/images/Messages/emoji.svg'} alt="" width="20px" height="20px" />
                        <input type="text" size="30" onChange={(obj) => {helperfun(obj.target.value)}} placeholder="Start a new message" />
                        <button type="button" onClick={dispatch(addMsg(AddMsg))} ><img  src={process.env.PUBLIC_URL + '/images/Messages/send.svg'} alt="" width="20px" height="20px" /></button>
                </div>
            </div>
        </div>

    )
}

export default Chat;