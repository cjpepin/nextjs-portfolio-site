const Intro = () => {
    return(
        <div className="me-body">   
            <div className="about-me">
                <span style={{fontSize: '40px'}}>Hello,</span>
                <span style={{fontSize: '24px'}}>My name is</span>
                <span style={{fontSize: '40px'}}>Connor Pepin.</span>
                <br />
                <br />
                <span style={{fontSize: '20px'}}>I am a Software Engineer.</span>
            </div>
            <div className='img-wrapper'>
                <img className='me-img' src='ME.jpeg' />
                <div className="socials">
                    <a href="https://www.linkedin.com/in/connor-pepin-10954b192/">
                        <img className="logo-img" src="linkedin.png" />
                    </a>
                    <a href="https://www.github.com/cjpepin">
                        <img className="logo-img" src="github.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Intro;