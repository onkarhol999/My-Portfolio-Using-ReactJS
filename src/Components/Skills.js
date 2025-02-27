import React from 'react'; 
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaJava } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiSpringboot, SiPostgresql, SiMysql, SiPowerbi } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        Java: <FaJava />,
        "Spring Boot": <SiSpringboot />,
        React: <FaReact />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        Javascript: <DiJavascript1 />,
        MongoDB: <SiMongodb />,
        Python: <FaPython />,
        Postman: <SiPostman />,
        Github: <FaGithub />,
        Postgres: <SiPostgresql />,
        MySQL: <SiMysql />,
        NPM: <FaNpm />,
        PowerBI: <SiPowerbi />
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
}

export default Skills;
