const ServicesSection = () => {
    return (
        <>
        <h1 id="services-section" className="serviceTitle">My <span className="gold">Services</span></h1>
        <div class="servicesContainer">
            <div class="serviceCard">
                <div class="face face1">
                    <div class="content">
                        <img src={require("../images/web.png")} alt="webLogo" className="serviceLogo" ></img>
                        <h3>Web Development</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>I'm focused in creating successful responsive websites that are quick to load,
                            easy to use, and built around best programming practices. My area of expertise
                            is webflow-based front-end programming specialised in React.
                        </p>
                        <a href="https://www.wix.com/blog/2021/05/web-design/?utm_source=google&utm_medium=cpc&utm_campaign=16242205830^136002928760&experiment_id=^^582527080206^^_DSA&gclid=Cj0KCQjwxYOiBhC9ARIsANiEIfbDGCo8bmgbdopi-nB-L9IRJ4WTJTQiRIc7b1pDiA7TVeMq3MZIFskaAtUtEALw_wcB">Read More</a>
                    </div>
                </div>
            </div>
            <div class="serviceCard">
                <div class="face face1">
                    <div class="content">
                        <img src={require("../images/maint.png")} alt="maintLogo" className="serviceLogo"></img>
                        <h3>Maintenance</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>Keeping a website up to date and running smoothly as well as performing
                            optimally is known as website maintenance. This is important to attract and 
                            retain visitors. I can also adapt your website to work on all devices.
                        </p>
                        <a href="https://mailchimp.com/es/resources/website-maintenance/#:~:text=Website%20maintenance%20is%20the%20process,and%20fixing%20any%20broken%20links.">Read More</a>
                    </div>
                </div>
            </div>
            <div class="serviceCard">
                <div class="face face1">
                    <div class="content">
                        <img src={require("../images/seo.png")} alt="seoLogo" className="serviceLogo"></img>
                        <h3>Search Engine <br/>Optimization</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>SEO is important because it improves the appearance and positioning
                            of web pages in organic search results. Since this is the way most people
                            discover new things online, a good SEO strategy is essential for improving
                            traffic to your website.
                        </p>
                        <a href="https://moz.com/learn/seo/what-is-seo">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}


export default ServicesSection;