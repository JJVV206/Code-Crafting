
export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20software%20development%20workspace%20with%20multiple%20monitors%20displaying%20code%2C%20dark%20theme%20programming%20environment%2C%20minimalist%20black%20desk%20setup%2C%20LED%20strips%2C%20futuristic%20coding%20atmosphere%2C%20high-tech%20developer%20setup%20with%20clean%20lines%20and%20professional%20lighting&width=1920&height=1080&seq=hero-bg-codecrafting&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          {/* Terminal-style intro */}
          <div className="bg-gray-900/90 rounded-lg p-4 sm:p-6 border border-gray-700 max-w-2xl mx-auto font-mono text-left">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500"></div>
              </div>
              <span className="ml-3 sm:ml-4 text-gray-400 text-xs sm:text-sm">~/codecrafting</span>
            </div>
            <div className="text-blue-400 text-xs sm:text-sm">
              <span className="text-gray-400">$</span> whoami<br/>
              <span className="text-white">CodeCrafting Team</span><br/><br/>
              <span className="text-gray-400">$</span> cat mission.txt<br/>
              <span className="text-white">Elite Software Development Team</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white px-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
            &lt;<span className="text-blue-400">Code</span>Crafting/&gt;
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-mono px-4">
            // We transform ideas into elegant code solutions
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-mono leading-relaxed px-4">
            Professional software development team specializing in modern web applications, 
            mobile solutions, and cloud architecture. Let's build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8 px-4">
            <button className="w-full sm:w-auto bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer font-mono font-semibold text-base sm:text-lg">
              <i className="ri-terminal-box-line mr-2"></i>
              Start Project
            </button>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6 sm:pt-8 px-4">
            {['React', 'Node.js', 'Astro', 'TypeScript', 'JavaScript', 'AWS'].map((tech) => (
              <span 
                key={tech}
                className="px-3 sm:px-4 py-2 bg-gray-800/80 border border-gray-700 rounded-full text-blue-400 font-mono text-xs sm:text-sm hover:bg-gray-700/80 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Animated code particles - hidden on mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
            <div className="absolute top-1/4 left-1/4 text-blue-500/20 font-mono animate-pulse">{'{ }'}</div>
            <div className="absolute top-1/3 right-1/4 text-blue-500/20 font-mono animate-pulse delay-500">const</div>
            <div className="absolute bottom-1/4 left-1/3 text-blue-500/20 font-mono animate-pulse delay-1000">=&gt;</div>
            <div className="absolute bottom-1/3 right-1/3 text-blue-500/20 font-mono animate-pulse delay-1500">function()</div>
          </div>
        </div>
      </div>
    </section>
  );
}
