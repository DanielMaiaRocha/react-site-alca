"use client"; // Adicione isso no topo para habilitar a execução no cliente
import React from "react";
import { useSession } from "next-auth/react"; // Importa o hook do NextAuth
import LayoutAdmin from "../components/LayoutAdmin";
import AuthNavbar from "../components/AuthNavBar";
import HeroMainPage from "../components/HeroMainPage";
import Footer from "../components/Footer";
import CardSection from "../components/CardSection";

function Page() {
  const { data: session } = useSession(); 
  const token = session?.accessToken; 

  return (
    <LayoutAdmin>
      <main className="min-h-screen flex justify-center pt-6">
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <AuthNavbar />
        <HeroMainPage />
      </main>
      <CardSection  />
      <Footer />
    </LayoutAdmin>
  );
}

export default Page;
