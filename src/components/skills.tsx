import React from "react";
import ProgressBar from "./utilities/progressBar";

function Skills() {
  return (
    <section className="pt-12 lg:pt-24 pb-6 bg-black font-gemunu" id="skills">
      <div className="pl-4 lg:pl-12 text-xl flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="lg:w-2/3">
          {/* Heading */}
          <div className="flex space-x-2 divide-x divide-orange-600 divide-opacity-50 mb-8 pl-1 lg:pl-0 font-gemunu">
            <h2 className="text-gray-500 hover:text-orange-bright duration-500 cursor-pointer text-2xl">
              <span className="uppercase tracking-wider">Skills</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap space-y-3 text-gray-400">
            <ProgressBar bgcolor={"#9D44C0"} completed={90} title={"C#"} />
            <ProgressBar bgcolor={"#F8DE22"} completed={70} title={"Javascript"} />
            <ProgressBar bgcolor={"#0079FF"} completed={65} title={"React"} />
            <ProgressBar bgcolor={"red"} completed={60} title={"Angular"} />
            <ProgressBar bgcolor={"#03045E"} completed={90} title={"Sql Server"} />
            <ProgressBar bgcolor={"#952323"} completed={60} title={"Redis"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
