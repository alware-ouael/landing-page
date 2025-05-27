import React from 'react';

function ContactUs() {
  return (
    <div id='contact' className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h2 className="title">CONTACT US!</h2>
        <p className="text-gray-600 mt-2">We’d love to hear about your project idea.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Form */}
        <form className="space-y-6 w-full md:w-1/2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              required
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-mainBlue transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              required
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-mainBlue transition-colors"
            />
          </div>

          <div>
            <textarea
              name="projectIdea"
              id="projectIdea"
              rows={4}
              className="w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-mainBlue transition-colors resize-none"
              placeholder="Tell us more about what you have in mind..."
            />
          </div>

          <button
            type="submit"
            className="bg-mainBlue text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="relative w-full md:w-1/2 space-y-6">
        <div className='md:absolute bottom-1/4'>

          <div>
            <h2 className='text-gray-500'>Email</h2>
            <h2 className='text-black'>info@alware.xyz</h2>
          </div>
          <div>
            <h2 className='text-gray-500'>Phone</h2>
            <h2 className='text-black'>+213770254400</h2>
          </div>
        </div>
      </div>        </div>

    </div>
  );
}

export default ContactUs;
