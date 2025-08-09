import React from "react";
import Cv from "../../pdf/Ebraheem hany CV.pdf";
import { RiDownload2Line } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiBootstrapFill } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { MdOutlineStreetview } from "react-icons/md";
import { RiProjectorFill } from "react-icons/ri";
import { RiGraduationCapFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.css";
export const About = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <main className="section container">
      <h2 className="section-title">
        About<span>Me</span>
      </h2>
      <section className="about">
        <div className="about-text">
          <h3 className="title_info">Personal Info</h3>
          <div className="about-info">
            <div className="left">
              <ul>
                <li>
                  Frist name : <span>Ebraheem</span>
                </li>
                <li>
                  Age : <span>20 Yers</span>
                </li>
                <li>
                  Freelance : <span>Avaliable</span>
                </li>
                <li>
                  Phone : <span>(+20) 1050931447</span>
                </li>
                <li>
                  Gender : <span>Male</span>
                </li>
              </ul>
            </div>

            <div className="right">
              <ul>
                <li>
                  Last name : <span>Hany</span>
                </li>
                <li>
                  Nationality : <span>Egyption</span>
                </li>
                <li>
                  Address : <span>Cairo</span>
                </li>
                <li>
                  Email : <span>Ebraheemhany2004@gmail.com</span>
                </li>
                <li>
                  Langages : <span>Arbic,English</span>
                </li>
              </ul>
            </div>
          </div>
          <a href={Cv} download="" className="botton">
            Download Cv{" "}
            <span className="botton-icon">
              <RiDownload2Line />
            </span>
          </a>
        </div>

        <div className="about-projects">
          <div className="about-card">
            <h3>3+</h3>
            <p>
              Years of <br /> Experience
            </p>
          </div>

          <div className="about-card">
            <h3>10+</h3>
            <p>
              Created <br /> Projects
            </p>
          </div>

          <div className="about-card">
            <h3>45+</h3>
            <p>
              Happy <br /> Custamers
            </p>
          </div>

          <div className="about-card">
            <h3>3+</h3>
            <p>
              Years of <br /> Experience
            </p>
          </div>
        </div>
      </section>

      <div className="about-line"></div>
      <h2 className="section-title">
        My<span>Skils</span>
      </h2>
      <section className="about-sklis">
        <Slider {...settings}>
          <div className="skil-item">
            <RiBootstrapFill />
          </div>
          <div className="skil-item">
            <RiReactjsFill />
          </div>
          <div className="skil-item">
            <RiJavascriptFill />
          </div>
          <div className="skil-item">
            <RiCss3Line />
          </div>
          <div className="skil-item">
            <RiTailwindCssFill />
          </div>
          <div className="skil-item">
            <RiHtml5Fill />
          </div>
          <div className="skil-item">
            <RiGithubFill />
          </div>
        </Slider>
      </section>

      <div className="about-line"></div>

      <h2 className="section-title">Experience & Education</h2>

      <section className="about-experince">
        <div className="exprience-item">
          <span className="icon">
            <RiProjectorFill />
          </span>
          <p className="time">2022 - present</p>
          <h3>Front-end Developer</h3>
          <p className="about-discription">
            Developed a fully responsive e-commerce web application using
            React.js and Firebase. Includes user authentication, real-time
            product listing, cart functionality, and admin product management
            Fully responsive and optimized for performance.
          </p>
          
        </div>

        <div className="exprience-item">
          <span className="icon">
            <RiGraduationCapFill />
          </span>
          <p className="time">2022 - present</p>
          <h3>Faculty of Arts, Ain Shams University</h3>
         <p className="about-discription">
            Bachelor's in Geographic Information Systems (GIS) with a focus on
            sptial data analysis and mapping tecnologies.
          </p>
      
      
        </div>
      </section>
    </main>
  );
};
