import Messages_comps from "./Messages_comps";
import './Messages.css';
import Chat from "./Chat";
import { useSelector, useDispatch } from "react-redux";
import { combinedActions } from "../../../../Stores/ToggleMsgSlice";

function Messages(props){
    const msg = useSelector((state) => state.PeopleData);
    const ToggleChat = useSelector((state) => state.ToggleChat);
    const ToggleArrow = useSelector ( (state) => state.ToggleMsg);
    const isChat = ToggleChat.value.isChat;
    const currId = ToggleChat.value.currId;
    const currName = ToggleChat.value.currName;
    const isUp = ToggleArrow.value.arrow;
    const dispatch = useDispatch();
    return(

        <>

            {isChat?(
                <>
                    <Chat profile_id={currId} profile_name={currName} />
                </>
                ):(
                <>
                    <div class="messages_title" onClick={dispatch(combinedActions())} >
                <       span>Messages</span>
                        <img src={process.env.PUBLIC_URL + '/images/Messages/Message.svg'} alt="" width="20px" height="20px" />
                        <img className={isUp ? 'arrow2': 'arrow1' } src={process.env.PUBLIC_URL + '/images/Messages/double-up-arrow.svg'} alt="" width="20px" height="20px" />
                    </div> 

                    <div class="message_requests">
                        <img src={process.env.PUBLIC_URL + '/images/Messages/Message_requests.svg'} alt="" width="25px" height="25px" />
                        <span>Message requests</span>
                    </div>
                    {
                        msg.map( (obj)=> {
                                return(
                                 <Messages_comps url={obj.url} img_url={obj.img_url} profile_name={obj.profile_name} profile_id={obj.profile_id} time={obj.time} msgs={obj.msgs} />
                             )
                            }
                        )
                    }
                </>
            )}

        </>
    )

}

export default Messages;