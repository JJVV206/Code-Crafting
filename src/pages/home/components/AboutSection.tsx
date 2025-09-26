
export default function AboutSection() {
  const stats = [
    { number: '50+', label: 'Projects Deployed', icon: 'ri-rocket-line' },
    { number: '6+', label: 'Years Experience', icon: 'ri-time-line' },
    { number: '100%', label: 'Client Satisfaction', icon: 'ri-heart-line' },
    { number: '24/7', label: 'Support Available', icon: 'ri-customer-service-line' }
  ];

  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'Always exploring cutting-edge technologies and methodologies'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality',
      description: 'Clean, maintainable code with comprehensive testing'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'Working closely with clients throughout the development process'
    },
    {
      icon: 'ri-time-line',
      title: 'Efficiency',
      description: 'Agile development practices for timely project delivery'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            /* <span className="text-blue-400">About Us</span> */
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            // Meet the team behind the code
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            {/* Terminal Window */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm font-mono">about.js</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-gray-400">
                  <span className="text-blue-400">const</span> <span className="text-white">codecrafters</span> <span className="text-pink-400">=</span> <span className="text-yellow-400">{'{'}</span>
                </div>
                <div className="ml-4 space-y-1">
                  <div className="text-gray-400">
                    <span className="text-blue-400">mission</span><span className="text-pink-400">:</span> <span className="text-orange-400">'Transform ideas into reality'</span><span className="text-gray-400">,</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-blue-400">expertise</span><span className="text-pink-400">:</span> <span className="text-yellow-400">['Full-Stack', 'Cloud', 'Mobile']</span><span className="text-gray-400">,</span>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-blue-400">approach</span><span className="text-pink-400">:</span> <span className="text-orange-400">'Agile & Client-Focused'</span>
                  </div>
                </div>
                <div className="text-yellow-400">{'}'}</div>
                <div className="mt-4 text-gray-400">
                  <span className="text-gray-500">// Passionate developers crafting digital solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">
              &gt; Who we are
            </h3>
            <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
              <p>
                We're a passionate team of software engineers who believe in the power of clean code 
                and innovative solutions. We've been helping businesses transform their 
                ideas into robust digital products.
              </p>
              <p>
                Our expertise spans across modern web technologies, cloud infrastructure, and mobile 
                development. We follow agile methodologies and maintain a client-first approach in 
                everything we build.
              </p>
              <p>
                From startups to enterprise clients, we've successfully delivered projects that scale, 
                perform, and drive business growth. Every line of code we write is crafted with 
                precision and purpose.
              </p>
            </div>

            {/* Tech Philosophy */}
            <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h4 className="text-blue-400 font-bold mb-4 font-mono">// Our Tech Philosophy</h4>
              <ul className="space-y-2 text-gray-300 font-mono text-sm">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Write code that humans can read
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Test early, test often
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Optimize for maintainability
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✓</span>
                  Embrace continuous learning
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-xl text-white`}></i>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">{stat.number}</div>
              <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 group">
                <i className={`${value.icon} text-2xl text-blue-400 group-hover:text-white`}></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-3 font-mono">{value.title}</h4>
              <p className="text-gray-400 text-sm font-mono leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
