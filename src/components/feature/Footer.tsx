
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
              &lt;TheCodingForge/&gt;
            </div>
            <p className="text-gray-400 mb-4 font-mono">
              /* Elite software development team crafting innovative digital solutions */
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <i className="ri-discord-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4 font-mono">/* Services */</h3>
            <ul className="space-y-2 font-mono">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">DevOps</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4 font-mono">/* Contact */</h3>
            <ul className="space-y-2 font-mono">
              <li className="text-gray-400">hello@TheCodingForge.dev</li>
              <li className="text-gray-400">+1 (555) 123-CODE</li>
              <li className="text-gray-400">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-mono text-sm">
            © 2024 TheCodingForge. All rights reserved. // Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
