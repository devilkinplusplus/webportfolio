import React from "react";

function Footer() {

  const handleClick = () => {
    alert("Just for fun :)")
  }

  return (
    <footer className="bg-black text-gray-500">
      <div className="px-2 lg:pl-12 flex flex-col space-y-2 md:flex-row pb-8">
        <div className="basis-1/3">
          <a
            href="#home"
            className="text-2xl lg:text-3xl uppercase font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-pro via-orange-bright to-orange-400"
          >
            Devilkin
          </a>
          <p className="text-sm mt-2">2023 Devilkin No &copy; COPYRIGHT</p>
        </div>
        <div className="basis-1/3">
          <h2 className="mb-2 text-orange-pro text-lg">LINKS</h2>
          <div className="grid grid-cols-5 gap-2 uppercase">
            <a
              className="col-span-2 hover:text-orange-bright duration-500"
              href="#home"
            >
              Home
            </a>
            <a
              className="col-span-2 hover:text-orange-bright duration-500"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="col-span-2 hover:text-orange-bright duration-500"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="col-span-2 hover:text-orange-bright duration-500"
              href="#about"
            >
              About
            </a>
          </div>
        </div>
        <div className="basis-1/3">
          <h2 className="mb-2 text-orange-pro">FOLLOW US</h2>
          <form action="" className="flex">
            <input required
              className="py-1 px-2 bg-transparent border border-orange-bright placeholder:text-xs outline-none"
              placeholder="TYPE YOUR EMAIL"
              type="text"
            />
            <button type="button" onClick={handleClick}  className="py-1 px-2 border border-orange-bright hover:text-orange-bright duration-500 font-gemunu uppercase">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
