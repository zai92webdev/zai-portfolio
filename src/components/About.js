import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about">
            <div className='about__nav'>

                <h1>About Me</h1>

                <div className='about__content'>
                    <h1>Developer</h1>

                    <p>Hello, my name is Zairee. I am a self-taught web developer. Start learning html and css since 2019, and still developing and honing my skill to become a full stack web developer .
                        I'm aiming to make a good and clean website , and become professional web developer.
                    </p>

                    <h1>SKILLS</h1>
                        <span>Frontend: html, css, bootstrap,material-ui,React JS, Redux</span>
                        <span>Backend: Node JS, Express JS</span>
                        <span> Others: MongoDB, Firebase, MySQL, Heroku,Github </span>


                </div>

            </div>
        </div>
    )
}

export default About
