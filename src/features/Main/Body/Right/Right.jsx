import "./Right.css";

function Right(){

    return(

        <div class="">
        
        <div class="search-container">
            <img src={process.env.PUBLIC_URL + "/images/Right_SVGs/Search.svg"} alt="" height="20px" width="20px" />
            <input name="myInput" type="text" id="search" placeholder="Search Twitter" />
        </div>

        <div class="Trending">
        <h2>What's Happening</h2>
        </div>
        
        <div class="follow_suggestions">
        <h2>Who To Follow</h2>
        </div>

        </div>
    )

}

export default Right;