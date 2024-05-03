// @flow strict
import { userData } from "@/data/user-data";
import Image from "next/image";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";

function GitStats() {
  return (
    <div id="stats" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="GitHub Statistics" />

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <GlowCard identifier="profile-details">
            <Image
              src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${userData.githubUser}&theme=algolia`}
              width={1080}
              height={520}
              alt="github profile-details"
              className="rounded-lg"
            />
          </GlowCard>
        </div>

        <>
          <GlowCard identifier="github-stats">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${userData.githubUser}&show_icons=true&include_all_commits=true&theme=algolia&hide_border=true`}
              width={1080}
              height={520}
              alt="github stats"
            />
          </GlowCard>
          <GlowCard identifier="github-stats-2">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${userData.githubUser}&show_icons=true&include_all_commits=true&theme=algolia&hide_border=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&hide=stars,commits,prs,issues,contribs`}
              width={1080}
              height={520}
              alt="github stats"
              className="rounded-lg"
            />
          </GlowCard>
        </>

        <>
          <GlowCard identifier="repos-per-language">
            <Image
              src={`http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${userData.githubUser}&theme=algolia`}
              width={1080}
              height={560}
              alt="github repos-per-language"
              className="rounded-lg lg:h-64 w-full bg-primary-bg"
            />
          </GlowCard>

          <GlowCard identifier="most-commit-language">
            <Image
              src={`http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${userData.githubUser}&theme=algolia`}
              width={1080}
              height={560}
              alt="github most-commit-language"
              className="rounded-lg lg:h-64 w-full bg-primary-bg"
            />
          </GlowCard>
        </>

        <GlowCard identifier="top-langs">
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userData.githubUser}&layout=compact&theme=algolia&hide_border=true&&langs_count=8`}
            width={1080}
            height={560}
            alt="github top-langs"
            className="rounded-lg md:h-52 lg:h-64 w-full bg-primary-bg"
          />
        </GlowCard>
        <div className="h-full">
          <GlowCard identifier="productive-time">
            <Image
              src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${userData.githubUser}&theme=algolia&utcOffset=${userData.timezone}`}
              width={1080}
              height={560}
              alt="github productive-time"
              className="rounded-lg md:h-52 lg:h-64 w-full bg-primary-bg"
            />
          </GlowCard>
        </div>

        <Image
          src={`https://stardev.io/developers/${userData.githubUser}/badge/languages/locality.svg`}
          width={1080}
          height={520}
          alt="github locality"
          className="rounded-lg"
        />
        <Image
          src={`https://stardev.io/developers/${userData.githubUser}/badge/languages/global.svg`}
          width={1080}
          height={520}
          alt="github global"
          className="rounded-lg"
        />

        <div className="md:col-span-2 flex justify-center">
          <GlowCard identifier="streak">
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${userData.githubUser}&theme=algolia&hide_border=true`}
              width={1080}
              height={520}
              alt="github streak"
              className="max-h-60 bg-primary-bg"
            />
          </GlowCard>
        </div>
      </div>
    </div>
  );
};

export default GitStats;