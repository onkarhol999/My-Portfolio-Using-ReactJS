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
            I love transforming complex business requirements into intuitive and impactful SAP applications. 
            Building solutions that enhance user experience and streamline enterprise workflows is my passion as a developer.<br /><br />

            My primary focus is on <b>SAP Fiori</b>, where I build modern, responsive applications using <b>SAP UI5</b> and <b>Fiori Elements</b>. 
            I also have strong hands-on experience with <b>SAP ABAP</b>, developing robust backend logic, reports, enhancements, and integrations.<br />

            I enjoy working across the full stack by connecting frontend and backend using <b>OData Services</b>, delivering complete end-to-end SAP solutions.<br /><br />

            Beyond SAP, I love solving <b>DSA (Data Structures & Algorithms)</b> problems using <b>Java</b>, constantly challenging myself on programming platforms and improving my problem-solving skills.<br />

            Currently, I am exploring <b>SAP BTP</b> and cloud technologies to build scalable, future-ready applications. 
            In the near future, I plan to dive deeper into <b>AI integration with SAP</b>, <b>Cloud Computing</b>, and enterprise automation.<br /><br />

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