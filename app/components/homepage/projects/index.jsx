import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import GlowCard from '../../helper/glow-card';
import ProjectCard from './project-card';

const Projects = ({ projects, profile }) => {

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -mt-6">
        <div className="flex  items-center h-12">
          <span className="w-20 h-[1px] bg-gradient-to-r from-transparent to-violet-500"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-3 md:px-6 text-xl rounded-md">
            Git Projects
          </span>
          <span className="w-20 h-[1px] bg-gradient-to-r from-violet-500 to-transparent"></span>
        </div>
      </div>

      <div className="grid py-12 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {
          projects.map(project => (
            <GlowCard key={project.id} identifier={`project-${project.id}`}>
              <ProjectCard project={project} />
            </GlowCard>
          ))
        }
      </div>

      <div className="w-full justify-center flex items-center">
        <Link href={profile.html_url} target='_blank' className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
          <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
            <span>View All Project</span>
            <FaLongArrowAltRight size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;