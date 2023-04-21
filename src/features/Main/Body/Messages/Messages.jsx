import Messages_comps from "./Messages_comps";
import './Messages.css';
import Chat from "./Chat";
import { useSelector, useDispatch } from "react-redux";
import { combinedActions } from "../../../../Stores/ToggleMsgSlice";

function Messages(){
    const msg = useSelector((state) => state.PeopleData);
    const msgComps = msg.value;
    const ToggleChat = useSelector((state) => state.ToggleChat);
    const ToggleArrow = useSelector ( (state) => state.ToggleMsg);
    const isChat = ToggleChat.value.isChat;
    const isUp = ToggleArrow.value.arrow;
    const dispatch = useDispatch();

    return(

        <>

            {isChat?(
                <>
                    <Chat/>
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
                        msgComps.map((obj) => {
                            return <Messages_comps url={obj.url} img_url={obj.img_url} profile_name={obj.profile_name} profile_id={obj.profile_id} time={obj.time} msgs={obj.msgs} />
                        })
                    }
                </>
            )}

        </>
    )

}

export default Messages;