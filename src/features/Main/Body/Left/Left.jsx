import Left_comps from "./Left_comps";
import './Left.css';
import { useSelector } from "react-redux";


function Left(){
    const LeftData = useSelector((state) => state.LeftData);
    const leftComps = LeftData.value;

    return(

        <div class="Main_div">
            <div class="logo">
                <a href="" class="main_a">
                <img src={process.env.PUBLIC_URL + '/images/Left_SVGs/twitter.svg'} height="30px" width="30px" alt="" />
                </a>
            </div>
            {
                leftComps.map( (obj)=> {
                        return(
                            <Left_comps url={obj.url} img_url={obj.img_url} title={obj.title} />
                        )
                    }
                )
            }
            <a href="" class="tweet">
                <div class="tweet_button">
                    <span>Tweet</span>
                </div>
            </a>
            <a href="" class="profile">
                <div class="profile_div">
                    <img src={process.env.PUBLIC_URL + `/images/Left_SVGs/profile_img.png`} alt="" class="profile_img" width="40px" height="40px" />
                    <div id="profile">
                    <span id="profile_name">Somu</span>
                    <span id="profile_id">@Somu123</span>
                    </div>
                    <img src={process.env.PUBLIC_URL + `/images/Left_SVGs/Profile_more.svg`} alt="" class="profile_more" width="25px" height="25px" />
                </div>
            </a>
        </div>
    )
}

export default Left;