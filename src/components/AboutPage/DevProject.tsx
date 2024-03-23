import React, { ReactNode } from "react";
interface Props {
  projectTitle: string; // Define the type of the projectTitle prop
  projectGitHub: string;
  projectLink: string;
  children: ReactNode;
}

const DevProject: React.FC<Props> = ({
  projectTitle,
  projectGitHub,
  projectLink,
  children,
}) => {
  return (
    <div className="DevProject py-3">
      <h3 className="font-medium text-2xl py-2">{projectTitle}</h3>
      <div>
        Link to the Github{" "}
        <a href={projectGitHub} target="_blank">
          here
        </a>
      </div>
      <div>
        Link to the project{" "}
        <a href={projectLink} target="_blank">
          here
        </a>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DevProject;
