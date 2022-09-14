import React, {useState, useEffect, componentDidUpdate} from 'react';

const Project = (props) =>{
    const title = props.title;
    const text = props.text;
    const [hasBeenClicked, setHasBeenClicked] = useState(props.hasBeenClicked);
    let content;
    let order;
    const regOrd = [1,2];
    const revOrd = [2,1];

    if(props.ind%2 == 0){
        order = revOrd;
    }else{
        order =regOrd;
    }

    if(props.imgSrc && !hasBeenClicked){
        content = 
        <div className='img-container' style={{order: order[1]}}>
        <img 
            className='content'
            src={props.imgSrc} 
            
        />
        <div className='click-me'>click me!</div>
    </div>
    }else if(props.imgSrc && hasBeenClicked){
        content = <div className='img-container' style={{order: order[1]}}>
        <img 
            className='content'
            src={props.imgSrc} 
            
        />
    </div>

    }

    function handleClick(e) {
        setHasBeenClicked(true);
    }
    

    
    return(
        <div className='project'>
            
            <div className="about" style={{order: order[0]}}>
                <p className="about-title">{title}:</p> {'\r\n'}
                    {text}
            </div>
            <div onClick={handleClick}>
                {content}
            </div>
        </div>
    )
}
export default Project;