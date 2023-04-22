import "./Messages_comps.css";
import { useDispatch } from "react-redux";
import{ ToggleChatCombiner } from "../../../../Stores/ToggleChatSlice"


function Messages_comps(props){
    const dispatch = useDispatch();
    const profile = {
        profile_id: props.profile_id,
        profile_name : props.profile_name,
    };


    const scrollAndChat = (obj) => {

        dispatch(ToggleChatCombiner(obj));

        setTimeout(() => {
            let element = document.getElementById("scroll_to_1");
            element.scrollIntoView();
        }, 1);
        // // setTimeout(()=> {
        // // }, 1);
    }
    
    return(
        <>
            
                <div class="message_div" onClick={() => {scrollAndChat(profile)}}>
                    <div>
                    <img id="profile_photo" src={process.env.PUBLIC_URL + props.img_url} alt={process.env.PUBLIC_URL + "/images/Messages/profile_photos/default_img.png"} width="45px" height="45px" />
                    </div>
                    <div class="profile_chat">
                        <div class="pnit" >
                            <span id="profile_name">{props.profile_name}</span>
                            <span id="profile_id">@{props.profile_id} . </span>
                            <time>{props.time}</time>
                        </div>
                        <div class="">
                        <span>{props.msgs.at(-1)}</span>
                        </div>
                    </div>
                </div>
            
        </>
    )
}
export default Messages_comps;