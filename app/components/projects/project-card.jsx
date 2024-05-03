import { colors } from "@/data/colors";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";

// @flow strict
function ProjectCard({ project }) {

  return (
    <Link href={project.html_url} target="_blank">
      <div className="p-8 h-48 flex flex-col justify-between bg-primary-bg">
        <div className="">
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold capitalize text-primary-title">
              {project.name}
            </p>
            <IoLinkSharp className="text-primary-icon text-xl" />
          </div>
          <p className="line-clamp-2 text-primary-text my-5 text-sm">
            {project.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              <FaRegStar className="text-primary-icon" />
              <span>{project.stargazers_count}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaCodeFork className="text-primary-icon" />
              <span>{project.forks_count}</span>
            </p>
          </div>
          <p className="flex items-center gap-2">
            <span
              style={{ backgroundColor: colors[project.language] }}
              className="w-3 h-3 rounded-full"></span>
            <span className="text-primary-text text-sm">{project.language}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;