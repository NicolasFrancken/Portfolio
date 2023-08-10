import "./About.css";

function About() {
  return (
    <div id="about" className="About-container">
      <div className="About-title">
        <h2>About Me</h2>
      </div>
      <div className="About-container-2">
        <div className="About-text">
          <div className="About-image"></div>
          <h3>An enthusiast Web Developer &#128187;</h3>
          <p>
            As a Full-Stack Developer, I turn <span>ideas</span> into
            <span> code</span>. I am capable of handling any obstacles,
            challenges or problems. Being a <span>focused</span> and
            <span> disciplined</span> person make me a wise choice. Using
            <span> React/Next</span> for the Frontend and
            <span> Node, Express</span> and
            <span> SQL/NoSQL </span>
            databases for the Backend, I am able to make
            <span> attractive, interactive, useful</span> and
            <span> professional </span>websites. <br />
            In my free time, I love reading, going to the gym and trekking in
            the woods. I think being in peace with myself is a very important
            aspect when it comes to working in an efficient and tidy way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
