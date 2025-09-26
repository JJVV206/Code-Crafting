
export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'Web Development',
      description: 'Modern web applications built with React, Next.js, and cutting-edge technologies.',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android platforms.',
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and serverless architecture implementation.',
      tech: ['AWS', 'Docker', 'Kubernetes', 'Serverless']
    },
    {
      icon: 'ri-database-2-line',
      title: 'Backend Development',
      description: 'Robust APIs and database solutions for enterprise-grade applications.',
      tech: ['Node.js', 'Astro', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: 'ri-git-branch-line',
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code solutions.',
      tech: ['GitHub Actions', 'Jenkins', 'Terraform', 'Monitoring']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security & Testing',
      description: 'Comprehensive security audits and automated testing frameworks.',
      tech: ['Jest', 'Cypress', 'JavaScript', 'Performance']
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono">
            /* <span className="text-blue-400">Services</span> */
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-mono px-4">
            // Full-stack development services tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black border border-gray-700 rounded-lg p-6 sm:p-8 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <i className={`${service.icon} text-xl sm:text-2xl text-blue-400 group-hover:text-black`}></i>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 font-mono group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 sm:mb-6 font-mono text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {service.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs font-mono border border-gray-700 hover:border-blue-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Terminal-style footer */}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex items-center text-xs font-mono text-gray-500">
                  <span className="text-blue-400">$</span>
                  <span className="ml-2 break-all">npm install {service.title.toLowerCase().replace(' ', '-')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-mono">
              Ready to start your project?
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 font-mono text-sm sm:text-base">
              // Let's discuss your requirements and build something amazing together
            </p>
            <button className="w-full sm:w-auto bg-blue-500 text-black px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors whitespace-nowrap cursor-pointer font-mono font-semibold">
              <i className="ri-message-3-line mr-2"></i>
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
