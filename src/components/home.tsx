import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Home() {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = '/mycv.pdf';
    link.download = 'Ilkin_Rufullayev_Cv.pdf';
    link.click();
  }

  return (
    <section className="h-[400px] lg:h-[600px] group relative uppercase font-gemunu" id="home">
      <img
        src="/ninja.jpg"
        alt="ninja"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
        <div className="pl-5 lg:pl-10 pb-2 lg:pb-10">
          <h3 className="text-orange-bright tracking-wider group-hover:mb-1 duration-500">
            Software Engineer
          </h3>
          <h1 className="text-3xl lg:text-6xl text-gray-500 group-hover:mb-1 duration-500">
            Ilkin Rufullayev
          </h1>
          <p className="text-gray-400 group-hover:mb-2 duration-500 text-sm lg:text-base w-full lg:w-2/3">
            Building innovative software solutions that transform ideas into reality is my passion.
          </p>

          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-0 duration-1000">
            {/* Download Cv */}
            <div className="flex space-x-2 items-center cursor-pointer">
              <span onClick={downloadResume} className="cursor-pointer text-gray-500 uppercase text-sm lg:text-lg hover:text-orange-bright duration-500">
                Download Cv
              </span>
              <div className="flex h-8 w-8 rounded-full text-center items-center justify-center bg-orange-bright text-white">
                <PlayArrowIcon />
              </div>
            </div>

            {/* About me */}
            <div className="flex space-x-2 items-center cursor-pointer">
              <a href="#about" className="cursor-pointer text-gray-500 uppercase text-sm lg:text-lg hover:text-orange-bright duration-500">
                About me
              </a>
              <div className="flex h-8 w-8 rounded-full text-center items-center justify-center bg-orange-bright text-white">
                <PlayArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
