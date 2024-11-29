import React, { useState, useEffect } from "react";
import CardTag from "./CardTag";
import Card from "./Card";
import InputTag from "./InputTag";
import Link from "next/link";

const CardSection = ({ token }) => { // Recebe o token como prop
  const [tag, setTag] = useState("All");
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:8800/api/cards", {
          headers: {
            Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
          },
        });
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Erro ao buscar os cards:", error);
      }
    };

    if (token) { // Garante que a API só é chamada se o token existir
      fetchCards();
    }
  }, [token]);

  // Filtragem de cards (pode manter a lógica atual)
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center ml-10 text-4xl font-bold text-black mt-10 mb-10">
        Professionals
      </h2>
      {/* Renderização da seção de tags */}
      <div className="text-white md:flex flex-row justify-center items-center gap-6 py-6 mb-10 ml-10 hidden border w-96 md:w-[110rem]">
        {/* Seus componentes de tag */}
        <CardTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <CardTag
          onClick={handleTagChange}
          name="Dubbing Actor"
          isSelected={tag === "Dubbing Actor"}
        />
        <CardTag
          onClick={handleTagChange}
          name="Dubbing Director"
          isSelected={tag === "Dubbing Director"}
        />
        <CardTag
          onClick={handleTagChange}
          name="Project Menager"
          isSelected={tag === "Project Menager"}
        />
        <CardTag
          onClick={handleTagChange}
          name="Revisor"
          isSelected={tag === "Revisor"}
        />
        <CardTag
          onClick={handleTagChange}
          name="Translator"
          isSelected={tag === "Translator"}
        />
        <CardTag
          onClick={handleTagChange}
          name="Dubbing Operator"
          isSelected={tag === "Dubbing Operator"}
        />
        <InputTag onClick={handleTagChange} />
      </div>

      {/* Renderização dos cards filtrados */}
      <div className="grid md:grid-cols-1 gap-8 md:gap-12 mb-10">
        {filteredProject.map((project) => (
          <Link key={project.id} href={`/card/${project.id}`}>
            <Card
              id={project.id}
              title={project.title}
              role={project.role}
              description={project.description}
              imgUrl={project.image}
              lang={project.lang}
              country={project.country}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardSection;
