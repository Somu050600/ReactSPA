import './Left_comps.css';

function Left_comps(props){

    return(

        <>
        <a href={props.url}>
                <div class="Left_comps">
                    <img src={process.env.PUBLIC_URL + props.img_url} height="25px" width="25px" alt="" />
                    <span>{props.title}</span>
                </div>
            </a>
        </>
    )

}

export default Left_comps;