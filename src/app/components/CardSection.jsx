"use client"
import React, { useState } from 'react'
import CardTag from './CardTag';
import Card from './Card';
import InputTag from './InputTag';
import  Link  from 'next/link';

const projectsData =  [
  {
      id: "1",
      title:"Flavia Saddy",
      description:"Sou dubladora a vida toda e estou aberta a novos trabalhos",
      image:"/images/flavia.jpg",
      lang:"Portugês",
      country:"Brasil",
      tag:["All", "Dubbing Actor"],
      
  },
  {
    id: "2",
    title:"Guilherme Briggs",
    description:"Estou a anos no meio de dublagem, fiz personagens iconicos e agora estou focando na direção",
    image:"/images/Briggs.jpg",
    lang:"Portugês",
    country:"Brasil",
    tag:["All", "Dubbing Director", "Dubbing Actor"],
    
},

{
  id: "3",
  title:"Aline Bristot",
  description:"Formada em Comunicação Social, com mais de 10 anos de experiência em língua inglesa, atuo no mercado audiovisual como tradutora especialista em dublagem, legendagem e localização de games. A linguagem é não só a essência do meu trabalho, mas também a minha motivação: gosto de encurtar distâncias e aproximar culturas.",
  image:"/images/Aline.jpg",
  lang:"Portugês",
  country:"Brasil",
  tag:["All", "Translator"],
  
},

{
  id: "4",
  title:"Renato Valença ",
  description:"Revisor",
  image:"/images/renato.jpg",
  lang:"Portugês",
  country:"Brasil",
  tag:["All", "Revisor"],
  
},

{
  id: "5",
  title:"Julia Rocha ",
  description:"Project Manager",
  image:"/images/Julia.jpg",
  lang:"Portugês",
  country:"Brasil",
  tag:["All", "Project Menager"],
  
},

{
  id: "6",
  title:"Hebert Santana ",
  description:"Dubbing Operator",
  image:"/images/hebert.jpg",
  lang:"Portugês",
  country:"Brasil",
  tag:["All", "Dubbing Operator"],
  
},

{
  id: "7",
  title:"Daniel ",
  description:"Teste 2",
  image:"/images/teste.jpeg",
  lang:"Portugês",
  country:"Brasil",
  tag:["All", "Dubbing Operator"],
}

  
]

const CardSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
      setTag(newTag);
  }

  const filteredProject = projectsData.filter((project) =>
      project.tag.includes(tag)
  )
return (
  <> 
      <h2 className=' text-center ml-10 text-4xl font-bold text-black mt-10 mb-10'>
          Professionals
      </h2>
      <div className='text-white md:flex flex-row justify-center itens-center gap-6 py-6 mb-10 ml-10 hidden border w-96 md:w-[110rem]'>
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
        <InputTag 
          onClick={handleTagChange}
        />
        
        {/*<input type="search" className='border border-slate-500 rounded-lg w-96 decoration-none p-2 text-black' placeholder='Search here!'/>*/}
      </div>
        
      <div className='grid md:grid-cols-1 gap-8 md:gap-12 mb-10'>{filteredProject.map((project) =>
        <Link key={project.id} href={`/card/${project.id}`}>
              <Card
                  id={project.id}
                  title={project.title} 
                  description={project.description} 
                  imgUrl={project.image}
                  lang={project.lang}
                  country={project.country}
              />
        </Link>
      )}
      </div>
  </>
)
}

export default CardSection