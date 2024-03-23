import { HashLink } from "react-router-hash-link";

import Dim from "../assets/CssStyles";
import AboutDiv from "../components/AboutPage/AboutDiv";
import DevProject from "../components/AboutPage/DevProject";

const HomePage = () => {
  const SideBarText = "text-red-800 text-4xl p-6";
  const HeaderStyle = "text-red-800 text-3xl  font-semibold";
  return (
    <div
      className={`HomePage flex flex-row`}
      style={{
        height: `calc(100vh - ${Dim.NavBarHeight} - ${Dim.FooterHeight})`,
      }}
    >
      <aside className="SideBar h-full flex flex-col justify-center items-center basis-1/3 top-0 bg-white">
        <div className="inline-block align-text-bottom">
          <p className={SideBarText}>About</p>
          <p className={SideBarText}>Projects</p>
          <p className={SideBarText}>Professional Experiences</p>
          <p className={SideBarText}>Other</p>
        </div>
      </aside>
      <section className="MainDiv h-full basis-2/3 bg-white overflow-y-scroll p-7">
        <AboutDiv>
          <h2 className={HeaderStyle}>About Me</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          alias dolor ipsum animi omnis quae eveniet accusamus dolore error
          nesciunt obcaecati, consectetur autem saepe harum. Quaerat esse
          repellat nobis fugiat.
        </AboutDiv>

        <AboutDiv>
          <h2 className={HeaderStyle}>Dev Projects</h2>
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
        <AboutDiv>
          <h2 className={HeaderStyle}>Professional Experiences</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          alias dolor ipsum animi omnis quae eveniet accusamus dolore error
          nesciunt obcaecati, consectetur autem saepe harum. Quaerat esse
          repellat nobis fugiat.
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
