import { NavHashLink } from "react-router-hash-link";

import Dim from "../assets/CssStyles";
import SideBar from "../components/AboutPage/SideBar";
import AboutDiv from "../components/AboutPage/AboutDiv";
import DevProject from "../components/AboutPage/DevProject";
import Experience from "../components/AboutPage/Experience";
import SubExperience from "../components/AboutPage/SubExperience";

const HomePage = () => {
  const HeaderStyle = "text-red-800 text-3xl  font-semibold";
  return (
    <div
      className={`HomePage flex flex-row`}
      style={{
        height: `calc(100vh - ${Dim.NavBarHeight} - ${Dim.FooterHeight})`,
      }}
    >
      <SideBar />

      <section className="MainDiv h-full basis-2/3 bg-white overflow-y-scroll p-7">
        {/* 
        //TODO Description about me 
        */}

        <AboutDiv>
          <h2 id="about" className={HeaderStyle}>
            About Me
          </h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          alias dolor ipsum animi omnis quae eveniet accusamus dolore error
          nesciunt obcaecati, consectetur autem saepe harum. Quaerat esse
          repellat nobis fugiat.
        </AboutDiv>

        {/* 
        //TODO Projects
        */}

        <AboutDiv>
          <h2 id="projects" className={HeaderStyle}>
            Dev Projects
          </h2>
          <DevProject projectTitle="Pokemunch">
            <p>Under construction!</p>
          </DevProject>
          <DevProject projectTitle="Game of 24">
            <p>Under construction!</p>
          </DevProject>
          <DevProject
            projectTitle="Bool You Can Eat Hotpot"
            projectGitHub="https://github.com/claire2d2/game-project"
            projectLink="https://claire2d2.github.io/game-project/"
          >
            <p>
              A snake-like game using DOM manipulation to score the most points
              possible with a twist: don't pick up coriander!
            </p>
            <p>Technologies used: Javascript</p>
          </DevProject>
        </AboutDiv>

        {/*

         Div to present professional experiences, with a component "Experience" per company and other components "SubExperience" for experiences where I've had more than one role 
        
        */}

        {/* mc2i */}

        <AboutDiv>
          <h2 id="exp" className={HeaderStyle}>
            Professional Experiences
          </h2>
          <Experience
            expDate="2022-2024"
            companyName="mc2i"
            companyUrl="https://www.mc2i.fr"
            companyLogo="https://www.symbiosis-consultants.net/wp-content/uploads/2023/01/logo-mc2i.png"
          >
            <SubExperience
              expTitle="Digital Transformation Consultant"
              expDateDetails="from July 2021 to March 2022"
            >
              <p>Details here</p>
            </SubExperience>
          </Experience>

          {/* Euris */}

          <Experience
            expDate="2021-2022"
            companyName="Euris"
            companyUrl="https://www.mc2i.fr"
            companyLogo="https://media.licdn.com/dms/image/C4D0BAQHeKXDdSoNQ7Q/company-logo_200_200/0/1630564300022/euris__logo?e=2147483647&v=beta&t=aqv3TGAaU3Kl03a51pMUMJlLmzFnisnHRYw90rKERvE"
          >
            <SubExperience
              expTitle="CRM/PRM Project Manager"
              expDateDetails="from July 2021 to March 2022"
            >
              <p>Details here</p>
            </SubExperience>
          </Experience>

          {/* Fonction:Support */}

          <Experience
            expDate="2020-2021"
            companyName="Fonction:Support"
            companyUrl="https://www.mc2i.fr"
            companyLogo="https://team.fonction-support.fr/wp-content/uploads/FS-Welcome-2.png"
          >
            <SubExperience
              expTitle="Organisational Project Manager"
              expDateDetails="from May 2020 to June 2021"
            >
              <p>Details here</p>
            </SubExperience>
          </Experience>

          {/* Solutec */}

          <Experience
            expDate="2018-2020"
            companyName="Solutec"
            companyUrl="https://www.solutec.fr"
            companyLogo="https://www.symbiosis-consultants.net/wp-content/uploads/2023/01/logo-mc2i.png"
          >
            <SubExperience
              expTitle="IT Consultant"
              expDateDetails="from June 2019 to May 2020"
            >
              <p>Details here</p>
            </SubExperience>
            <SubExperience
              expTitle="IT Recruitment Manager"
              expDateDetails="from July 2018 to June 2019"
            >
              <p>Details here</p>
            </SubExperience>
          </Experience>
        </AboutDiv>
        <AboutDiv>
          <h2 className={HeaderStyle}>Other</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          alias dolor ipsum animi omnis quae eveniet accusamus dolore error
          nesciunt obcaecati, consectetur autem saepe harum. Quaerat esse
          repellat nobis fugiat. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Delectus alias dolor ipsum animi omnis quae eveniet
          accusamus dolore error nesciunt obcaecati, consectetur autem saepe
          harum. Quaerat esse repellat nobis fugiat. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Delectus alias dolor ipsum animi omnis
          quae eveniet accusamus dolore error nesciunt obcaecati, consectetur
          autem saepe harum. Quaerat esse repellat nobis fugiat. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Delectus alias dolor
          ipsum animi omnis quae eveniet accusamus dolore error nesciunt
          obcaecati, consectetur autem saepe harum. Quaerat esse repellat nobis
          fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Delectus alias dolor ipsum animi omnis quae eveniet accusamus dolore
          error nesciunt obcaecati, consectetur autem saepe harum. Quaerat esse
          repellat nobis fugiat. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Delectus alias dolor ipsum animi omnis quae eveniet
          accusamus dolore error nesciunt obcaecati, consectetur autem saepe
          harum. Quaerat esse repellat nobis fugiat. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Delectus alias dolor ipsum animi omnis
          quae eveniet accusamus dolore error nesciunt obcaecati, consectetur
          autem saepe harum. Quaerat esse repellat nobis fugiat. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Delectus alias dolor
          ipsum animi omnis quae eveniet accusamus dolore error nesciunt
          obcaecati, consectetur autem saepe harum. Quaerat esse repellat nobis
          fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Delectus alias dolor ipsum animi omnis quae eveniet accusamus dolore
          error nesciunt obcaecati, consectetur autem saepe harum. Quaerat esse
          repellat nobis fugiat.
        </AboutDiv>
      </section>
    </div>
  );
};

export default HomePage;
