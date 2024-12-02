"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";

const MyCard = () => {
  const [activeTab, setActiveTab] = useState("account-general");
  const [videoSrc, setVideoSrc] = useState("");
  const [error, setError] = useState("");
  const { data: session } = useSession();

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;

      if (fileType.startsWith("video/")) {
        const localVideoURL = URL.createObjectURL(file);
        setVideoSrc(localVideoURL);
        setError("");
      } else {
        setError("Please select a valid video file.");
      }
    }
  };

  return (
    <main className="flex justify-center items-center -mt-80 ml-32">
      <div className="container">
        <h3 className="font-bold mb-4">Card settings</h3>
        <div className="card overflow-y-auto bg-white border rounded-lg shadow-lg">
          <div className="flex flex-wrap -mx-4">
            {/* Menu Lateral */}
            <div className="w-full md:w-1/4 p-4">
              <div className="list-group list-group-flush flex flex-col border-r h-[38rem]">
                <a
                  className={`list-group-item cursor-pointer rounded p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-general"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-general")}
                >
                  General
                </a>
              </div>
            </div>
            {/* Conteúdo Principal */}
            <div className="w-full md:w-3/4 p-4 h-[38rem]">
              <div className="tab-content mb-5">
                {activeTab === "account-general" && (
                  <div
                    className="tab-pane fade show active"
                    id="account-general"
                  >
                    {/* Campos do Formulário */}
                    <div className="flex flex-col mb-2">
                      <span className="text-lg font-bold">Card Title</span>
                      <input
                        type="text"
                        id="title"
                        className="border rounded-md w-56 p-2"
                        defaultValue={(() => {
                          const names = session.user.name.split(" ");
                          return `${names[0]} ${names[names.length - 1]}`;
                        })()}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-lg font-bold">Role</span>
                      <select
                        id="role"
                        className="border rounded-md w-60 p-2 bg-white"
                      >
                        <option value="Dubbing Actor">Dubbing Actor</option>
                        <option value="Translator">Translator</option>
                        <option value="Dubbing Director">
                          Dubbing Director
                        </option>
                        <option value="Project Manager">
                          Project Manager
                        </option>
                        <option value="Dubbing Operator">
                          Dubbing Operator
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-lg font-bold mb-2">Description</span>
                      <textarea
                        id="desc"
                        className="resize-none h-60 w-96 border rounded-md p-2"
                      ></textarea>
                      <span className="text-md font-light">
                        <span className="font-bold">*</span>Make a quick
                        description about your career
                      </span>
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-lg font-bold ">Price</span>
                      <input
                        id="price"
                        className="border rounded-md w-60 p-2 bg-white"
                        placeholder="Price per hour"
                      />
                    </div>
                    <div className="flex flex-col mb-3">
                      <span className="text-lg font-bold ">
                        Short Description
                      </span>
                      <textarea
                        id="desc"
                        className="resize-none h-28 w-96 border rounded-md p-2"
                      ></textarea>
                      <span className="text-md font-light">
                        <span className="font-bold">*</span>Make a shorter
                        description about your interests
                      </span>
                    </div>
                    {/* Campo de vídeo */}
                    <div className="flex flex-col gap-4 mb-4">
                      <label className="form-label block font-bold -mb-2">
                        Video
                      </label>
                      <video
                        controls
                        className="w-[30rem] h-[18rem] flex items-center justify-center object-contain border rounded-md"
                        src={videoSrc}
                      >
                        Seu navegador não suporta o elemento de vídeo.
                      </video>
                      <label className="flex flex-col justify-center items-center border border-dashed border-zinc-500 w-[30rem] cursor-pointer">
                        <p className="mb-3 mt-3 font-bold">Alterar vídeo</p>
                        <input
                          type="file"
                          accept="video/*"
                          className="hidden"
                          onChange={handleVideoChange}
                        />
                      </label>
                      {error && <p className="text-red-500">{error}</p>}
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-lg font-bold ">Country</span>
                      <input
                        id="price"
                        className="border rounded-md w-60 p-2 bg-white"
                        defaultValue={session.user.country}
                      />
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-lg font-bold ">Language</span>
                      <input
                        id="price"
                        className="border rounded-md w-60 p-2 bg-white"
                        defaultValue={session.user.lang}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Botões de Ação */}
        <div className="text-right mt-3">
          <button
            type="button"
            className="btn btn-primary bg-[#17a2b8] text-white py-2 px-4 rounded-md"
          >
            Save changes
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-default border border-gray-300 bg-transparent text-gray-700 py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

export default MyCard;
