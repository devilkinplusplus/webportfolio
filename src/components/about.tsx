import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

function About() {
  return (
    <section className="pt-12 lg:pt-24 pb-6 bg-black font-gemunu" id="about">
      <div className="px-2 lg:pl-12 text-xl flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="lg:w-2/3">
          <div className="flex space-x-2 divide-x divide-orange-600 divide-opacity-50 mb-8 pl-1 lg:pl-0 font-gemunu">
            <h2 className="text-gray-500 hover:text-orange-bright duration-500 cursor-pointer text-2xl">
              <span className="uppercase tracking-wider">About</span>
            </h2>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg m-0 p-6 font-gemunu">
            <img
              className="w-32 h-32 rounded-full mx-auto md:float-left md:mr-4 object-cover"
              src="me.jpeg"
              alt="Profile"
            />
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-white text-2xl font-semibold tracking-wider">
                Ilkin Rufullayev
              </h2>
              <p className="text-gray-400 text-sm">Software Developer</p>
              <p className="text-gray-300 mt-2">
                Coding the Future: My Software Engineering Journey
              </p>
              <div className="flex justify-center lg:justify-start items-center flex-wrap mt-2 sm:justify-center">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/ilkin-rufullayev-923628240/"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-1 rounded-lg duration-500"
                >
                  <LinkedInIcon /> Linkedin
                </a>
                <a
                rel="noreferrer"
                  target="_blank"
                  href="https://github.com/devilkinplusplus"
                  className="bg-gray-900 hover:bg-gray-950 text-white px-4 py-2 mr-1 rounded-lg duration-500"
                >
                  <GitHubIcon /> Github
                </a>
                <a
                 rel="noreferrer"
                  target="_blank"
                  href="mailto:rufullayevilkin66@gmail.com"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mr-1 rounded-lg duration-500"
                >
                  <MailIcon /> Gmail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
