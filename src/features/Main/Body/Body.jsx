import Left from "./Left/Left";
import Middle from "./Middle/Middle";
import Right from "./Right/Right";
import Messgaes from "./Messages/Messages";
import "./Body.css";
import { useSelector } from "react-redux";

function Body(props){

    const ToggleMsg = useSelector((state) => state.ToggleMsgSlice)
    const visible = ToggleMsg.value.msgs;

    return(

        <div class="body">

            <div class="left">
                <Left />
            </div>
            <div class="middle">
                <Middle />
            </div>
            <div class="right">
                <Right />
            </div>
            <div className={visible ? 'messages1': 'messages2'} >
                <Messgaes  />
            </div>
        </div>
    )

}

export default Body;