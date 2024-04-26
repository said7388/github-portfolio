import { personalData } from "@/utils/data/personal-data";
import Blog from "./components/homepage/blog";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  return filtered;
};

async function getGitProfile() {
  const res = await fetch(`https://api.github.com/users/${personalData.githubUser}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${personalData.githubUser}+fork:false&sort=stars&per_page=10&type=Repositories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};


export default async function Home() {
  const blogs = await getData();
  const profile = await getGitProfile();
  const projects = await getGitProjects();

  return (
    <>
      <HeroSection profile={profile} />
      <Projects
        projects={projects.items}
        profile={profile}
      />
      <Blog blogs={blogs} />
    </>
  )
};

export async function generateMetadata({ params, searchParams }, parent) {
  const profile = await getGitProfile();

  return {
    title: `GitHub Profile of ${profile.name}`,
    description: profile.description,
  };
};