
import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('pKlC2Onlolho6Giba');

      // Send email using your service and template IDs
      const result = await emailjs.send(
        'service_og3z4zk', // Your Service ID
        'template_sa3wicd', // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kashyap.dhamecha.cg@gmail.com'
        }
      );

      console.log('Email sent successfully:', result);

      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show error toast
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-gray-400 mb-4 tracking-wide uppercase">
            Contact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            Let's Work Together
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-lg mb-8">
              I'm always open to collaboration opportunities, learning experiences, 
              and connecting with fellow developers and students.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:kashyap.dhamecha.cg@gmail.com"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Mail size={24} />
                <span>kashyap.dhamecha.cg@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kashyap07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
                <span>LinkedIn Profile</span>
              </a>
              
              <a 
                href="https://github.com/kashyapdhamecha2207"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            <div>
              <label htmlFor="contact-name" className="sr-only">Your name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="name"
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors duration-300 disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="sr-only">Your email address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="email"
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors duration-300 disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={isLoading}
                className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors duration-300 resize-none disabled:opacity-50"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black p-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
