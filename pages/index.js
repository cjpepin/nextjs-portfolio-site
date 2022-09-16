import NavBar from './Navbar'
import AboutMe from './AboutMe'
import FlappyDog from './FlappyDog';
import DoogleJump from './DoogleJump';

import React, { useEffect, useState } from 'react';
import MartianDefense from './MartianDefense';

export default function Home() {
  // const [tab, setTab] = useState();
  const [body, setBody] = useState("me");
  const [curId, setCurId] = useState("me")

  // useEffect(() => {
  //   setBody( )
  // }, [])

  function tabSelection(e){
    // console.log(e)

    // // if(e == "me"){
    // //   setBody(showTab(e));
    // // }else 
    // if(e.target.id == "me" || e.target.id == "fd" || e.target.id == "dj" || e.target.id === "md"){
    //   setBody(showTab(e.target.id));
    // }    
  }
  
  function showTab(tab){
    // console.log(tab)

    // if(tab == "me"){
    //   setCurId("me");
    //   return(
    //     <AboutMe
    //       id = "me"
    //     />
    //   )
    // }else if(tab == "md"){
    //   setCurId("md");
    //   return(
    //     <MartianDefense
    //       id = "md"
    //     />
    //   )
    // }
    // // } else if(tab == "fd"){
    // //   setCurId("fd");

    // //   return(
    // //     <FlappyDog
    // //       id = "fd"
    // //     />
    // //   )
    // // }else if(tab == "dj"){
    // //   setCurId("dj");

    // //   return(
    // //     <DoogleJump
    // //       id = "dj"
    // //     />
    // //   )
  }

  return (
    <div className="all">
      <NavBar className='nav'/>
      <div className='tot-body'>
        <div className="container">
        <AboutMe
              id = "me"
            />
        </div>
      </div>
    </div>
    
  )
}
