import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";

export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename} data-aos="fade-right">
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <Githubcalendar
          username="srahul2244"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
        />

        <div style={{ marginTop: "30px" }}>
          <h2 style={{padding:"30px"}}><i>My GitHub Stats</i></h2>
          <p display="flex" align="center">
            <img alt="Jha-Vineet69's Top Languages Stats" src="https://github-readme-stats.vercel.app/api?username=srahul2244&show_icons=true" width="400" />
            <a href="https://github.com/srahul2244?tab=repositories">
              <img width="400" height="auto" alt="rahul github stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=Srahul2244&show_icons=true&theme=algolia&count_private=true" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
