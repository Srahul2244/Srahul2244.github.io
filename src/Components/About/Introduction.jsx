import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about" style={{ boxShadow: "rgba(1, 102, 214, 0.1) 0px 0px 0px 1px" }}>
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://media-exp1.licdn.com/dms/image/D4E03AQHKT8_MlPnWVw/profile-displayphoto-shrink_400_400/0/1668612060972?e=1674086400&v=beta&t=99H_rEsAItk44IKSWbmFhpMeD3TwE7Vb3ACKdbOCDW8"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Rahul Singh </span> from{" "}
                <span className="different"> Deoria,Uttar-Pradesh</span>. I have
                completed my Degree in Diploma in Electrical Engineering from
                Prasad Institute of Technology , Lucknow.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Bikes Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
