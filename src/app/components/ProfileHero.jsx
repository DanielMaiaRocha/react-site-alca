"use client"
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { fetchClient } from "../libs/fetchClient";

const ProfileHero = () => {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("account-general");
  
  const [name, setName] = useState(session?.user?.name || "");
  const [email, setEmail] = useState(session?.user?.email || "");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  
  const handleTabClick = (tab) => setActiveTab(tab);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    if (!session?.user?._id) {
      console.error("ID do usuário não encontrado.");
      setMessage("Erro: ID do usuário não encontrado.");
      return;
    }
  
    const updatedUserData = {
      name,
      email,
      isSeller: role === "seller", 
      lang: language,
      country,
      profilePic: profileImage, 
    };
  
    console.log("Enviando dados para o servidor:", updatedUserData);
  
    setLoading(true);
    setMessage(null);
  
    try {
      const response = await fetchClient(`http://localhost:8800/api/users/${session.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });
  
      if (!response.ok) {
    
        const errorText = await response.text();
        console.error("Erro na resposta do servidor:", errorText);
        setMessage(`Erro: ${errorText}`);
        return;
      }
  
    
      const data = await response.json();
      console.log("Dados atualizados com sucesso:", data);
      setMessage("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      setMessage("Erro ao enviar os dados.");
    } finally {
      setLoading(false);
    }
  };


  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") return <div>Please log in.</div>;

  return (
    <main className="flex justify-center items-center -mt-80 ml-32">
      <div className="container">
        <h3 className="font-bold mb-4">Account settings</h3>
        <div className="card overflow-y-auto bg-white border rounded-lg shadow-lg">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 p-4">
              <div className="list-group list-group-flush flex flex-col border-r h-[38rem]">
                <a
                  className={`list-group-item cursor-pointer rounded p-4 m-2 mb-2 w-56 ${activeTab === "account-general" ? "font-bold text-white bg-[#17a2b8]" : ""}`}
                  onClick={() => handleTabClick("account-general")}
                >
                  General
                </a>
                <a
                  className={`list-group-item cursor-pointer rounded p-4 m-2 mb-2 w-56 ${activeTab === "account-change-password" ? "font-bold text-white bg-[#17a2b8]" : ""}`}
                  onClick={() => handleTabClick("account-change-password")}
                >
                  Change password
                </a>
                <a
                  className={`list-group-item cursor-pointer rounded p-4 m-2 mb-2 w-56 ${activeTab === "account-notifications" ? "font-bold text-white bg-[#17a2b8]" : ""}`}
                  onClick={() => handleTabClick("account-notifications")}
                >
                  Notifications
                </a>
              </div>
            </div>
            <div className="w-full md:w-3/4 p-4 h-[38rem]">
              <div className="tab-content">
                {activeTab === "account-general" && (
                  <div className="tab-pane fade show active">
                    <div className="card-body flex items-center">
                      <Image src={profileImage || "/images/profile-bg.png"} alt="Profile Image" width={100} height={100} />
                      <div className="ml-4">
                        <label className="relative cursor-pointer inline-flex items-center border border-[#17a2b8] hover:bg-[#17a2b8] hover:text-white p-2 rounded text-lg font-bold">
                          Upload new photo
                          <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleImageChange}
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
                          Allowed JPG, GIF or PNG. Max size of 2mb
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label className="form-label block">E-mail</label>
                        <input
                          type="text"
                          className="form-control w-[30rem] px-3 py-2 border border-gray-300 rounded-md"
                          value={email}
                          disabled
                        />
                        <div className="alert alert-warning mt-3 bg-blue-200 border-l-4 border-blue-500 text-blue-700 p-4 w-[30rem]" role="alert">
                          Your email is not confirmed. Please check your inbox.
                          <br />
                          <a href="javascript:void(0)" className="underline">Resend confirmation</a>
                        </div>
                      </div>
                      <div className="flex flex-col mb-3">
                        <label>Country</label>
                        <input
                          type="text"
                          className="rounded border border-gray-300 w-96 p-2 bg-white font-customFont2"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-col mb-3">
                        <label>Language</label>
                        <input
                          type="text"
                          className="rounded border border-gray-300 w-96 p-2 bg-white font-customFont2"
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-right mt-3">
                  <button
                    type="button"
                    className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded-md"
                    onClick={handleSaveChanges}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save changes"}
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-default border border-gray-300 bg-transparent text-gray-700 py-2 px-4 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
                {message && (
                  <div className={`mt-4 p-4 rounded ${message.includes("sucesso") ? "bg-green-500" : "bg-red-500"}`}>
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileHero;
