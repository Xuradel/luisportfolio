import React from 'react'

const SkillsSection = () => {
    return (
        <div id="skills-section" class="containerCards">
            <div class="skillHeading">
                <h1 className='skillsTitle'><span className='gold'>My</span> Skills</h1>
            </div>
            <div class="row">
                <div class="card">
                    <div class="card-header">
                        <img src={require("../images/frontend.png")} alt="frontLogo" className="frontImage"></img>
                        <h1 className='skillsHeading'>Front End</h1>
                    </div>
                    <div class="card-body">
                        <p>
                            HTML<br />
                            CSS<br />
                            JavaScript<br />
                            React<br />
                            Bootstrap<br />
                            UX/UI Design<br/>
                            Version Control<br/>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img src={require("../images/tools.png")} alt="toolsLogo" className="toolsImage"></img>
                        <h1 className='skillsHeading'>Other</h1>
                    </div>
                    <div class="card-body">
                        <p>
                            C++<br/>
                            C#<br/>
                            Git<br />
                            GitHub<br />
                            Jest<br />
                            Integration testing with<br />
                            React Testing Library<br/>
                            Heroku<br />
                            Netlify<br/>   
                            VS Code<br/>             
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SkillsSection;