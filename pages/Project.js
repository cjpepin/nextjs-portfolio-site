import React, {useState, useEffect} from 'react';

const Project = (props) =>{
    const title = props.title;
    const text = props.text;

    let content;

    const regOrd = [1,2];
    const revOrd = [2,1];
    let order;

    if(props.ind%2 == 0){
        order = revOrd;
    }else{
        order =regOrd;
    }

    if(props.imgSrc){
        content = <img 
            className='content'
            src={props.imgSrc} 
            style={{
                maxWidth: '50%',
                objectFit: 'contain',
                padding: '20px',
                order: order[1]}} 
            />
    }

    
    return(
        <div className='project'>
            <div className="about" style={{order: order[0]}}>
                <p style={{fontSize: '30px'}}>{title}:</p> {'\r\n'}
                    {text}
            </div>
            {content}
        </div>
    )
}
export default Project;