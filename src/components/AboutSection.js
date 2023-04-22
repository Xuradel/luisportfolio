import React from 'react'
import { useMediaQuery } from 'react-responsive'

function aboutPC() {
    return (
        <div className="AboutContainer">
            <h1 className="About1">About<span className="About2"> Me</span></h1>
            <div className="AboutTextPC">
                <img src={require("../images/about.jpg")} alt="aboutLogo" className="AboutImage"></img>
                <p className="AboutBio">I'm a Front End Developer with passion for building beautiful, creative
                    and user friendly websites, I'm
                    very excited to put my skills to use in a professional setting. <br /><br />
                    I'm confident that I can be a valuable asset to any
                    web development team in creating beautiful and engaging digital experiences.<br/><br/>
                    I will love to hear from you. Whether it's a project, job opportunity, or just chat. 
                    Feel free to contact me.
                </p>
            </div>
            
        </div>
    )
}

function aboutMobile(){
    return(
        <div className="AboutContainerMobile">
        <h1 className="About1">About<span className="About2"> Me</span></h1>
        <img src={require("../images/about.jpg")} alt="aboutLogo" className="AboutImageMobile"></img>
        <div className="AboutTextMobile">
            <p className="AboutBio">I'm a Front End Developer with passion for building beautiful, creative
                and user friendly websites, I have a strong understanding of Front End Development and I'm
                very motivated to put my skills to use in a professional setting. <br /><br />
                I'm confident that I can be a valuable asset to any
                web development team in creating beautiful and engaging digital experiences.<br/><br/>
                I will love to hear from you. Whether it's a project, job opportunity, or just chat. 
                    Feel free to contact me.
            </p>
        </div>
    </div>
    )
}

const AboutSection = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1080px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1080px)' })
    return <div id="about-section">
        {isDesktopOrLaptop && aboutPC()}
        {isTabletOrMobile && aboutMobile()}
    </div>
}

export default AboutSection;