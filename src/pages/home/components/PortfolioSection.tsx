
export default function PortfolioSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack Web App',
      description: 'Modern e-commerce solution with React, Node.js, and real-time inventory management.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20dashboard%20with%20clean%20dark%20interface%2C%20product%20management%20screens%2C%20analytics%20charts%2C%20shopping%20cart%20interface%2C%20professional%20business%20application%20with%20green%20accent%20colors%20and%20black%20background&width=600&height=400&seq=portfolio-1&orientation=landscape',
      github: '#',
      live: '#'
    },
    {
      title: 'Healthcare Management System',
      category: 'Enterprise Solution',
      description: 'HIPAA-compliant patient management system with appointment scheduling and telemedicine.',
      tech: ['Vue.js', 'Python', 'MongoDB', 'WebRTC'],
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20management%20system%20interface%20with%20patient%20records%2C%20appointment%20calendar%2C%20medical%20dashboard%2C%20clean%20professional%20design%20with%20dark%20theme%20and%20green%20accents%2C%20modern%20medical%20software%20application&width=600&height=400&seq=portfolio-2&orientation=landscape',
      github: '#',
      live: '#'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Interactive dashboard for real-time data monitoring with advanced charting capabilities.',
      tech: ['React', 'D3.js', 'Python', 'WebSocket'],
      image: 'https://readdy.ai/api/search-image?query=Analytics%20dashboard%20with%20dark%20theme%2C%20real-time%20charts%20and%20graphs%2C%20data%20visualization%20screens%2C%20modern%20business%20intelligence%20interface%20with%20green%20accent%20colors%20and%20black%20background%2C%20professional%20dashboard%20design&width=600&height=400&seq=portfolio-3&orientation=landscape',
      github: '#',
      live: '#'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Application',
      description: 'Secure mobile banking application with biometric authentication and transaction tracking.',
      tech: ['React Native', 'Node.js', 'AWS', 'Blockchain'],
      image: 'https://readdy.ai/api/search-image?query=Mobile%20banking%20app%20interface%20mockup%2C%20dark%20theme%20financial%20application%20screens%2C%20transaction%20history%2C%20account%20dashboard%2C%20secure%20banking%20UI%20design%20with%20modern%20typography%20and%20green%20accent%20colors&width=600&height=400&seq=portfolio-4&orientation=landscape',
      github: '#',
      live: '#'
    },
    {
      title: 'DevOps Monitoring Tool',
      category: 'Infrastructure',
      description: 'Comprehensive monitoring solution for containerized applications and cloud infrastructure.',
      tech: ['Docker', 'Kubernetes', 'Go', 'Grafana'],
      image: 'https://readdy.ai/api/search-image?query=DevOps%20monitoring%20dashboard%20with%20server%20metrics%2C%20container%20status%2C%20infrastructure%20monitoring%20screens%2C%20dark%20professional%20interface%20with%20green%20accents%2C%20cloud%20infrastructure%20management%20tool&width=600&height=400&seq=portfolio-5&orientation=landscape',
      github: '#',
      live: '#'
    },
    {
      title: 'AI Content Generator',
      category: 'Machine Learning',
      description: 'AI-powered content generation platform with natural language processing capabilities.',
      tech: ['Python', 'TensorFlow', 'React', 'OpenAI'],
      image: 'https://readdy.ai/api/search-image?query=AI%20content%20generator%20interface%20with%20text%20editor%2C%20artificial%20intelligence%20dashboard%2C%20machine%20learning%20application%20UI%2C%20dark%20theme%20with%20green%20accents%2C%20modern%20AI%20tool%20interface%20design&width=600&height=400&seq=portfolio-6&orientation=landscape',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            /* <span className="text-green-400">Portfolio</span> */
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            // Showcasing our latest projects and client success stories
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-green-500 hover:text-black transition-colors cursor-pointer"
                    >
                      <i className="ri-github-line text-xl"></i>
                    </a>
                    <a 
                      href={project.live}
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-green-500 hover:text-black transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-green-400 font-mono text-sm mb-2">
                  // {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 font-mono text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs font-mono border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Terminal Footer */}
                <div className="border-t border-gray-800 pt-4">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                    <div className="flex items-center">
                      <span className="text-green-400">$</span>
                      <span className="ml-2">git status</span>
                    </div>
                    <span className="text-green-400">✓ Deployed</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="bg-black border border-gray-700 rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center">
                <i className="ri-github-line text-3xl text-green-400"></i>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Want to see more of our work?
            </h3>
            <p className="text-gray-400 mb-6 font-mono">
              // Check out our GitHub repositories and contribute to open source projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition-colors whitespace-nowrap cursor-pointer font-mono font-semibold">
                <i className="ri-github-line mr-2"></i>
                View GitHub
              </button>
              <button className="border-2 border-green-500 text-green-400 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-black transition-colors whitespace-nowrap cursor-pointer font-mono font-semibold">
                <i className="ri-message-3-line mr-2"></i>
                Discuss Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
