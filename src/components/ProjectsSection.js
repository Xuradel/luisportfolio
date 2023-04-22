const ProjectsSection = () => {
    return(
        <div id="projects-section" className="projectContainer">
            <h1 id="projects-section" className="projectTitle"><span className="gold">My</span> Work</h1>
        <div className="projectGrid">
            <div className="projectGridItem">
                <div className="projectCard">
                <img src={require("../images/photo1.jpg")} alt="coffee" className="projectCardImg"></img>
                <div className="projectCardContent">
                    <h1 className="projectCardHeader">Organic Coffee Shop</h1>
                    <p className="projectCardText">Landing page for the Organic Coffee Shop, 
                    made with HTML5, CSS using a combination of flex and grid.</p>
                    <button className="projectCardButton">
                    <a href="https://xuradel.github.io/cafe/">Live Demo <span>&rarr;</span></a>
                    </button>
                </div>
                </div>
            </div>
            <div className="projectGridItem">
                <div className="projectCard">
                <img src={require("../images/photo2.jpg")} alt="restaurant" className="projectCardImg"></img>
                <div className="projectCardContent">
                    <h1 className="projectCardHeader">Little Lemon Restaurant</h1>
                    <p className="projectCardText">Landing page for the Little Lemon Restaurant, 
                    made with HTML5, CSS using flexbox.</p>
                    <button className="projectCardButton">
                    <a href="https://xuradel.github.io/lemon/">Live Demo <span>&rarr;</span></a>
                    </button>
                </div>
                </div>
            </div>
            <div className="projectGridItem">
                <div className="projectCard">
                <img src={require("../images/photo3.jpg")} alt="wheather" className="projectCardImg"></img>
                <div className="projectCardContent">
                    <h1 className="projectCardHeader">Wheather App</h1>
                    <p className="projectCardText">Coming Soon.</p>
                    <button className="projectCardButton">
                        <a href="">Live Demo <span>&rarr;</span></a>
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