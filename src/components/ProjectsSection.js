const ProjectsSection = () => {
    return(
        <div id="projects-section" className="projectContainer">
            <h1 id="projects-section" className="projectTitle"><span className="gold">My</span> Work</h1>
        <div className="projectGrid">
            <div className="projectGridItem">
                <div className="projectCard">
                <img src={require("../images/lolPage.png")} alt="coffee" className="projectCardImg"></img>
                <div className="projectCardContent">
                    <h1 className="projectCardHeader">Esports scrims analysis</h1>
                    <p className="projectCardText">Site for our scrim tracker App specialized for the
                    online competitive game "League of Legends"</p>
                    <button className="projectCardButton">
                    <a href="https://xuradel.github.io/scrim-tracker/" target="_blank">Live Demo <span>&rarr;</span></a>
                    </button>
                </div>
                </div>
            </div>
            <div className="projectGridItem">
                <div className="projectCard">
                <img src={require("../images/vetPage.png")} alt="restaurant" className="projectCardImg"></img>
                <div className="projectCardContent">
                    <h1 className="projectCardHeader">Veterinary website</h1>
                    <p className="projectCardText">Website made for a client's veterinary, made with React, hooks,
                    linking/routing, and web design.</p>
                    <button className="projectCardButton">
                    <a href="https://xuradel.github.io/clinicasergiobarrantes" target="_blank">Live Demo <span>&rarr;</span></a>
                    </button>
                </div>
                </div>
            </div>
            <div className="projectGridItem">
                <div className="projectCard">
                <img src={require("../images/photo3.jpg")} alt="wheather" className="projectCardImg"></img>
                <div className="projectCardContent">
                    <h1 className="projectCardHeader">Wheather App</h1>
                    <p className="projectCardText">Interactive and dynamic weather App using React hooks such
                    as state, effect, and using openweathermap API.</p>
                    <button className="projectCardButton">
                        <a href="https://xuradel.github.io/weather-app/" target="_blank">Live Demo <span>&rarr;</span></a>
                    </button>
                </div>
                </div>
            </div>
            <div className="projectGridItem">
                <div className="projectCard">
                <img src={require("../images/photo4.jpg")} alt="crypto" className="projectCardImg"></img>
                <div className="projectCardContent">
                    <h1 className="projectCardHeader">Crypto Currency App</h1>
                    <p className="projectCardText">Coming Soon.</p>
                    <button className="projectCardButton">
                    <a href="">Live Demo <span>&rarr;</span></a>
                    </button>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectsSection;