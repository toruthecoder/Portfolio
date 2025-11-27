import ProfilePic from '../assets/profilepic.jpg'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si"

function HomePage() {
    return (
        <div className='Home'>
            <div className="wrapper">
                <div className="text">
                    <h1>
                        <span className='h1'>
                            Front-End Web-
                        </span>

                        <span style={{
                            display: 'inline-block',
                            width: '10px',
                            textAlign: 'left',
                            color: '#40af40',
                            marginLeft: '0px'
                        }}>
                            <TypeAnimation
                                sequence={[
                                    'Developer', 2000,
                                    'Engineer', 2000,
                                ]}
                                wrapper="span"
                                speed={10}
                                style={{ fontSize: '1.7rem', display: 'inline-block' }}
                                repeat={Infinity}
                                cursorStyle={{ color: '#40af40' }}
                                className='ani'
                            />
                        </span>
                    </h1>
                    <p>I'm a self-taught web developer passionate about building digital experiences that are both visually appealing and highly functional. I specialize in the front-end, using modern technologies like <b>JavaScript</b>, <b> React</b>, <b> HTML</b>, and <b> CSS</b> to create fast, responsive, and user-friendly websites.</p>          
                    <a href='/CV.pdf' download='CV.pdf'><button className='btn1'>Download CV</button></a>
                </div>
                <img src={ProfilePic} alt="My profile Picture" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="https://github.com/toruthecoder" target="_blank"><FaGithub/> <br /> GitHub</a></li>
                    <li><a href="https://linkedin.com/in/hammad-khan-497037361" target="_blank"><FaLinkedin/> <br /> LinkedIn</a></li>
                    <li><SiGmail/> <br /> devishsage@gmail</li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage
