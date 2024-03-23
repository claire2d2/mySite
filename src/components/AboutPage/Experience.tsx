import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  expDate: string;
  companyName: string;
  companyUrl: string;
  companyLogo: string;
  children: ReactNode;
}

const Experience: React.FC<Props> = ({
  expDate,
  companyName,
  companyUrl,
  companyLogo,
  children,
}) => {
  return (
    <div className="Experience flex flex-row py-6 bg-gray-200">
      <div className="basis-1/6 pl-4">
        <h4 className="font-medium text-1xl text-center w-full">{expDate}</h4>
        <Link to={companyUrl} target="_blank">
          <img className="h-20" src={companyLogo} alt={`${companyName} logo`} />
          <p className="text-center">{companyName}</p>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Experience;
