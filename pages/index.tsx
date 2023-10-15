import { useState } from "react";
import WorkExperience from "../components/WorkExperience"
import workexperiences from "../data/projects";
import ReactTypingEffect from "react-typing-effect";
import Paragraph from "../components/Paragraph"

export default function Index() {
    return (
        <>
            <div id="container">
                <div id="top-section">
                    <h1>Hi, nice to meet you!<br/>I'm <ReactTypingEffect text={["Michele!"]}/></h1>
                </div>

                <h2>About</h2>
                <p>
                    I'm a senior at Pomona College studying <b>Computer Science</b> and <b>Science, Technology, and Society</b>.
                </p>
                <p>
                    You can check out my <a href="https://www.linkedin.com/in/michele-tang/LinkedIn">LinkedIn</a> and <a href="https://github.com/tangmichele02">GitHub</a>. 
                </p>

                <hr/>

                <h2>Work Experiences</h2>
                {workexperiences.map(d => (
                    <WorkExperience
                        company={d.company}
                        position={d.position}
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
