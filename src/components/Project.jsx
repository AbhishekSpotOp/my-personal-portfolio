import React from "react";

const Project = () => {
  const projectsData = [
    {
      name: `Treo Discord Bot`,
      description: `Treo is a open source multipurpose discord bot with amazing features like moderation, utility, giveaway, fun, nsfw, ticket etc.`,
      image: `https://i.imgur.com/LIK2mMn.png`,
      link: `https://github.com/kabirsingh2004`,
    },
    {
      name: `Treo Website`,
      description: `It is cool website of my bot TREO and it is built in next.js language.`,
      image: `https://i.imgur.com/LwpYd4N.png`,
      link: `https://github.com/devanshyadav2010/treo-bot-website`,
    },
   
  ];
  return (
    <section id="project" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projects
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg cursor-pointer overflow-hidden shadow-lg transition duration-700 hover:bg-gray-300"
            >
              <img
                className="h-48 w-full object-cover"
                src={project.image}
                alt={project.name}
              />
              <div className="p-6">
                <h3 className="font-semibold text-gray-800">{project.name}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target={"_blank"}
                    className="text-indigo-500 font-semibold transition text-lg hover:text-indigo-600"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
