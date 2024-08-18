import React from "react";
import mew from "./mew.png";
import "../../App.css";

const HomePage = () => {
  return (
    <div className="container-home flex flex-col justify-center items-center h-screen bg-orange-200 w-100%">
      <div className="head mb-20">
        <h1 className="text-center text-3xl font-bold w-full">Home Page</h1>
      </div>
      <div className="img-icon absolute left-2 bottom-2 w-52 h-72">
        <img src={mew} alt="Mew" className="mx-auto" />
      </div>
      <div className="img-icon-right absolute right-2 bottom-2 w-52 h-72">
        <img src={mew} alt="Mew" className="mx-auto" />
      </div>
      <div className="content-wrapper rounded-md">
        <div className="infomation">
          <h2>Nguyễn Đăng Hưng</h2>
          <p>
            Phone:{" "}
            <a href="tel+84966182216" className="text-blue-500 underline">
              0966182216
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:danghung2216@gmail.com"
              className="text-blue-500 underline"
            >
              danghung2216@gmail.com
            </a>
          </p>
        </div>
        <div className="projects">
          <h1 className="text-center font-bold text-2xl">
            Một số project cá nhân
          </h1>
          <div className="list">
            <p>
              <a
                href="https://github.com/danghung2216/React-Todo-List.git"
                className="text-blue-500 underline"
              >
                To Do List
              </a>
              - Sử dụng: Vite+react, Mui, css
            </p>
            <p>
              <a
                href="https://github.com/danghung2216/React-Manage-Users.git"
                className="text-blue-500 underline"
              >
                Manage User
              </a>
              - Sử dụng: Vite+react, Tailwind, css
            </p>
            <p>
              <a
                href="https://github.com/danghung2216/React-Quiz-App.git"
                className="text-blue-500 underline"
              >
                Quiz App:
              </a>
              - Sử dụng: Vite+react, css
            </p>
            <p>
              <a
                href="https://github.com/danghung2216/weather-app-react.git"
                className="text-blue-500 underline"
              >
                Weather App:
              </a>
              - Sử dụng: Vite+react, css, tailwind
            </p>
            <p>
              <a
                href="https://github.com/danghung2216/React-Drawing.git"
                className="text-blue-500 underline"
              >
                Drawing:
              </a>
              - Sử dụng: Vite+react, css, tailwind, canvas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
