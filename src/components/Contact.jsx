import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-300">mohanboddupally.inbox@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-300">+91-9704333132</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-300">Hyderabad, TS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50">
          <form
  action="https://formsubmit.co/mohanboddupally.inbox@gmail.com"
  method="POST"
  className="space-y-6"
>
  {/* Name */}
  <div>
    <label htmlFor="name" className="block text-white font-medium mb-2">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
      placeholder="Your name"
    />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block text-white font-medium mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
      placeholder="your.email@example.com"
    />
  </div>

  {/* Message */}
  <div>
    <label htmlFor="message" className="block text-white font-medium mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      required
      rows={5}
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
      placeholder="Tell me about your project or just say hello!"
    ></textarea>
  </div>

  {/* Hidden fields (optional) */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

  {/* Submit button */}
  <button
    type="submit"
    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 transform flex items-center justify-center"
  >
    <Send size={18} className="mr-2" />
    Send Message
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;