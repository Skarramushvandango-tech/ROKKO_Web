import { useState } from 'react';
import { Send, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen py-16 md:py-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-[#483D03]/20 rounded-lg p-8 border border-[#483D03]">
            <Mail className="w-16 h-16 text-[#96897B] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#F5F3BB] mb-4">
              Message Sent!
            </h2>
            <p className="text-[#96897B] mb-6">
              Thanks for reaching out. We'll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#483D03] hover:bg-[#483D03]/80 text-[#F5F3BB] px-6 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#F5F3BB] mb-4">
            Contact Us
          </h1>
          <p className="text-[#96897B] text-lg">
            Get in touch with ROKKO! Records
          </p>
        </div>

        <div className="bg-[#483D03]/20 rounded-lg p-6 md:p-8 border border-[#483D03]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F5F3BB] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#262626] border border-[#483D03] rounded-lg text-[#F5F3BB] placeholder-[#96897B] focus:outline-none focus:border-[#96897B] focus:ring-1 focus:ring-[#96897B] transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F5F3BB] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#262626] border border-[#483D03] rounded-lg text-[#F5F3BB] placeholder-[#96897B] focus:outline-none focus:border-[#96897B] focus:ring-1 focus:ring-[#96897B] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#F5F3BB] mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#262626] border border-[#483D03] rounded-lg text-[#F5F3BB] placeholder-[#96897B] focus:outline-none focus:border-[#96897B] focus:ring-1 focus:ring-[#96897B] transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#F5F3BB] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#262626] border border-[#483D03] rounded-lg text-[#F5F3BB] placeholder-[#96897B] focus:outline-none focus:border-[#96897B] focus:ring-1 focus:ring-[#96897B] transition-colors resize-vertical"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#483D03] hover:bg-[#483D03]/80 disabled:bg-[#483D03]/50 text-[#F5F3BB] px-6 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#F5F3BB]" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#96897B] text-sm">
            Note: This form requires backend integration to actually send emails
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
