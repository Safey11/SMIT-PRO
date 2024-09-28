'use client';

import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'An innovative project that solves problems effectively.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A cutting-edge application that enhances user experience.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A revolutionary tool designed to simplify complex tasks.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'An engaging platform that connects people seamlessly.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'An engaging platform that connects people seamlessly.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  
  {
    id: 4,
    title: 'Project Four',
    description: 'An engaging platform that connects people seamlessly.',
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
          My Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-700 italic">Explore my work and passion projects.</p>
      </header>

      {/* Projects Section */}
      <section className="my-10">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl relative">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300 relative"
                >
                  View Project
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-indigo-600 transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="my-10">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Skills & Technologies</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {['JavaScript', 'React', 'CSS', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((skill) => (
            <li key={skill} className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center">
              <h3 className="font-semibold text-lg text-gray-800">{skill}</h3>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="my-10">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-4">I’d love to hear from you! Feel free to reach out.</p>
        <form className="mt-4 bg-gray-100 p-6 rounded-lg shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
