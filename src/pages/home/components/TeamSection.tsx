
export default function TeamSection() {
  const team = [
    {
      name: 'Jose Luis Ariza',
      role: 'Senior Full-Stack Developer',
      bio: 'Senior developer with extensive experience in modern web technologies. Expert in both frontend and backend development.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20software%20developer%20portrait%2C%20wearing%20casual%20tech%20shirt%2C%20modern%20office%20background%2C%20confident%20expression%2C%20programming%20workspace%2C%20realistic%20professional%20headshot%20with%20clean%20lighting&width=400&height=400&seq=team-jose-luis&orientation=squarish',
      github: '#',
      linkedin: '#',
      twitter: '#',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      name: 'Jose Jared Villatoro',
      role: 'Full-Stack Developer',
      bio: 'Passionate full-stack developer specializing in modern web applications and clean, scalable code architecture.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20software%20developer%20portrait%2C%20wearing%20modern%20casual%20attire%2C%20tech%20office%20environment%2C%20confident%20smile%2C%20programming%20setup%20background%2C%20realistic%20professional%20headshot%20with%20good%20lighting&width=400&height=400&seq=team-jared&orientation=squarish',
      github: '#',
      linkedin: '#',
      twitter: '#',
      skills: ['React', 'JavaScript', 'Python', 'MongoDB']
    },
    {
      name: 'Erick Reyna',
      role: 'Full-Stack Developer',
      bio: 'Full-stack developer with expertise in building robust web applications and modern development practices.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20software%20developer%20portrait%2C%20casual%20tech%20attire%2C%20server%20room%20or%20modern%20office%20background%2C%20confident%20technical%20professional%2C%20realistic%20headshot%20with%20professional%20lighting&width=400&height=400&seq=team-erick&orientation=squarish',
      github: '#',
      linkedin: '#',
      twitter: '#',
      skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL']
    }
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            /* <span className="text-blue-400">Our Team</span> */
          </h2>
          <span className="text-white">

          
          </span>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            // Meet the developers behind the magic
          </p>
        </div>

        {/* Team Intro */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-16 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 font-mono">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">team.js</span>
            </div>
            <div className="text-green-400 text-sm">
              <span className="text-blue-400">class</span> <span className="text-white">CodeCraftersTeam</span> <span className="text-yellow-400">{'{'}</span><br/>
              <span className="ml-4 text-blue-400">constructor</span><span className="text-pink-400">()</span> <span className="text-yellow-400">{'{'}</span><br/>
              <span className="ml-8 text-blue-400">this</span><span className="text-pink-400">.</span><span className="text-white">passion</span> <span className="text-pink-400">=</span> <span className="text-orange-400">'coding'</span><span className="text-gray-400">;</span><br/>
              <span className="ml-8 text-blue-400">this</span><span className="text-pink-400">.</span><span className="text-white">experience</span> <span className="text-pink-400">=</span> <span className="text-orange-400">'10+ years'</span><span className="text-gray-400">;</span><br/>
              <span className="ml-8 text-blue-400">this</span><span className="text-pink-400">.</span><span className="text-white">mission</span> <span className="text-pink-400">=</span> <span className="text-orange-400">'building awesome software'</span><span className="text-gray-400">;</span><br/>
              <span className="ml-4 text-yellow-400">{'}'}</span><br/>
              <span className="text-yellow-400">{'}'}</span>
            </div>
          </div>
        </div>

        {/* Team Grid - Updated for 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Profile Image */}
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.github}
                      className="w-10 h-10 bg-black/80 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-black transition-colors cursor-pointer"
                    >
                      <i className="ri-github-line"></i>
                    </a>
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 bg-black/80 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-black transition-colors cursor-pointer"
                    >
                      <i className="ri-linkedin-line"></i>
                    </a>
                    <a 
                      href={member.twitter}
                      className="w-10 h-10 bg-black/80 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-black transition-colors cursor-pointer"
                    >
                      <i className="ri-twitter-line"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-green-400 transition-colors">
                  {member.name}
                </h3>

                {/* Role */}
                <div className="text-green-400 font-mono text-sm mb-4">
                  // {member.role}
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm mb-4 font-mono leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-800 text-green-400 rounded text-xs font-mono border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Terminal Footer */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center text-xs font-mono text-gray-500">
                    <span className="text-green-400">$</span>
                    <span className="ml-2">whoami</span>
                    <span className="ml-4 text-green-400">✓ {member.name.split(' ')[0].toLowerCase()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gray-900 border border-gray-700 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2 font-mono">15+</div>
              <div className="text-gray-400 font-mono text-sm">Combined Years</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2 font-mono">50+</div>
              <div className="text-gray-400 font-mono text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2 font-mono">10+</div>
              <div className="text-gray-400 font-mono text-sm">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2 font-mono">24/7</div>
              <div className="text-gray-400 font-mono text-sm">Availability</div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-black border border-gray-700 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Ready to work together?
            </h3>
            <p className="text-gray-400 mb-6 font-mono">
              // Let's build amazing software solutions for your business
            </p>
            <a href="#contact" className="bg-blue-500 text-black px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors whitespace-nowrap cursor-pointer font-mono font-semibold">
              <i className="ri-message-3-line mr-2"></i>
              Contact Us
            </a >
          </div>
        </div>
      </div>
    </section>
  );
}
