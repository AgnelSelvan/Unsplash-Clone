import React, { useState } from "react";

export default function Image({ index, image, handleRemove }) {
  const [isHovering, setIsHovering] = useState(false);
  const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        console.log(response);
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="p-2 flex justify-center">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="  absolute right-0 cursor-pointer">
          <div className={`w-full flex flex-row my-2 h-full  ${
                isHovering ? "" : "hidden"
              }`}>
            {/* <div className={` opacity-25 hover:opacity-100`}>
              <i className="fas fa-times text-gray "
                onClick={() => handleRemove(index)}></i>
            </div> */}
              <div className={` border border-gray-200 px-2 py-1 my-2 rounded-md mx-1 bg-gray-200`}>
                <i class="far fa-heart text-gray-700"></i>
              </div>
              <div className={` border border-gray-200 px-2 py-1 my-2 rounded-md mx-2 bg-gray-200`}>
                <i className="fas fa-plus text-gray-700"></i>
              </div>
              <div className={` border border-gray-200 hover:text-red-500 hover:bg-white bg-red-500 px-2 py-1 my-2 rounded-md mx-1  border-none text-gray-300`}
                  onClick={() => handleRemove(index)}>
                <i className="fas fa-times text-gray "></i>
              </div>
            </div>
        </div>
        <div className="  absolute bottom-0 right-0 mx-4 my-4 cursor-pointer">
          <div className={`w-full flex flex-row my-2 h-full  ${
                isHovering ? "" : "hidden"
              }`}>
              <div className={` border border-gray-200 px-2 py-1 rounded-md mx-1 bg-gray-200`}>
                <a class="fas fa-arrow-down text-sm  text-gray-700" href={image} download onClick={e => download(e)}></a>
              </div>
            </div>
        </div>
        <img width="100%" height="auto" src={image} alt="React" />
      </div>
    </div>
  );
}
