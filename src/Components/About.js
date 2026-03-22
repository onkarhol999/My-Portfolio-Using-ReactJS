import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
         <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Onkar Uttam Hol</b>, and I am from Satara, Maharashtra, India.  
            I'm currently working as an <b>SAP ABAP & UI5 Developer</b>.  
            <br/><br/>

            I specialize in building modern and user-friendly applications using <b>SAP Fiori (UI5)</b> along with strong backend development using <b>SAP ABAP</b>.  
            I have hands-on experience in developing reports, enhancements, integrations, and creating responsive Fiori applications that improve business workflows.  
            <br/><br/>

            I enjoy working across the full stack by connecting frontend and backend using <b>OData Services</b>, delivering complete end-to-end SAP solutions.  
            You can check out some of my work in the projects section.  
            <br/><br/>

            I am <b>open</b> to new opportunities and collaborations where I can contribute, learn, and grow as a developer. Feel free to connect with me; links are in the footer.  
            <br/><br/>

            Apart from SAP development, I love solving <b>DSA (Data Structures & Algorithms)</b> problems using <b>Java</b> and exploring new technologies.  
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>

      {/* Achievements Section */}
      <h1 className='AchievementsHeading'>My Achievements</h1>
      <div className='achievements'>
        <div className='achievement-card'>
          <h2>🎓 SAP ABAP & UI5 Training</h2>
          <p>
            Successfully trained as an <b>SAP ABAP & UI5 Developer</b> at <b>Utkarsh Foundation, Alibag, India</b>, 
            gaining hands-on experience in building enterprise applications using SAP technologies.
          </p>
        </div>
        <div className='achievement-card'>
          <h2>🥉 2nd Runner-up in National Level Hackathon</h2>
          <p>Secured 2nd runner-up position in a National Hackathon organized by Google Student Developer Club at Gardha Institute, Ratnagiri.</p>
        </div>
        <div className='achievement-card'>
          <h2>🏆 2-Star Coder on CodeChef</h2>
          <p>Achieved a 2-star rating on CodeChef, solving complex competitive programming challenges.</p>
        </div>
       <div className='achievement-card'>
          <h2>💯 1600+ Rating on LeetCode</h2>
          <p>
            Achieved <b>Knight</b> level on LeetCode with a peak rating of <b>1604</b>, showcasing strong problem-solving skills in Data Structures and Algorithms.
          </p>
        </div>
        <div className='achievement-card'>
          <h2>🌟 5-Star Java Coder on HackerRank</h2>
          <p>Earned a prestigious 5-star rating in Java on HackerRank, showcasing strong problem-solving skills.</p>
        </div>
      </div>

      {/* Check My Coding Skills Section */}
      <h1 className='CodingSkillsHeading'>Check My Coding Skills</h1>
      <div className='coding-platforms'>
        <div className="coding-row">
          <a href="https://leetcode.com/u/mr_bean999/" target="_blank" rel="noopener noreferrer" className="coding-btn leetcode-btn">
            LeetCode
          </a>
          <a href="https://www.geeksforgeeks.org/user/mr_bean_999/" target="_blank" rel="noopener noreferrer" className="coding-btn gfg-btn">
            GeeksforGeeks
          </a>
          <a href="https://www.codechef.com/users/mr_bean_99" target="_blank" rel="noopener noreferrer" className="coding-btn codechef-btn">
            CodeChef
          </a>
        </div>
        <div className="coding-row">
          <a href="https://www.hackerrank.com/profile/holonkar2003" target="_blank" rel="noopener noreferrer" className="coding-btn hackerrank-btn">
            HackerRank
          </a>
          <a href="https://www.interviewbit.com/profile/onkar-hol/" target="_blank" rel="noopener noreferrer" className="coding-btn interviewbit-btn">
            InterviewBit
          </a>
        </div>
      </div>

      {/* Professional Skillset Section */}
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Java' />
        <Skills skill='Spring Boot' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='Javascript' />
        <Skills skill='MongoDB' />
        <Skills skill='Python' />
        <Skills skill='Postman' />
        <Skills skill='Github' />
        <Skills skill='Postgres' />
        <Skills skill='MySQL' />
        <Skills skill='NPM' />
        <Skills skill='PowerBI' />
      </div>
    </>
  );
}

export default About;
