import "./Messages_comps.css";
import { useSelector, useDispatch } from "react-redux";
import{ ToggleChatCombiner } from "../../../../Stores/ToggleChatSlice"


function Messages_comps(props){
    const dispatch = useDispatch();
    const profile = {
        profile_id: props.profile_id,
        profile_name : props.profile_name,
    };

    return(
        <>
            
                <div class="message_div" onClick={dispatch(ToggleChatCombiner(profile))}>
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