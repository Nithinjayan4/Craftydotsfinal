import React from 'react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData(event.target);
    formData.append('access_key', '751b1e0f-b99b-4da0-8e49-f150aa1cc09e'); // Replace with your actual API key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset(); // Reset the form fields after successful submission
      } else {
        setResult(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('Error submitting form. Please try again later.');
    }
  };

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } catch (error) {
      console.error('Error handling input change:', error);
    }
  };

  return (
    <section data-name="contact" id="contact" className="section">
      <div className="container mx-auto px-4">
        <h2 data-name="contact-title" className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact Us
        </h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="contact-input w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
          <span>{result}</span> {/* Displaying the result message */}
        </div>
      </div>
    </section>
  );
}
