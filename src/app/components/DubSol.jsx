"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const DubSol = () => {
  const [activeTab, setActiveTab] = useState("account-general");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

   const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value); 
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
    <div className="flex justify-center items-center -mt-80 ml-32">
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
                  Professional Info
                </a>
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-change-password"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-change-password")}
                >
                  Personal Info
                </a>
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-info"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-info")}
                >
                  Address
                </a>
                <a
                  className={`list-group-item cursor-pointer  rounded  p-4 m-2 mb-2 w-56 ${
                    activeTab === "account-social-links"
                      ? "font-bold text-white bg-[#17a2b8]"
                      : ""
                  }`}
                  onClick={() => handleTabClick("account-social-links")}
                >
                  Dubsol Acess Info
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
                    <div className="card-body">
                      <div className="form-group mt-4">
                        <label className="form-label block">
                          Artistic Name <span className="font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control w-96 px-3 py-2 border border-gray-300 rounded-md"
                          defaultValue={session.user.name}
                        />
                      </div>

                      <div className="form-group mt-2 mb-3">
                        <label className="form-label block">Country*</label>
                        <select
                          id="countries"
                          name="countries"
                          className="rounded border border-gray-300 w-96 p-2"
                          onChange={handleCountryChange}
                        >
                          <option value="AF">Afeganistão</option>
                          <option value="ZA">África do Sul</option>
                          <option value="AL">Albânia</option>
                          <option value="DE">Alemanha</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antártida</option>
                          <option value="AG">Antígua e Barbuda</option>
                          <option value="SA">Arábia Saudita</option>
                          <option value="DZ">Argélia</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armênia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Austrália</option>
                          <option value="AT">Áustria</option>
                          <option value="AZ">Azerbaijão</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrein</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Bélgica</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermudas</option>
                          <option value="BO">Bolívia</option>
                          <option value="BA">Bósnia e Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BR">Brasil</option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgária</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="BT">Butão</option>
                          <option value="CV">Cabo Verde</option>
                          <option value="KH">Camboja</option>
                          <option value="CM">Camarões</option>
                          <option value="CA">Canadá</option>
                          <option value="QA">Catar</option>
                          <option value="KZ">Cazaquistão</option>
                          <option value="TD">Chade</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CY">Chipre</option>
                          <option value="SG">Cingapura</option>
                          <option value="CO">Colômbia</option>
                          <option value="KM">Comores</option>
                          <option value="CG">Congo</option>
                          <option value="CD">Congo (Rep. Dem.)</option>
                          <option value="KP">Coreia do Norte</option>
                          <option value="KR">Coreia do Sul</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Costa do Marfim</option>
                          <option value="HR">Croácia</option>
                          <option value="CU">Cuba</option>
                          <option value="DK">Dinamarca</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="EG">Egito</option>
                          <option value="SV">El Salvador</option>
                          <option value="AE">Emirados Árabes Unidos</option>
                          <option value="EC">Equador</option>
                          <option value="ER">Eritreia</option>
                          <option value="SK">Eslováquia</option>
                          <option value="SI">Eslovênia</option>
                          <option value="ES">Espanha</option>
                          <option value="US">Estados Unidos</option>
                          <option value="EE">Estônia</option>
                          <option value="ET">Etiópia</option>
                          <option value="FJ">Fiji</option>
                          <option value="PH">Filipinas</option>
                          <option value="FI">Finlândia</option>
                          <option value="FR">França</option>
                          <option value="GA">Gabão</option>
                          <option value="GM">Gâmbia</option>
                          <option value="GH">Gana</option>
                          <option value="GE">Geórgia</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Grécia</option>
                          <option value="GD">Granada</option>
                          <option value="GL">Groenlândia</option>
                          <option value="GP">Guadalupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GY">Guiana</option>
                          <option value="GF">Guiana Francesa</option>
                          <option value="GN">Guiné</option>
                          <option value="GQ">Guiné Equatorial</option>
                          <option value="GW">Guiné-Bissau</option>
                          <option value="HT">Haiti</option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungria</option>
                          <option value="YE">Iémen</option>
                          <option value="BV">Ilha Bouvet</option>
                          <option value="CX">Ilha Christmas</option>
                          <option value="IM">Ilha de Man</option>
                          <option value="NF">Ilha Norfolk</option>
                          <option value="AX">Ilhas Aland</option>
                          <option value="KY">Ilhas Cayman</option>
                          <option value="CC">Ilhas Cocos (Keeling)</option>
                          <option value="CK">Ilhas Cook</option>
                          <option value="FO">Ilhas Faroe</option>
                          <option value="FK">Ilhas Malvinas (Falkland)</option>
                          <option value="MP">Ilhas Marianas do Norte</option>
                          <option value="MH">Ilhas Marshall</option>
                          <option value="UM">
                            Ilhas Menores Distantes dos EUA
                          </option>
                          <option value="SB">Ilhas Salomão</option>
                          <option value="TC">Ilhas Turks e Caicos</option>
                          <option value="VI">Ilhas Virgens Americanas</option>
                          <option value="VG">Ilhas Virgens Britânicas</option>
                          <option value="IN">Índia</option>
                          <option value="ID">Indonésia</option>
                          <option value="IR">Irã</option>
                          <option value="IQ">Iraque</option>
                          <option value="IE">Irlanda</option>
                          <option value="IS">Islândia</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Itália</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japão</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordânia</option>
                          <option value="KW">Kuwait</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Letônia</option>
                          <option value="LB">Líbano</option>
                          <option value="LR">Libéria</option>
                          <option value="LY">Líbia</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lituânia</option>
                          <option value="LU">Luxemburgo</option>
                          <option value="MO">Macau</option>
                          <option value="MK">Macedônia</option>
                          <option value="MG">Madagáscar</option>
                          <option value="MY">Malásia</option>
                          <option value="MW">Malawi</option>
                          <option value="MV">Maldivas</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MA">Marrocos</option>
                          <option value="MQ">Martinica</option>
                          <option value="MU">Maurícia</option>
                          <option value="MR">Mauritânia</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">México</option>
                          <option value="FM">Micronésia</option>
                          <option value="MZ">Moçambique</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Mônaco</option>
                          <option value="MN">Mongólia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namíbia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NI">Nicarágua</option>
                          <option value="NE">Níger</option>
                          <option value="NG">Nigéria</option>
                          <option value="NU">Niue</option>
                          <option value="NO">Noruega</option>
                          <option value="NC">Nova Caledônia</option>
                          <option value="NZ">Nova Zelândia</option>
                          <option value="OM">Omã</option>
                          <option value="NL">Países Baixos</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palestina</option>
                          <option value="PA">Panamá</option>
                          <option value="PG">Papua-Nova Guiné</option>
                          <option value="PK">Paquistão</option>
                          <option value="PY">Paraguai</option>
                          <option value="PE">Peru</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PF">Polinésia Francesa</option>
                          <option value="PL">Polônia</option>
                          <option value="PR">Porto Rico</option>
                          <option value="PT">Portugal</option>
                          <option value="KE">Quênia</option>
                          <option value="KG">Quirguistão</option>
                          <option value="GB">Reino Unido</option>
                          <option value="RE">Reunião</option>
                          <option value="RO">Romênia</option>
                          <option value="RW">Ruanda</option>
                          <option value="RU">Rússia</option>
                          <option value="EH">Saara Ocidental</option>
                          <option value="PM">Saint Pierre e Miquelon</option>
                          <option value="WS">Samoa</option>
                          <option value="AS">Samoa Americana</option>
                          <option value="SM">San Marino</option>
                          <option value="SH">Santa Helena</option>
                          <option value="LC">Santa Lúcia</option>
                          <option value="BL">Saint-Barthélemy</option>
                          <option value="KN">Saint-Kitts e Nevis</option>
                          <option value="MF">Saint-Martin</option>
                          <option value="ST">São Tomé e Príncipe</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Sérvia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Serra Leoa</option>
                          <option value="SY">Síria</option>
                          <option value="SO">Somália</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SZ">Suazilândia</option>
                          <option value="SD">Sudão</option>
                          <option value="SS">Sudão do Sul</option>
                          <option value="SE">Suécia</option>
                          <option value="CH">Suíça</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard e Jan Mayen</option>
                          <option value="TH">Tailândia</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajiquistão</option>
                          <option value="TZ">Tanzânia</option>
                          <option value="IO">
                            Territ. Britânico do Oceano Índico
                          </option>
                          <option value="TF">Territ. Franceses do Sul</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad e Tobago</option>
                          <option value="TN">Tunísia</option>
                          <option value="TM">Turcomenistão</option>
                          <option value="TR">Turquia</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UA">Ucrânia</option>
                          <option value="UG">Uganda</option>
                          <option value="UY">Uruguai</option>
                          <option value="UZ">Uzbequistão</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vaticano</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnã</option>
                          <option value="WF">Wallis e Futuna</option>
                          <option value="ZM">Zâmbia</option>
                          <option value="ZW">Zimbábue</option>
                        </select>
                      </div>

                      {selectedCountry === "BR" ? (
                        <div className="form-group mt-2 mb-3">
                          <label className="form-label block">Estado*</label>
                          <select
                            id="states"
                            name="states"
                            className="rounded border border-gray-300 w-96 p-2"
                          >
                            <option value="">Selecione um estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                          </select>
                        </div>
                      ) : (
                        <div className="form-group mt-2 mb-3">
                          <label className="form-label block">Estado*</label>
                          <select
                            id="states"
                            name="states"
                            className="rounded border border-gray-300 w-96 p-2"
                            disabled
                          >
                            <option value="">N/A</option>
                          </select>
                        </div>
                      )}
                    </div>
                    <div className="form-group mt-4">
                      <label className="form-label block">DRT*</label>
                      <input
                        type="text"
                        className="form-control w-96 px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="000/Rj"
                      />
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
    </div>
  );
};

export default DubSol;
