import React, { memo } from "react";
import projects from '../utilities/db/projects.json'
import OneProject from "./oneProject";
import { Project } from "../utilities/consts/project";

function Projects() {
  return (
    <section className="pt-12 lg:pt-24 pb-3 lg:pb-6 bg-black font-gemunu" id="projects">
      <div className="px-2 lg:pl-12 text-xl flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="basis-2/3">
           {/* Heading */}
          <div className="flex flex-wrap space-x-2 divide-x divide-orange-600 divide-opacity-50 mb-8 pl-1 lg:pl-0">
            <h2 className="text-gray-500 hover:text-orange-bright duration-500 cursor-pointer text-2xl">
              <span className="uppercase tracking-wider">Projects</span>
            </h2>
          </div>
          {/* Project */}
          <div className="flex flex-wrap gap-y-2">
            {/* Project */}
            {projects.map((val:Project,index)=>{
              return <OneProject key={index} project={val}/>
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
