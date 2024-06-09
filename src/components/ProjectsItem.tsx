import { ReactNode } from "react";
import "./ProjectsItem.css";

export interface ProjectItemInterface {
  title: string;
  description: string;
  url: string;
  children: ReactNode;
}

function ProjectItem({
  title,
  description,
  children,
  url,
}: ProjectItemInterface) {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="project-box">
      <div className="project-info">
        {children}
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
