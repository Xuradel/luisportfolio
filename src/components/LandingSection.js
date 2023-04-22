import React from "react";


const LandingSection = () => {
    return (
        <div id="landingPage" className="container">
            <div className="text">
                <h1 className="greeting">Hello There! I'm<span className="name"> Luis</span></h1><br/>
                <p className="bio">I am a Front End Developer specialised in <span className="gold"> React.</span></p>
                <p className="bio">Based in San Jose, <span className="gold"> Costa Rica.</span></p>
            </div>
            
            <img src={require("../images/avatar.png")} alt="avatarLogo" className="avatar"></img>
            
        </div>
    )
}


export default LandingSection;

