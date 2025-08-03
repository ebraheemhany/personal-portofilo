import img from "../../assets/img.jpg";
import {Link} from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import "./Home.css"
import { Typewriter } from 'react-simple-typewriter'
export const Home = () => {
  return (
    <section className="home-container grid">
      <img src={img} alt="home" className="home-img" />
      <div className="home-content">
        <h1 className="home-title">
               <Typewriter
        words={["hello I'm ebraheem Hany"]}
        loop={true}
        cursor
        cursorStyle='|'
        typeSpeed={150}
        deleteSpeed={100}
        delaySpeed={1500}
      /> <br /> Front-end Devoloper
        </h1>

        <p className="home-discription">
          I am a Front End Developer with strong experience in React.js and
          JavaScript. Proficient in front-end design frameworks such as Material
          UI and CSS. I enjoy solving complex challenges and continuously
          learning new languages and frameworks. Dedicated and detail-oriented,
          I strive to deliver high-quality solutions that meet client
          expectations.
        </p>
       <Link to={"/about"} className="botton">More About Me <span className="botton-icon"> <RiArrowRightLine /> </span> </Link>
      </div>
     <div className="color-block"></div>

    </section>
  );
};
