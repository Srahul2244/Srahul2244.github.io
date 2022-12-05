import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiNpm,
  SiChakraui,
} from "react-icons/si";
import { DiBootstrap, DiCss3, DiNpm, DiReact } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import MyFitnessPa_App_Clone from "./MyFitnessPal App.JPG";
import betrix24 from "./betrix24.jpg";
import bellavita from "./bellavita.jpg";
import Digital from "./Digital.jpg"
import ayoya from "./ayoya.jpg"
import sephora from "./sephora.jpg";
import asos from "./Asos.jpg"
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        {/* ---------------1-------------------- */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={Digital} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Home - The Digital Garage<br /> (Individual)</h2>
              <p>
                Google Digital Garage Online Courses Discover a range of free learning content designed to help grow your business or jumpstart your career.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <SiNpm />
              </div>
              <div>
                <a
                  href="https://calm-puppy-6598f8.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Srahul2244/recondite-ball-5601"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------2-------------------- */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={ayoya} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Ayoya App Clone <br /> (Collaborative)</h2>
              <p>
                Ayoa is an all-in-one online whiteboard where you can brainstorm ideas, work together and get things done. Our mission is to change the way people think about work. We help teams and individuals build a link between creativity and productivity by providing the tools they need to work and collaborate with ease.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://funny-buttercream-0aca42.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Srahul2244/grouchy-dinner-9447"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ...........3......... */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={asos} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2> Asos App Clone <br /> (Collaborative)</h2>
              <p>
                ASOS plc is a British online fashion and cosmetic retailer. The company was founded in 2000 in London, primarily aimed at young adults.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <DiReact />
                <SiChakraui />
                <DiNpm />
              </div>
              <div>
                <a
                  href="https://glittery-froyo-adab52.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/mehfoozkhangithub/tangible-robin-3650/tree/main/team_robin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------3-------------------- */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={sephora} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2> Sephora App Clone <br /> (collaborative)</h2>
              <p>
              Sephora is a French multinational retailer of personal care and beauty products. 
              Featuring nearly 340 brands, along with its own private label,
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://sephoraclone17.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Mshradha/sephora_clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------3-------------------- */}
      </div>
    </>
  );
};
