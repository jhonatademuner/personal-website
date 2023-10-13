"use client";

import React, { useEffect, useState } from "react";

import { RiMailSendFill } from "react-icons/ri";

function Subscription() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add a resize event listener to update window dimensions
    window.addEventListener("resize", handleResize);

    // Initial dimensions
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowDimensions.width > 1024 && (
        <form className="flex flex-col justify-center h-fit max-w-[384px] w-auto box-border border-2 border-secondary p-6 rounded-xl ">
          <p className="text-text">
            Se inscreva para receber notificações sobre novos posts ou projetos.
            Não se preocupe, não enviarei spam.
          </p>
          <div className="flex w-full mt-4">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="bg-transparent border-2 border-secondary rounded-l-lg p-2 text-primary w-4/5 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-secondary text-background text-2xl px-4 py-2 rounded-r-lg"
            >
              <RiMailSendFill />
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Subscription;
