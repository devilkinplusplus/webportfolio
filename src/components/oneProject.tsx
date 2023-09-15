import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Modal } from "@mui/material";


function OneProject({ project }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
        <img
          src={project?.tumble}
          alt="image2"
          className="group-hover:scale-110 group-hover:opacity-50 duration-500"
        />

        <div className="absolute px-6 bottom-8">
          <h3 className="text-gray-500 group-hover:text-orange-400 group-hover:mb-2 duration-500">
            {project?.title}
          </h3>
          <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gray-500">
            {project?.desc}
          </p>
          
          <div className="absolute flex space-x-8 text-gray-500 opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
            <button
              className="hover:text-orange-bright duration-300"
              type="button"
              onClick={handleOpen}
            >
              Go <ArrowForwardIcon />
            </button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              className="flex items-center justify-center"
            >
              <div className="bg-white p-2 lg:p-8 pb-5 lg:pb-20 rounded-lg w-80 lg:w-256 relative">
                <div className="h-auto overflow-y-auto py-2">
                  <h2 className="font-gemunu text-gray-700 text-lg lg:text-3xl pb-2">
                    {project?.title}
                  </h2>
                  <div className="flex justify-start space-x-3 text-gray-600 font-gemunu text-base lg:text-lg">
                    <div className="flex flex-col gap-y-2">
                      <img
                        src={project?.image}
                        alt={"file"}
                        className="h-56 w-128 object-cover rounded-lg shadow-md transition-transform transform hover:shadow-xl"
                      />
                      <p className="text-left">{project?.desc}</p>
                    </div>
                  </div>
                </div>
                <button
                  className="absolute bottom-2 right-2 bg-red-300 hover:bg-red-400 text-red-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneProject;
