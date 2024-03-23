import { NavHashLink } from "react-router-hash-link";
import "./AboutPage.css";
interface Props {
  activeAboutDiv: string;
}

const SideBar: React.FC<Props> = ({ activeAboutDiv }) => {
  const inactiveStyle = "text-3xl text-gray-500";
  const activeStyle = "text-4xl text-red-700 py-5";
  const generalStyle = "py-3";

  return (
    <aside className="SideBar h-full flex flex-col justify-center items-center basis-1/3 top-0 bg-white">
      <div className="inline-block align-text-bottom">
        <NavHashLink smooth to="#about">
          <p
            className={activeAboutDiv === "about" ? activeStyle : inactiveStyle}
          >
            About
          </p>
        </NavHashLink>
        <NavHashLink smooth to="#projects">
          <p
            className={
              activeAboutDiv === "projects" ? activeStyle : inactiveStyle
            }
          >
            Projects
          </p>
        </NavHashLink>
        <NavHashLink smooth to="#exp">
          <p className={activeAboutDiv === "exp" ? activeStyle : inactiveStyle}>
            Professional Experiences
          </p>
        </NavHashLink>
      </div>
    </aside>
  );
};

export default SideBar;
