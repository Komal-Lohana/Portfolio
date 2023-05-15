import "./intro.css";
import Me from "../../img/KL.jpg";
import myPDF from "../../../src/CV-KOMAL.pdf"

const Intro = ({ contactFormRef }) => {
  const handleContactClick = () => {
    if (contactFormRef && contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Komal Lohana</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">React JS Developer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Graphics Designer (Canva)</div>
              <div className="i-title-item"> Software Engineer (Java)</div>
            </div>
     
          </div>
   
          <p className="i-desc">
          I am a skilled software engineer with a passion for creating visually stunning web applications. Let's turn your ideas into reality together.
          </p>
          <br/>
          <div class="buttons">
          <a href={myPDF} target="_blank"> <button>Download CV</button> </a> 
        <a >   <button onClick={handleContactClick}>Contact Me</button> </a> 
        </div>
        </div>
      
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;