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
      <div className="flex flex-col justify-center h-fit w-full box-border p-6 gap-4">
        <p
          className={` border-l-2 pl-4  ${
            hover
              ? "text-secondary border-secondary"
              : "text-background border-background"
          } `}
        >
          {date}
        </p>
        <h2 className="text-text text-lg font-bold">{title}</h2>
        <p className="text-primary ">{description}</p>
        <p className="text-accent">&lt;/ Dê uma olhada &gt;</p>
      </div>
    </a>
  );
}

export default PostCard;
