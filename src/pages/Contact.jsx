import React, { useState } from 'react'
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="border-t pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="font-serif uppercase tracking-widest text-3xl sm:text-4xl text-gray-900 mb-4">
            CONTACT US
          </h1>
          <div className="w-24 h-[1px] bg-[#C5A059] mx-auto"></div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="flex flex-col md:flex-row gap-16 py-10">
          {/* Left: Image */}
          <div className="flex-1">
            <img 
              className="w-full h-auto object-cover" 
              src={assets.contact_img || 'https://via.placeholder.com/600x800'} 
              alt="Contact Shen Luxor" 
            />
          </div>

          {/* Right: Contact Info & Form */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif uppercase tracking-widest text-xl text-gray-900">GET IN TOUCH</h2>
              
              <div className="flex flex-col gap-4 text-gray-600 font-sans">
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">ADDRESS</p>
                  <p className="text-sm leading-relaxed">
                    Luxor, Egypt<br />
                    Nile Valley District
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">EMAIL</p>
                  <p className="text-sm">
                    <a href="mailto:contact@shenluxor.com" className="hover:text-[#C5A059] transition-colors">
                      contact@shenluxor.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">PHONE</p>
                  <p className="text-sm">
                    <a href="tel:+201234567890" className="hover:text-[#C5A059] transition-colors">
                      +20 123 456 7890
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif uppercase tracking-widest text-xl text-gray-900">SEND US A MESSAGE</h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-800 transition-colors font-sans"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-800 transition-colors font-sans"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-800 transition-colors font-sans resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-black text-white uppercase tracking-widest py-3 px-8 rounded-none hover:bg-[#C5A059] transition-colors duration-300 font-sans text-sm"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif uppercase tracking-widest text-2xl text-gray-900 mb-4">
              CAREERS
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-sans mb-6">
              Join our team of passionate artisans and craftspeople. We're always looking for talented 
              individuals who share our commitment to excellence and heritage.
            </p>
            <button className="border border-black px-8 py-3 text-sm uppercase tracking-widest rounded-none hover:bg-black hover:text-white transition-all duration-300 font-sans">
              EXPLORE OPPORTUNITIES
            </button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20">
          <NewsletterBox />
        </div>
      </div>
    </div>
  )
}

export default Contact;
