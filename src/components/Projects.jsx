import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS showcasing my projects and skills.',
      image: '/Portfolio.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'Web Development',
      github: 'https://github.com/SUDIPTAPANDA61/portfolio',
      live: 'https://portfolio-project-2wd6.vercel.app/',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Java Programming Projects',
      description: 'Collection of Java programming projects including OOP concepts, data structures, and algorithms.',
      image: '/Java.png',
      technologies: ['Java', 'OOP', 'Data Structures'],
      category: 'Programming',
      github: 'https://github.com/SUDIPTAPANDA61',
      live: '#',
      status: 'Ongoing'
    },
    {
      id: 3,
      title: 'College Management System',
      description: 'A web-based college management system for student and faculty information management.',
      image: '/GEC1.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      category: 'Web Development',
      github: 'https://github.com/SUDIPTAPANDA61',
      live: '#',
      status: 'In Progress'
    },
    {
      id: 4,
      title: 'E-Commerce Shopping App',
      description: 'Full-stack e-commerce application with user authentication, product catalog, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Web Development',
      github: 'https://github.com/SUDIPTAPANDA61',
      live: 'https://google.com',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      category: 'Web Development',
      github: 'https://github.com/SUDIPTAPANDA61',
      live: 'https://google.com',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Task Management System',
      description: 'Collaborative task management application with team features and deadline tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      technologies: ['React', 'Firebase', 'Material-UI'],
      category: 'Web Development',
      github: 'https://github.com/SUDIPTAPANDA61',
      live: 'https://google.com',
      status: 'In Progress'
    }
  ];

  const categories = ['All', 'Web Development', 'Programming', 'Mobile App'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-16 bg-gray-50 sm:py-20 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            My <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-xl leading-relaxed text-gray-600">
            Here are some of the projects I've worked on, showcasing my skills in web development, programming, and problem-solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card-hover bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200?text=Project";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full ${
                    project.status === 'Completed' ? 'text-green-600 bg-green-100' :
                    project.status === 'Ongoing' ? 'text-blue-600 bg-blue-100' :
                    'text-yellow-600 bg-yellow-100'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full text-indigo-600 bg-indigo-100">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="inline-flex px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href={project.live !== '#' ? project.live : 'https://google.com'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {project.live !== '#' ? 'Live Demo' : 'View on Google'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/SUDIPTAPANDA61" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 border border-transparent rounded-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
          >
            View More Projects on GitHub
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;