import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import LMS from '../images/LMS1.png';
import FoodDonation from '../images/donation.jpg';
import Teacher from '../images/Teacher.png';
import Tic from '../images/Tic.png';
import job from '../images/job.png';
import shooping from '../images/Shooping.png';
import freelance from '../images/Hospital.png';
import ChatApp from '../images/ChatApp.png'

const Project = () => {
  const projects = [
    {
      name: "Real Time chat Application",
      photo: ChatApp,
      desc: "A real-time chat application built with React.js, SockJS, and STOMP WebSockets, enabling seamless room-based messaging with secure authentication, message history retrieval, and live updates. Features include a responsive UI with dark mode, user presence detection, and optimized WebSocket handling to prevent duplicate messages.",
      github: "https://github.com/onkarhol999/Chat-Application-.git",
      website: "https://realtimechatapplication-orpin.vercel.app/"
    },
    {
      name: "Learning Management System",
      photo: LMS,
      desc: "Developed a comprehensive Online Learning Management System using the MERN stack (MongoDB, Express, React, Node.js). The platform features secure user authentication, robust course management, and real-time progress tracking, providing a seamless and interactive learning experience.",
      github: "https://github.com/onkarhol999/LMS-Project2023",
      website: "https://incomparable-meerkat-0f555a.netlify.app/"
    },
    {
      name: "FoodDonation System",
      photo: FoodDonation,
      desc: "A platform that connects food donors with NGOs and needy individuals, reducing food wastage and helping communities in need.",
      github: "https://github.com/onkarhol999/FoodBridge",
      website: "https://earnest-lily-750c00.netlify.app/"
    },
    {
      name: "Online Teacher Recruitment Portal",
      photo: Teacher,
      desc: "A web-based portal for educational institutions to streamline the hiring process for teachers, allowing applications, screening, and interviews online.",
      github: "https://github.com/onkarhol999/DBATU_Recruitment_Portal",
      website: "https://dulcet-mochi-7806fe.netlify.app/"
    },
    {
      name: "Tic-Tac-Toe Game",
      photo: Tic,
      desc: "A simple and interactive Tic-Tac-Toe game built using React.js, allowing two players to compete in a turn-based match.",
      github: "https://github.com/onkarhol999/Tic-Tac-Toe_Game",
      website: "https://tic-tac-toe-game-git-main-onkarhol999s-projects.vercel.app/"
    },
    {
      name: "Job Portal Backend",
      photo: job,
      desc: "A scalable Job Portal Backend built with Spring Boot and PostgreSQL, featuring secure authentication, job postings, candidate applications, and recruiter management through RESTful APIs.",
      github: "https://github.com/onkarhol999/Java-Backend-Development/tree/main/Lecture212%20REST%20Job%20Portal%20Backend",
      website: "https://yourwebsite.com/tic-tac-toe"
    },
    {
      name: "Shopping Website Backend",
      photo: shooping,
      desc: "A robust Shopping Website Backend built with Spring Boot and PostgreSQL, supporting user authentication, product management, order processing, and secure payment integration through RESTful APIs.",
      github: "https://github.com/onkarhol999/Java-Backend-Development/tree/main/Lecture245%20Shooping%20Wesite%20Using%20SpingBoot",
      website: "https://yourwebsite.com/tic-tac-toe"
    }
  ];

  const freelancingProjects = [
    {
      name: "Hospital Management System",
      photo: freelance,
      desc: "A full-stack Hospital Management System developed for a client using Spring Boot for the backend and ReactJS for the frontend. The system efficiently manages patient records, doctor appointments, billing, and staff administration. It features secure authentication, real-time data updates, and role-based access control, ensuring smooth hospital operations. The database is powered by PostgreSQL for scalable and reliable data storage.",
      github: "https://github.com/onkarhol999/hospital-management-backend",
      website: "https://yourwebsite.com/freelance-portfolio"
    }
  ];

  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {projects.map((project, index) => (
          <div key={index} className='projectBox'>
            <img className='projectPhoto' src={project.photo} alt="Project display" />
            <div>
              <br />
              <h3>{project.name}</h3>
              <br />
              {project.desc}
              <br />
              {project.github && (
                <a href={project.github} target='_blank' rel="noreferrer">
                  <button className='projectbtn'><FaGithub /> Github</button>
                </a>
              )}
              <a href={project.website} target='_blank' rel="noreferrer">
                <button className='projectbtn'><CgFileDocument /> Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Freelancing Projects Section */}
      <h1 className='projectHeading'>Freelancing <b>Projects</b></h1>
      <div className='project'>
        {freelancingProjects.map((project, index) => (
          <div key={index} className='projectBox'>
            <img className='projectPhoto' src={project.photo} alt="Project display" />
            <div>
              <br />
              <h3>{project.name}</h3>
              <br />
              {project.desc}
              <br />
              {project.github && (
                <a href={project.github} target='_blank' rel="noreferrer">
                  <button className='projectbtn'><FaGithub /> Github</button>
                </a>
              )}
              <a href={project.website} target='_blank' rel="noreferrer">
                <button className='projectbtn'><CgFileDocument /> Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;