import { useState } from "react";
import WorkExperience from "../components/WorkExperience"
import workexperiences from "../data/workexperiences";
import Project from "../components/Project"
import projects from "../data/projects";
import ReactTypingEffect from "react-typing-effect";
import Paragraph from "../components/Paragraph"

export default function Index() {
    return (
        <>
            <div id="container">
                <div id="top-section">
                    <h1>Hi, nice to meet you!<br/>I'm <ReactTypingEffect text={["Michele!"]}/></h1>
                </div>

                <h2><b>About</b></h2>
                <p>
                    I'm a senior at Pomona College studying <b>Computer Science</b> and 
                    <b> Science, Technology, and Society</b>.
                </p>
                <p>
                    You can check out my <a href="https://www.linkedin.com/in/michele-tang/LinkedIn">
                    LinkedIn</a> and <a href="https://github.com/tangmichele02">GitHub</a>. 
                </p>

                <hr/>

                <h2><b>Work Experiences</b></h2>
                {workexperiences.map(d => (
                    <WorkExperience
                        company={d.company}
                        position={d.position}
                        date={d.date}
                        description={d.description}
                        location={d.location}
                        image={d.image}
                        alt={d.alt}
                    />
                ))}

                <hr/>

                <h2><b>Coursework</b></h2>
                    
                    <p><b>Computer Science Courses:</b></p>
                        <ul>
                            <li>Data Structures and Advanced Programming</li>
                            <li>Discrete Math and Functional Programming</li>
                            <li>Algorithms</li>
                            <li>Computer Systems</li>
                            <li>Neural Networks</li>
                            <li>Intro to Theory and Languages</li>
                            <li>Computer Science for Inquiry (Intro to ML)</li>
                        </ul>

                    <p><b>Science, Technology, Society Courses:</b></p>
                        <ul>
                            <li>History of Modern Science and Technology</li>
                            <li>Robot Ethics</li>
                            <li>Anthropology of Science and Technology</li>
                            <li>Discovery, Invention, Progress (Philosophy of Science and Technology)</li>
                            <li>Robot Ethics</li>
                            <li>Technology and International Politics</li>
                            <li>Technology and Politics</li>
                        </ul>

                <hr/>

                <h2><b>Skills</b></h2>

                    <p><b>Languages:</b></p>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>R</li>
                            <li>SQL</li>
                        </ul>

                    <p><b>Other Technical Skills:</b></p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Git</li>
                            <li>Apache Spark</li>
                            <li>Snowflake</li>
                            <li>AWS Glue</li>
                            <li>AWS S3</li>
                            <li>Datadog</li>
                            <li>Apache Airflow</li>
                            <li>Jenkins</li>
                            <li>JSON</li>
                            <li>Rest API</li>
                        </ul>

                    <p><b>Other:</b></p>
                        <ul>
                            <li>Agile Methodologies</li>
                            <li>Scrum</li>
                            <li>Kanban</li>
                            <li>Asana</li>
                            <li>Adobe Illustrator</li>
                            <li>Google Analytics</li>
                            <li>Figma</li>
                            <li>Canva</li>
                        </ul>

                <hr/>
                
                <h2><b>Projects</b></h2>

                {projects.map(d => (
                    <Project
                        title={d.title}
                        link={d.link}
                        date={d.date}
                        description={d.description}
                        image={d.image}
                        alt={d.alt}
                    />
                ))}

            </div>
        </>
    );
}
