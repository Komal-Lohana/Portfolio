import "./about.css";
import Award from "../../img/award.png";
import me from "../../img/me.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Frontend Developer | React JS Developer | Web Developer | Software Engineer
        </p>
        <p className="a-desc">
          I am a results-driven software engineer with a keen eye for detail and an unwavering commitment to client satisfaction. Armed with a bachelor's degree in software engineering and proficiency in a range of cutting-edge technologies such as HTML5, CSS3, JS, Bootstrap, React JS, and Rest API.  <br /><br/> I leverage my technical expertise to create visually stunning and intuitive web applications. My solid grasp of front-end development, Java, and outstanding communication skills make me a top candidate for organizations seeking a skilled software engineer. With a track record of delivering top-quality work and an unquenchable thirst for growth and development, I am poised to take on new challenges and help you bring your projects to life.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;