// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection({ profile }) {
  
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="flex flex-col items-start justify-center rounded-lg p-3 lg:py-5 lg:px-12 bg-[#050f2c] h-full">
          <div className="flex w-full justify-center">
            <Image
              src={profile.avatar_url}
              width={128}
              height={128}
              alt={profile.name}
              className="rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>
          <p className="text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center">
            {profile.bio}
          </p>

          <div className="w-full flex justify-center items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={24} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-teal-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={24} />
            </Link>
          </div>

          <div className="w-full justify-center flex items-center gap-3 mt-6">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-4 py-2 md:py-2.5 bg-[#0d1224] rounded-full border-none text-center font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-4 py-2 md:py-2.5 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>

        <div className="h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{profile.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">company:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{profile.company}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">location:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{profile.location}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">followers:</span>
                <span className="text-orange-400">{profile.followers}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">following:</span>
                <span className="text-orange-400">{profile.following}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">repositories:</span>
                <span className="text-orange-400">{profile.public_repos}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-cyan-400">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">Postgres</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-cyan-400">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hireable:</span>
                <span className="text-orange-400">{profile?.hireable.toString()}</span>
                <span className="text-gray-400">,</span>
              </div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;