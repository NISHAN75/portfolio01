import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  console.log(project);
  const { id, name, img, deception, Live, client, server } = project;
  return (
    <div class="card card-compact lg:w-96 bg-white shadow-xl mb-10">
      <div class="card-body text-black">
        <div className="img">
          <img src={img} alt="bicycles.png" />
        </div>
        <h2 class="card-title ">{name}</h2>
        <p>{deception}</p>
        <div className="btn-area flex justify-center items-end ">
          <button className="btn-two mt-10">
            <div className="btn-content">
              <span className="bg"></span>
              <span className="base"></span>
              <span className="text">
                <a
                  className="font-bold live-link cursor-pointer text-secondary"
                  href={Live}
                >
                  Live
                </a>
              </span>
            </div>
          </button>
          <button className="btn-two mt-10">
            <div className="btn-content">
              <span className="bg"></span>
              <span className="base"></span>
              <span className="text">
                <a
                  className="font-bold live-link cursor-pointer text-secondary"
                  href={client}
                >
                  client
                </a>
              </span>
            </div>
          </button>
          {
            server ? <button className="btn-two mt-10">
            <div className="btn-content">
              <span className="bg"></span>
              <span className="base"></span>
              <span className="text">
                <a
                  className="font-bold live-link cursor-pointer text-secondary"
                  href={server}
                >
                  server
                </a>
              </span>
            </div>
          </button>: ""
          }
        </div>
      </div>
    </div>
  );
};

export default Project;
