import NavBar from './Navbar'
import AboutMe from './AboutMe'
import FlappyDog from './FlappyDog';
import DoogleJump from './DoogleJump';

import React, { useEffect, useState } from 'react';

export default function Home() {
  // const [tab, setTab] = useState();
  const [body, setBody] = useState("me");
  const [curId, setCurId] = useState("me")

  useEffect(() => {
    setBody( <AboutMe
              id = "me"
            />)
  }, [])

  function tabSelection(e){
    console.log(e.target.id)
    if(e == "me"){
      console.log('test1');
      setBody(showTab(e));
    }else if(e.target.id == "me" || e.target.id == "fd" || e.target.id == "dj"){
      console.log('test2');
      setBody(showTab(e.target.id));
    }    
  }
  
  function showTab(tab){
    if(tab == "me"){
      setCurId("me");
      return(
        <AboutMe
          id = "me"
        />
      )
    } else if(tab == "fd"){
      setCurId("fd");

      return(
        <FlappyDog
          id = "fd"
        />
      )
    }else if(tab == "dj"){
      setCurId("dj");

      return(
        <DoogleJump
          id = "dj"
        />
      )
    }
  }

  return (
    <div className="all">
      <div className='nav' onClick={tabSelection}>
        <NavBar />
      </div>
      <div className='tot-body'>
        <div className="container">
          {body}
        </div>
      </div>
    </div>
    
  )
}
