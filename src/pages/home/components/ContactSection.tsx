
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d3aucj1439c4o52mkbp0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', project: '', budget: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-mono">
            /* <span className="text-blue-400">Get In Touch</span> */
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-mono px-2">
            // Ready to start your next project? Let's discuss your ideas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            {/* Terminal Contact Info */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-6 sm:mb-8">
              <div className="bg-gray-800 px-4 py-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm font-mono">contact.json</span>
              </div>
              
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
                <div className="text-yellow-400">{'{'}</div>
                <div className="ml-2 sm:ml-4 space-y-1 sm:space-y-2">
                  <div>
                    <span className="text-blue-400">"email"</span><span className="text-pink-400">:</span> <span className="text-orange-400">"hello@TheCodingForge.dev"</span><span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-blue-400">"phone"</span><span className="text-pink-400">:</span> <span className="text-orange-400">"+1 (555) 123-CODE"</span><span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-blue-400">"location"</span><span className="text-pink-400">:</span> <span className="text-orange-400">"San Francisco, CA"</span><span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-blue-400">"timezone"</span><span className="text-pink-400">:</span> <span className="text-orange-400">"PST/PDT"</span><span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="text-blue-400">"response_time"</span><span className="text-pink-400">:</span> <span className="text-orange-400">"&lt; 24 hours"</span>
                  </div>
                </div>
                <div className="text-yellow-400">{'}'}</div>
              </div>

            </div>

            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-lg sm:text-xl text-white"></i>
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-mono font-semibold text-sm sm:text-base">Email Us</h4>
                  <p className="text-gray-400 font-mono text-xs sm:text-sm break-all">hello@TheCodingForge.dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-lg sm:text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-mono font-semibold text-sm sm:text-base">Call Us</h4>
                  <p className="text-gray-400 font-mono text-xs sm:text-sm">+1 (555) 123-CODE</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-lg sm:text-xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-mono font-semibold text-sm sm:text-base">Visit Us</h4>
                  <p className="text-gray-400 font-mono text-xs sm:text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-blue-400 font-mono font-semibold mb-4 text-sm sm:text-base">// Follow Us</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer">
                  <i className="ri-github-line text-lg sm:text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer">
                  <i className="ri-linkedin-line text-lg sm:text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer">
                  <i className="ri-twitter-line text-lg sm:text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all cursor-pointer">
                  <i className="ri-discord-line text-lg sm:text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
              {/* Form Header */}
              <div className="bg-gray-800 px-4 sm:px-6 py-4 border-b border-gray-700">
                <h3 className="text-white font-mono font-semibold text-sm sm:text-base">// Start Your Project</h3>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6" data-readdy-form id="contact-codecrafters">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-blue-400 font-mono text-xs sm:text-sm mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white font-mono text-sm focus:border-blue-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-400 font-mono text-xs sm:text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white font-mono text-sm focus:border-blue-500 focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-blue-400 font-mono text-xs sm:text-sm mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white font-mono text-sm focus:border-blue-500 focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-400 font-mono text-xs sm:text-sm mb-2">Project Type</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white font-mono text-sm focus:border-blue-500 focus:outline-none pr-8"
                    >
                      <option value="">Select Project Type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="ecommerce">E-commerce Platform</option>
                      <option value="api">API Development</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-blue-400 font-mono text-xs sm:text-sm mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white font-mono text-sm focus:border-blue-500 focus:outline-none pr-8"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-blue-400 font-mono text-xs sm:text-sm mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full bg-black border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white font-mono text-sm focus:border-blue-500 focus:outline-none resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific technologies you'd like us to use..."
                  />
                  <div className="text-right text-gray-500 text-xs mt-1 font-mono">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap font-mono font-semibold text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-line animate-spin mr-2"></i>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-4 text-blue-400 font-mono text-xs sm:text-sm">
                    <i className="ri-check-line mr-2"></i>
                    Message sent successfully! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-400 font-mono text-xs sm:text-sm">
                    <i className="ri-error-warning-line mr-2"></i>
                    Failed to send message. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
