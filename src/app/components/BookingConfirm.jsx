"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./Booking.css";

const BookingConfirm = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div id="bookings" className="mt-20 flex justify-center">
      <div id="container" className="w-[1400px] py-12 px-12">
        <div
          id="title"
          className="font-bold text-2xl flex justify-between items-center mb-10"
        >
          <h1>Bookings</h1>
          <div className="flex gap-3">
            <Link
              href={"/confirmations"}
              className="flex items-center p-1 rounded-md border border-[#17a2b8] hover:bg-[#17a2b8] hover:text-white hover:border-none"
            >
              Confirmations
            </Link>
            <Link
              href={"/messages"}
              className="p-1 rounded-md bg-[#17a2b8] border border-[#17a2b8] text-white"
            >
              Messages
            </Link>
          </div>
        </div>
        <table className="w-full justify-center">
          <tbody>
            <tr className="h-12">
              <th className="text-left">Hirer</th>
              <th className="text-left">Production</th>
              <th className="text-left">Price</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
            <tr className="h-12">
              <td className="p-2">
                <Image
                  src={"/images/w1.jpg"}
                  alt="/"
                  width={280}
                  height={280}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </td>
              <td>Project Elysium</td>
              <td>70/hr</td>
              <td>09/14/2024</td>
              <td className="w-12 h-7">
                <div className="flex flex-row justify-center items-center mr-10 gap-5 w-24">
                  <button onClick={() => setShowPopup(true)}>
                    <Image
                      src={"/images/checkbtn.png"}
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </button>
                  <button onClick={() => setShowPopup(true)}>
                    <Image
                      src={"/images/declinebtn.png"}
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="h-12">
              <td className="p-2">
                <Image
                  src={"/images/h2.jpg"}
                  alt="/"
                  width={280}
                  height={280}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </td>
              <td>New Champions</td>
              <td>40/hr</td>
              <td>11/01/2024</td>
              <td className="w-12 h-7">
                <div className="flex flex-row justify-center items-center mr-10 gap-5 w-24">
                  <button onClick={() => setShowPopup(true)}>
                    <Image
                      src={"/images/checkbtn.png"}
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </button>
                  <button onClick={() => setShowPopup(true)}>
                    <Image
                      src={"/images/declinebtn.png"}
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="h-12">
              <td className="p-2">
                <Image
                  src={"/images/w3.jpg"}
                  alt="/"
                  width={280}
                  height={280}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </td>
              <td>God Father Project</td>
              <td>80/hr</td>
              <td>09/01/2024</td>
              <td className="w-12 h-7">
                <div className="flex flex-row justify-center items-center mr-10 gap-5 w-24">
                  <button onClick={() => setShowPopup(true)}>
                    <Image
                      src={"/images/checkbtn.png"}
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </button>
                  <button onClick={() => setShowPopup(true)}>
                    <Image
                      src={"/images/declinebtn.png"}
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="h-12">
              <td className="p-2">
                <Image
                  src={"/images/h3.jpg"}
                  alt="/"
                  width={280}
                  height={280}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </td>
              <td>Duna 3</td>
              <td>100/hr</td>
              <td>10/20/2024</td>
              <td className="w-12 h-7">
                <div className="flex flex-row justify-center items-center mr-10 gap-5 w-24">
                  <button onClick={() => setShowPopup(true)}>
                    <Image
                      src={"/images/checkbtn.png"}
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </button>
                  <button onClick={() => setShowPopup(true)}>
                    <Image
                      src={"/images/declinebtn.png"}
                      alt="/"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-row items-center justify-center">
          <div className="flex gap-3">
            <button className="hover:-translate-x-1">
              <Image
                src={"/images/arrow-r.png"}
                alt="/"
                width={15}
                height={15}
                className="rounded-full object-cover"
              />
            </button>
            <span>1</span>
            <button className="hover:translate-x-1">
              <Image
                src={"/images/arrow-l.png"}
                alt="/"
                width={15}
                height={15}
                className="rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <>
          <div
            id="popupOverlay"
            className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-[999]"
            onClick={() => setShowPopup(false)}
          ></div>
          <div
            id="popup"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white border rounded z-[1000] w-[500px]"
          >
            <div className="flex flex-col items-center">
              <p className="text-center mb-4 font-bold text-xl">Accept this Booking?</p>
              <div className="flex gap-4">
                <Link
                  href="https://alcateia.dubsol.app/login.php"
                  className="bg-[#17a2b8] text-white px-4 py-2 rounded"
                  onClick={() => setShowPopup(false)}
                >
                  Yes
                </Link>
                <button
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => setShowPopup(false)}
                >
                  No
                </button>
              </div>
              <p className="text-sm mt-2 -mb-2 text-gray-400 text-center">By accepting this booking, you will be redirected to the Dubsol App for further actions.</p>
              <button
                id="closePopup"
                className="cursor-pointer mt-4 bg-[#17a2b8] rounded text-white px-4 py-2"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingConfirm;
