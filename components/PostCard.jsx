"use client";

import { useState } from "react";

function PostCard({ date, title, description, link }) {
  const [hover, setHover] = useState(true);

  function handleMouse() {
    setHover(!hover);
  }

  return (
    <a
      href={link}
      className="hover:bg-secondary rounded-xl "
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <div className="flex flex-col justify-center h-fit w-screen lg:w-full box-border p-6 gap-4">
        <p
          className={` border-l-2 pl-4  text-sm lg:text-md  ${
            hover
              ? "text-secondary border-secondary"
              : "text-background border-background"
          } `}
        >
          {date}
        </p>
        <h2 className="text-text text-md lg:text-lg font-bold">{title}</h2>
        <p className="text-primary text-sm lg:text-md ">{description}</p>
        <p className="text-accent  text-sm lg:text-md">&lt;/ Dê uma olhada &gt;</p>
      </div>
    </a>
  );
}

export default PostCard;
