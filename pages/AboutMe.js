import React, {useState, useEffect} from 'react';
import Zoom from 'react-medium-image-zoom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Unity, {UnityContext} from 'react-unity-webgl';

import Intro from './Intro';
import Project from './Project';
import ContactMe from './ContactMe'

const AboutMe = (props) => {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    const [plImg, setPlImg] = useState(0);
    const [gsImg, setGsImg] = useState(0);
    const [djImg, setDgImg] = useState(0);
    const [fdImg, setFdImg] = useState(0);
    const [name, setName] = useState();
    const plImgs = ['login', 'front', 'chart', 'chart2'];
    const gsImgs = ['pointB','topic','yesNo','sentDist','kde','general','ethics1','ethics2'];

    // const [width, setWidth] = useState(window.innerHeight)
    // var fs = require('fs')
    // var files = fs.readdir('./PowerProgressPics')
    // console.log(files);

    // window.addEventListener('resize', console.log(window.innerHeight));


    function changeImage(imgsToUse, add){
        if(imgsToUse == plImgs){
            const curInd = imgsToUse.indexOf(imgsToUse[plImg])
            if(add){
                if(curInd == imgsToUse.length - 1){
                    setPlImg(0);
                }else{
                    setPlImg(curInd + 1);
                }
            }else{

                if(curInd == 0){
                    setPlImg(imgsToUse.length - 1);
                }else{
                    setPlImg(curInd - 1);
                }
            }
        }else if(imgsToUse == gsImgs){
            const curInd = imgsToUse.indexOf(imgsToUse[gsImg])
            if(add){
                if(curInd == imgsToUse.length - 1){
                    setGsImg(0);
                }else{
                    setGsImg(curInd + 1);
                }
            }else{

                if(curInd == 0){
                    setGsImg(imgsToUse.length - 1);
                }else{
                    setGsImg(curInd - 1);
                }
            }
        }
    }
    

    return (
    <>
     <Parallax pages={5}>
        <ParallaxLayer
            className="layer1"
            style={{ width: '100%', height: '100%'}}
            offset={0}
            speed={0.5}
            factor={0.5}>
            <Intro />
        </ParallaxLayer>

        <ParallaxLayer
            className="layer2"

            offset={0.9}
            factor={0.25}
            speed={1}
            >
            <div className='skills'>
                <span className='skillset-title'>Experience</span>
                    <div className='skillset-body'>
                        <span className='skillset-title-content'>
                            Full Stack Development,
                            Data Science, and 
                            starting Game Development
                        </span>
                        <p className='skillset-text'>
                            I am currently a senior working towards my Bachelors of Computer Science + Mathematics at Washington University 
                            in St. Louis. My current interests include full stack development in HTML, Javascript (React/React Native), C#, and
                            Python. I also have experience using MySQL and NoSQL database formats. Some of my more recent projects have 
                            focussed on game development using Unity and C# and I have just started to dive into Unreal Engine 5 with C++.
                            I have covered a wide array of what Software Engineering has to offer, and I am excited to keep learning new skills!
                        </p>
                    </div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
            className="layer3"

            offset={1}
            factor={0.5}
            speed={1.5}
            >
            <div className="experience-wrapper">
                <span className="projects-title" >Projects</span>
                
                <div  onClick={(e) => {
                        if(e.target.className == 'content'){
                            changeImage(plImgs, true)}}
                        }>
                    <Project 
                        ind={1}
                        title="Power Progress"
                        text={`Power Progress started as a final project for one of my creative programming classes. One of the challenges
                                of the project was to find two new technologies in frontend/backend/framework to use that we hadn't seen 
                                previously in class. Since we hadn't spent any time looking at NoSQL databases, nor had we looked at React.js,
                                I ended up inadvertantly falling into developing a MERN stack application. Once I had completed the requirements
                                for the project, I decided to keep working on it to add functionality that would make it an actually user-frieldy
                                application. The end goal was to design a product that allowed a lifter, specifically a powerlifter, to input their
                                programming spreadsheet for each training period (block) and be able to see visually how they were progressing over time.
                                This resource would benefit a lifter and a coaches ability to over time see how different styles of programming may
                                benefit or hurt the lifter's progress.`}
                        imgSrc={`./PowerProgressPics/${plImgs[plImg]}.png`}
                     />
                     <span>Link: <a href="http://powerprogress.herokuapp.com/">PowerProgress</a> </span>
                </div>

                <div className="content-block" 
                        onClick={(e) => {
                        if(e.target.className == 'content'){
                            changeImage(gsImgs, true)}}
                        }>
                    <Project 
                        ind={2}
                        title="Gradescope Sentiment Parser"
                        text={`The Gradescope Sentiment Parser was a project I started as a Teaching Assistant for our Introduction to Data Science class.
                                The professor offered the opportunity to give feedback in Gradescope quizzes at the end of each weekly "lab", but reading through
                                the poorly formatted responses without any technological assistance was a great challenge. I spent the entirety of the the first 
                                semester creating functions that would help to read in the data, calculate a sentiment score using a python package called VADER 
                                Sentiment Analyzer, and organize text responses my prediceted sentiment score. The following semester I continued my project as an
                                independent study and by the end had created 5 primary "solutions" in an attempt to make analyzing the student feedback more managable.
                                The first picture shows a point biserial correlation with a distribution histogram, where we see both whether Yes/No the student liked
                                the lab (x axis) and their calculated sentiment score based on their feedback (y axis). Next is a word/topic frequency parser that tries
                                to find the most frequent words/topics and uses a character bound to the left and right to estimate if the word is generally used
                                positively or negatively. Next are two bar charts that show for each lab 1. If the student yes/no enjoyed the lab, and 2. the average
                                sentiment distribution across semesters to see semester wide sentiments.`}
                        imgSrc={`./GradescopeParser/${gsImgs[gsImg]}.png`}
                    />
                    
                </div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer 
            className="layer4"
            offset={2}
            factor={1}
            speed={2}
            >
            <div className="experience-wrapper">
                <span className="projects-title">Game Development</span>

                <div
                    onClick={(e) => {
                        if(e.target.className == 'content'){
                            changeImage(plImgs, true)}}
                    }>
                    <Project 
                        ind={1}
                        title="Flappy Bird Clone"
                        text="I wanted to start learning Unity because I thought game development would be the perfect combination for my 
                                school experience, CS + Math, and it seemed like it would be fun. After spending several weeks trying to follow
                                tutorials to try to get over the learning curve, I still felt like I didn't have a solid independent knowledge
                                of how Unity worked, so I decided to start developing some simple projects on my own with what I did know. Flappy
                                Dog came first, except I wanted to practice making games work in 3D, so now there is a left and right component to it.
                                I was extremely happy with how it ended up working after working through learning how to use 3D vectors to position
                                elements. This ended up being a very fun game and entertaining to show to others."
                        imgSrc={`./PowerProgressPics/${plImgs[plImg]}.png`}
                    />
                </div>
                <div 
                    className="content-block"
                    onClick={(e) => {
                        if(e.target.className == 'content'){
                            changeImage(plImgs, true)}}
                    } >
                    <Project 
                        ind={2}
                        title="Doodle Jump Clone"
                        text="After completing Flappy Dog, I wanted to find another Unity project that would be similar, but provide new challenges. The 
                                game still has a relatively similar level design, with a start menu, gameplay screen, and pause screen, but now has some 
                                additional elements like adjutable volume, and different gameplay mechanics, like interaction with world objects, sound effects
                                and camera changes."
                        imgSrc={`./PowerProgressPics/${plImgs[plImg]}.png`}
                    />
                </div>
            </div>
            </ParallaxLayer>
        <ParallaxLayer 
            className="layer5"

            offset={3.5}
            factor={1}
            speed={2}
            >
            <ContactMe />
        </ParallaxLayer>
    </Parallax>
    
    </>
    )
}

export default AboutMe;
  

