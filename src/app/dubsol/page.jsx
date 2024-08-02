import React from "react";
import AuthNavbar from "../components/AuthNavBar";
import LayoutAdmin from "../components/LayoutAdmin";
import Footer from "../components/Footer";
import DubSol from "../components/DubSol";
import ProfileFuncsDub from "../components/ProfileFuncsDub";

const page = () => {
  return (
    <LayoutAdmin>
      <link rel="icon" href="/images/logo.png" sizes="any" />
      <main className="min-h-screen  pt-6">
        <AuthNavbar />
        <ProfileFuncsDub />
        <DubSol />
      </main>
      <Footer />
    </LayoutAdmin>
  );
};

export default page;
