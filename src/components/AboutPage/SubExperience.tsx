import React, { ReactNode } from "react";

interface Props {
  expTitle: string;
  expDateDetails: string;
  children: ReactNode;
}
const SubExperience: React.FC<Props> = ({
  expTitle,
  expDateDetails,
  children,
}) => {
  return (
    <div className="basis-5/6 py-4">
      <h3 className="font-medium text-2xl">{expTitle}</h3>
      <p>{expDateDetails}</p>
      <p>{children}</p>
    </div>
  );
};

export default SubExperience;
