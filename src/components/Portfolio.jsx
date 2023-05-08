import React from "react";

import bloodbuddy from "../assets/portfolio/bb.jpg";
import imdb from "../assets/portfolio/imdb.jpg";
import usabilityhub from "../assets/portfolio/usability.jpg";
import crypto from "../assets/portfolio/crypto.jpg";
import chatgpt from "../assets/portfolio/chatgpt.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: usabilityhub,
      title: "Usabilityhub clone",
      demo: "https://ui-clone-of-usabilityhub.netlify.app/",
      code: "https://github.com/KedarMH/UI-clone-of-usabilityhub",
    },
    {
      id: 2,
      src: imdb,
      title: "IMDB clone",
      demo: "https://imdb-clonesite.netlify.app/",
      code: "https://github.com/KedarMH/IMDB_app",
    },
    {
      id: 3,
      src: bloodbuddy,
      title: "BloodBuddy",
      demo: "https://bloodbuddy.netlify.app/",
      code: "https://github.com/KedarMH/BloodBuddy-project",
    },
    {
      id: 4,
      src: crypto,
      title: "Crypto Price Tracker",
      demo: "https://cryptofinancepricetracker.netlify.app/",
      code: "https://github.com/KedarMH/Cryptocurrency-Price-Tracker",
    },
    {
      id: 5,
      src: chatgpt,
      title: "Chat-GPT AI App",
      demo: "https://chat-gpt-app-kedarmh.vercel.app/",
      code: "https://github.com/KedarMH/Chat_GPT-app",
    },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen  text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <div className=" w-fit p-2 ">
                <h2 className="text-center font-semibold text-purple-500 underline decoration-sky-500 underline-offset-4">
                  {title}
                </h2>
              </div>

              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-1 m-4 duration-300 hover:scale-110"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-1 m-4 duration-300 hover:scale-110"
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
