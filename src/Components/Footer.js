import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
        <h4 style={{ fontStyle: 'italic', color: '#2c3e50' }}>Crafted with passion by <span style={{ fontWeight: 'bold', color: '#3498db' }}>Onkar Hol</span></h4>
        <h4 style={{ color: '#e74c3c' }}>&#169; 2025 - All rights reserved. Innovation in progress...</h4>

      <div className='footerLinks'>
        <a href="https://github.com/onkarhol999" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/onkar-hol-729101231/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:onkarhol555@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/u/mr_bean999/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer