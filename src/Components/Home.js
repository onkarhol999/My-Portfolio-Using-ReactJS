import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/web.png';
import {CiCoffeeCup} from "react-icons/ci";
import HomeImage from '../images/HomeImage.png'

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>ONKAR HOL</b></h1>
          <Typed/>   
        </div>

        <img 
            className='HomeImage' 
            src={HomeImage} 
            alt="" 
            style={{ width: '500px', height: '500px' }} 
          />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love transforming raw ideas into impactful websites and products. 
            Building things that challenge me as a developer and that I can be proud of is my passion.<br /><br />
            I'm fluent in <b>JAVA</b> and have hands-on experience with <b>Python</b>. 
            I specialize in building backend services using <b>Java Spring Boot</b>, and I’m currently exploring a few projects in the <b>Deep</b> Learning.<br />
            In the near future, I plan to dive deeper into <b>AI</b>, <b>Cloud Computing</b>, and <b>BlockChain</b>.<br /><br />
            Also, I can never resist a good cup of <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>
        </p>

        </div>
        <Tilt>
          <img 
            className='Avatar' 
            src={Avatar} 
            alt="" 
            style={{ width: '500px', height: '500px' }} 
          />
        </Tilt>

      </div>
    </div>
  )
}

export default Home