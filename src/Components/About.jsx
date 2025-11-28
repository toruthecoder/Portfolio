import ProfilePic from '../assets/profilepic.jpg'

function About() {
  return (
    <div className='Abou'>
      <div className="about">
        <div className="img">
          <img src={ProfilePic} alt="Profile Image" />
        </div>
        <div className="info">
          <h4>Name : Hammad Khan</h4>
          <h4>Age : 22</h4>
          <h4>Education : BS Data-Science ODL</h4>
          <h4>Student : at AIOU</h4>
          <h4>Semester : 1</h4>
        <a href='/CVv.pdf' download='CV.pdf'><button className='btn2'>Download CV</button></a>
        </div>
      </div>
      <div className="text1">
        <p>My journey as a self-taught web developer has been fueled by a passion for creating things that live on the internet. I love the challenge of turning a complex problem into a simple, beautiful design.</p>
        <br />
        <p>My toolkit includes <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b> to bring ideas to the front-end. My journey in self-learning has honed my problem-solving skills and my ability to quickly adapt to new challenges. I leverage <b>Git</b> and <b>GitHub</b> for efficient version control and collaborative workflows.</p>
        <br />
        <p>Take a look at my projects to see my skills in action, and feel free to get in touch to discuss how I can help bring your ideas to life. .I'm currently looking for new opportunities where I can contribute, grow, and make an impact. Want to build something amazing together?</p>
      </div>
    </div>
  )
}

export default About
