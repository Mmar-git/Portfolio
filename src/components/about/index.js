import React from "react";
import ItemLayout from "./ItemLayout";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
          Darkweb Artisan
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          In my quest through the digital realm, I harness the power of JavaScript as my primary tool, weaving intricate webs of enchantment. With frameworks like React.js and Next.js as my arsenal, I construct seamless portals that unite users across the vast expanse of the internet. Employing the ancient wisdom of the Jamstack, I forge swift, impenetrable, and ever-evolving experiences. My design prowess ensures that each creation is not merely functional, but an awe-inspiring spectacle. Join me in my relentless pursuit of new technologies and techniques as we shape the destiny of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2 <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mmar-git&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
            alt="Most Used Languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Mmar-git&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
            alt="Git Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Icons"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full !p-0"}>
        <img src="https://github-readme-streak-stats.herokuapp.com?user=Mmar-git&theme=dark&hide_border=true&type=png&background=FF5B5B00&ring=FFFFFF&currStreakNum=FFFFFF&currStreakLabel=FFFFFF&fire=FFFFFF" alt="GitHub Streak" />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=Mmar-git&repo=github-readme-stats&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
            alt="Git Stats"
            loading="lazy"
          />
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;