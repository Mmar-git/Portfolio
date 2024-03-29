import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import RenderModel from "@/components/RenderModel";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import dynamic from "next/dynamic";
const Batmobile = dynamic(() => import("@/components/models/Batmobile"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      
     <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[17%] sm:top-[10%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-5xl xs:text-6xl sm:text-8xl  lg:text-7xl text-accent">
          The Batcave Archives
          </h1>
        </div>
      </div>
      <div className="w-full h-3/6 xs:h-3/4 sm:h-screen absolute top-[45%] sm:top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <Batmobile/>
        </RenderModel>
      </div>
      <ProjectList projects={projectsData} />
    </>
  );
}