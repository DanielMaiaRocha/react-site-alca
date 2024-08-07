"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const ProfileHero = () => {
  const [activeTab, setActiveTab] = useState("account-general");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { data: session, status } = useSession();

  const [videoSrc, setVideoSrc] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState("");

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType.startsWith("video/")) {
        const videoURL = URL.createObjectURL(file);
        setVideoSrc(videoURL);
        setVideoFile(file);
        setError("");
      } else {
        setError("Please select a valid video file.");
      }
    }
  };
  const [commentNotification, setCommentNotification] = useState(true);
  const [forumNotification, setForumNotification] = useState(true);
  const [followNotification, setFollowNotification] = useState(false);
  const [newsAnnouncements, setNewsAnnouncements] = useState(true);
  const [productUpdates, setProductUpdates] = useState(false);
  const [blogDigest, setBlogDigest] = useState(true);
  const [webNotification, setNotification] = useState(false);
  const [eNotification, setENotification] = useState(false);
  const [smsNotification, setsmsNotification] = useState(false);

  return (
    <main className="flex justify-center items-center -mt-80 ml-32">
      <div className="container">
        <h3 className="font-bold mb-4">Account settings</h3>
        <div className="card overflow-y-auto bg-white border rounded-lg shadow-lg">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 p-4">
              <div className="list-group list-group-flush flex flex-col border-r h-[38rem]">
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-general"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-general")}
                >
                  General
                </a>
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-change-password"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-change-password")}
                >
                  Change password
                </a>
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-info"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-info")}
                >
                  Info
                </a>
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-social-links"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-social-links")}
                >
                  Social links
                </a>
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-connections"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-connections")}
                >
                  Connections
                </a>
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-notifications"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-notifications")}
                >
                  Notifications
                </a>
              </div>
            </div>
            <div className="w-full md:w-3/4 p-4 h-[38rem] ">
              <div className="tab-content">
                {activeTab === "account-general" && (
                  <div
                    className="tab-pane fade show active"
                    id="account-general"
                  >
                    <div className="card-body flex items-center">
                      <Image
                        src="/images/profile-bg.png"
                        alt="/"
                        width={100}
                        height={100}
                      />
                      <div className="ml-4">
                        <label className="relative cursor-pointer inline-flex items-center border border-[#17a2b8] hover:bg-[#17a2b8] hover:text-white p-2 rounded text-lg font-bold">
                          Upload new photo
                          <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </label>
                        &nbsp;
                        <button
                          type="button"
                          className="ml-2 bg-[#17a2b8] p-2 text-lg font-bold rounded text-white"
                        >
                          Reset
                        </button>
                        <div className="text-slate-500 text-sm mt-1">
                          Allowed JPG, GIF or PNG. Max size of 800K
                        </div>
                      </div>
                    </div>
                    <hr className="border-gray-200 m-0 w-[70rem]" />
                    <div className="card-body">
                      <div className="form-group mt-4">
                        <label className="form-label block">Name</label>
                        <input
                          type="text"
                          className="form-control w-96 px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue={session.user.name}
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label className="form-label block">E-mail</label>
                        <input
                          type="text"
                          className="form-control w-[30rem] px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue={session.user.email}
                          disabled
                        />
                        <div
                          className="alert alert-warning mt-3 bg-blue-200 border-l-4 border-blue-500 text-blue-700 p-4 w-[30rem]"
                          role="alert"
                        >
                          Your email is not confirmed. Please check your inbox.
                          <br />
                          <a href="javascript:void(0)" className="underline">
                            Resend confirmation
                          </a>
                        </div>
                      </div>
                      <div className="form-group mt-2 mb-3">
                        <label className="form-label block">Role</label>
                        <select className="rounded border border-gray-300 w-96 p-2 ">
                          <option value="/">Choose your profession:</option>
                          <option value="dubbing-actor">Dubbing Actor</option>
                          <option value="dubbing-director">
                            Dubbing Director
                          </option>
                          <option value="project-manager">
                            Project Manager
                          </option>
                          <option value="revisor">Revisor</option>
                          <option value="director">Director</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "account-change-password" && (
                  <div className="tab-pane fade" id="account-change-password">
                    <div className="card-body pb-2">
                      <div className="form-group mb-4 w-96">
                        <label className="form-label block">
                          Current password
                        </label>
                        <input
                          type="password"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="form-group mb-4 w-96">
                        <label className="form-label block">New password</label>
                        <input
                          type="password"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="form-group mb-4 w-96">
                        <label className="form-label block">
                          Repeat new password
                        </label>
                        <input
                          type="password"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "account-info" && (
                  <div className="tab-pane fade" id="account-info">
                    <div className="card-body pb-2">
                      <div className="form-group mb-4 w-[50rem]">
                        <label className="form-label block font-bold mb-4">
                          Description
                        </label>
                        <textarea
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                          rows="5"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."
                        />
                      </div>
                      <div className="flex flex-col gap-4 mb-4">
                        <label className="form-label block font-bold -mb-5">
                          Video
                        </label>
                        <video
                          controls
                          className="w-[50rem] h-[32rem] flex items-center justify-center object-contain"
                        >
                          <source src={videoSrc} />
                        </video>
                        <label className="flex flex-col justify-center items-center border border-dashed border-zinc-500 w-[50rem]">
                          <p className="mb-3 mt-3 font-bold">Alterar video</p>
                          <input
                            type="file"
                            accept="video/*"
                            className="mb-4 file:mr-4 file:py-2 file:rounded-lg file:border-0 file:text-blue-700 file:bg-blue-200"
                            onChange={handleVideoChange}
                          />
                        </label>
                        {error && <p className="text-red-500">{error}</p>}
                      </div>
                    </div>
                    <hr className="border-gray-200 m-0 w-[65rem]" />
                    <div className="card-body pb-2">
                      <h6 className="mb-4 font-bold">Contacts</h6>
                      <div className="form-group mb-4 w-[30rem] ">
                        <label className="form-label block">Phone</label>
                        <input
                          type="text"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue="+0 (123) 456 7891"
                        />
                      </div>
                      <div className="form-group mb-4 w-[30rem]">
                        <label className="form-label block">Website</label>
                        <input
                          type="text"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "account-social-links" && (
                  <div className="tab-pane fade" id="account-social-links">
                    <div className="card-body pb-2">
                      <div className="form-group mb-4 w-[30rem]">
                        <label className="form-label block">Twitter</label>
                        <input
                          type="text"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue="https://twitter.com/user"
                        />
                      </div>
                      <div className="form-group mb-4 w-[30rem]">
                        <label className="form-label block">Facebook</label>
                        <input
                          type="text"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="form-group mb-4 w-[30rem]">
                        <label className="form-label block">Google+</label>
                        <input
                          type="text"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="form-group mb-4 w-[30rem]">
                        <label className="form-label block">LinkedIn</label>
                        <input
                          type="text"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="form-group mb-4 w-[30rem]">
                        <label className="form-label block">Instagram</label>
                        <input
                          type="text"
                          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue="https://instagram.com/user"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "account-connections" && (
                  <div className="tab-pane fade" id="account-connections">
                    <div className="card-body pb-2">
                      <h5 className="mb-2 flex justify-between text-gray-500">
                        <span className="flex items-center">
                          <i className="ion ion-logo-google text-red-500 mr-2"></i>
                          You are connected to Google:
                        </span>
                        <a
                          href="javascript:void(0)"
                          className="text-tiny text-gray-500 hover:text-gray-700"
                        >
                          Remove
                        </a>
                      </h5>
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="text-blue-600"
                      >
                        [email&#160;protected]
                      </a>
                    </div>
                    <hr className="border-gray-200 w-[70rem] mb-2" />
                    <div className="card-body flex justify-center items-center">
                      <button
                        type="button"
                        className="btn btn-facebook bg-blue-500 text-white w-[30rem] py-2 mb-2"
                      >
                        Connect to <strong>Facebook</strong>
                      </button>
                    </div>
                    <hr className="border-gray-200 w-[70rem] mb-2" />
                    <div className="card-body flex justify-center items-center">
                      <button
                        type="button"
                        className="btn btn-instagram bg-black text-white w-[30rem] py-2"
                      >
                        Connect to <strong>Instagram</strong>
                      </button>
                    </div>
                  </div>
                )}
                {activeTab === "account-notifications" && (
                  <div className="tab-pane fade" id="account-notifications">
                    <div className="card-body pb-2">
                      <h6 className="mb-4 font-bold">Activity</h6>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={commentNotification}
                            onChange={() =>
                              setCommentNotification(!commentNotification)
                            }
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              commentNotification
                                ? "bg-[#17a2b8]"
                                : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                commentNotification
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            Email me when someone comments on my article
                          </span>
                        </label>
                      </div>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={forumNotification}
                            onChange={() =>
                              setForumNotification(!forumNotification)
                            }
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              forumNotification ? "bg-[#17a2b8]" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                forumNotification
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            Email me when someone answers on my forum thread
                          </span>
                        </label>
                      </div>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={followNotification}
                            onChange={() =>
                              setFollowNotification(!followNotification)
                            }
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              followNotification
                                ? "bg-[#17a2b8]"
                                : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                followNotification
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            Email me when someone follows me
                          </span>
                        </label>
                      </div>
                    </div>
                    <hr className="border-gray-200 m-0" />
                    <div className="card-body pb-2">
                      <h6 className="mb-4 font-bold">Application</h6>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={newsAnnouncements}
                            onChange={() =>
                              setNewsAnnouncements(!newsAnnouncements)
                            }
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              newsAnnouncements ? "bg-[#17a2b8]" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                newsAnnouncements
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            News and announcements
                          </span>
                        </label>
                      </div>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={productUpdates}
                            onChange={() => setProductUpdates(!productUpdates)}
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              productUpdates ? "bg-[#17a2b8]" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                productUpdates
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            Weekly product updates
                          </span>
                        </label>
                      </div>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={blogDigest}
                            onChange={() => setBlogDigest(!blogDigest)}
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              blogDigest ? "bg-[#17a2b8]" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                blogDigest
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            Weekly blog digest
                          </span>
                        </label>
                      </div>
                    </div>
                    <hr className="border-gray-200 m-0" />
                    <div className="card-body pb-2">
                      <h6 className="mb-4 font-bold">Notifications</h6>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={webNotification}
                            onChange={() => setNotification(!webNotification)}
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              webNotification ? "bg-[#17a2b8]" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                webNotification
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            Revice notifications in WhatsApp
                          </span>
                        </label>
                      </div>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={eNotification}
                            onChange={() => setENotification(!eNotification)}
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              eNotification ? "bg-[#17a2b8]" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                eNotification
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            Revice notifications in E-mail
                          </span>
                        </label>
                      </div>
                      <div className="form-group mb-4">
                        <label className="switcher inline-flex items-center">
                          <input
                            type="checkbox"
                            className="switcher-input hidden"
                            checked={smsNotification}
                            onChange={() =>
                              setsmsNotification(!smsNotification)
                            }
                          />
                          <span
                            className={`switcher-indicator inline-block w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                              smsNotification ? "bg-[#17a2b8]" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`switcher-thumb inline-block w-6 h-6 rounded-full absolute transition-transform ${
                                smsNotification
                                  ? "bg-[#17a2b8] transform translate-x-4"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                          </span>
                          <span className="switcher-label ml-3">
                            Revice notifications in SMS
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-3">
          <button
            type="button"
            className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded-md"
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

export default ProfileHero;
