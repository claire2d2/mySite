import { NavHashLink } from "react-router-hash-link";

const SideBar = () => {
  const SideBarText = "text-red-800 text-4xl p-6";
  return (
    <aside className="SideBar h-full flex flex-col justify-center items-center basis-1/3 top-0 bg-white">
      <div className="inline-block align-text-bottom">
        <NavHashLink smooth to="#about">
          <p className={SideBarText}>About</p>
        </NavHashLink>
        <NavHashLink smooth to="#projects">
          <p className={SideBarText}>Projects</p>
        </NavHashLink>
        <NavHashLink smooth to="#exp">
          <p className={SideBarText}>Professional Experiences</p>
        </NavHashLink>
        <p className={SideBarText}>Other</p>
      </div>
    </aside>
  );
};

export default SideBar;
