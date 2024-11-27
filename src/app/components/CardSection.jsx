"use client";
import React, { useState } from "react";
import CardTag from "./CardTag";
import Card from "./Card";
import InputTag from "./InputTag";
import Link from "next/link";

const projectsData = [
  {
    id: "1",
    title: "Ashley Davis",
    role: "Dubbing Actor",
    description:
      "I’m Ashley Cooper, a voice actress from the U.S. I specialize in bringing animated characters to life across TV shows, video games, and audiobooks with my versatile voice.",
    image: "/images/w2.jpg",
    lang: "English",
    country: "USA",
    tag: ["All", "Dubbing Actor"],
  },
  {
    id: "2",
    title: "Thiago Santos",
    role: "Dubbing Actor & Director",
    description:
      "I’m Thiago Santos, a voice actor and dubbing director dedicated to bringing characters to life in animations, films, and video games. With extensive experience in the industry, I not only provide versatile voice performances but also direct and mentor fellow actors to achieve their best. Inspired by leading professionals, my goal is to deliver captivating and memorable performances that resonate with audiences.",
    image: "/images/h1.jpg",
    lang: "Portugês",
    country: "Brasil",
    tag: ["All", "Dubbing Director", "Dubbing Actor"],
  },

  {
    id: "3",
    title: "Asli Kaya",
    role: "Translator",
    description:
      "I’m Asli Khaya, a Turkish dubbing translator specializing in adapting scripts for voiceover in animation and film. I ensure that dialogues and nuances are faithfully translated, maintaining the original tone and context while making it accessible for Turkish-speaking audiences. My work bridges cultures and enhances the viewing experience by providing accurate and engaging translations.",
    image: "/images/w3.jpg",
    lang: "Turkish",
    country: "Turkey",
    tag: ["All", "Translator"],
  },

  {
    id: "4",
    title: "Kleia Demetriou",
    role: "Revisor",
    description: "I’m Klelia Demetriou, a dubbing revisor ensuring high-quality voiceover work. I review and refine dubbing scripts to maintain the integrity and flow of the original content for various languages, focusing on delivering accurate and engaging translations.",
    image: "/images/w1.jpg",
    lang: "Greek",
    country: "Greece",
    tag: ["All", "Revisor"],
  },

  {
    id: "5",
    title: "Milan Van der Meer",
    role: "Project Menager",
    description: "I’m Milan Van der Meer, a Dubbing Project Manager. I handle the coordination and execution of dubbing projects, managing schedules and resources to ensure efficient and high-quality delivery.",
    image: "/images/h3.jpg",
    lang: "Dutch",
    country: "Netherlands",
    tag: ["All", "Project Menager"],
  },

  {
    id: "6",
    title: "Samir Maluf ",
    role: "Dubbing Operator",
    description: "I’m Samir Maluf, a dubbing operator responsible for the technical aspects of voice recording. I ensure high-quality audio capture and synchronization, supporting the dubbing process for films, TV shows, and games.",
    image: "/images/h2.jpg",
    lang: "Arabic",
    country: "Saudi Arabia",
    tag: ["All", "Dubbing Operator"],
  },
];

const CardSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className=" text-center ml-10 text-4xl font-bold text-black mt-10 mb-10">
        Professionals
      </h2>
      <div className="text-white md:flex flex-row justify-center itens-center gap-6 py-6 mb-10 ml-10 hidden border w-96 md:w-[110rem]">
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

      <div className="grid md:grid-cols-1 gap-8 md:gap-12 mb-10">
        {filteredProject.map((project) => (
          <Link key={project.id} href={`/card`}>
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
