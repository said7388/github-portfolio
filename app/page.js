import { personalData } from "@/utils/data/personal-data";
import Contributions from "./components/homepage/contributions";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import GitStats from "./components/homepage/stats";

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
  const profile = await getGitProfile();
  const projects = await getGitProjects();

  return (
    <>
      <HeroSection profile={profile} />
      <Projects
        projects={projects.items}
        profile={profile}
      />
      <GitStats />
      <Contributions />
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