import React from 'react';
function Home(props){
    return (
        <div>
            <img className= "food-pic" src={props.images.akami} alt="sorry"/>
        </div>
    )

}
export default Home;