import { useState } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
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
      // Initialize EmailJS with public key
      emailjs.init('pKlC2Onlolho6Giba');

      // Send email using service and template IDs
      const result = await emailjs.send(
        'service_og3z4zk', // Service ID
        'template_sa3wicd', // Template ID
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
    <section id="contact" className="py-24 bg-background text-black border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200/85">
              Contact
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight uppercase">
              Let's build
              <br />
              <span className="text-neutral-400">something together.</span>
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 pt-8 border-t border-neutral-200/80 items-start">
          
          {/* Socials & Info (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              I am always open to discussing new opportunities, internship roles, collaboration ideas, or simply chat about full-stack architectures.
            </p>

            <div className="space-y-4">
              {/* Email link */}
              <a 
                href="mailto:kashyap.dhamecha.cg@gmail.com"
                className="group flex items-center justify-between p-5 bg-white border border-neutral-200 rounded-2xl hover:border-black transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">Email Me</span>
                    <span className="text-sm font-semibold text-neutral-800">kashyap.dhamecha.cg@gmail.com</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
              </a>

              {/* LinkedIn link */}
              <a 
                href="https://www.linkedin.com/in/kashyap07"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-white border border-neutral-200 rounded-2xl hover:border-black transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">LinkedIn</span>
                    <span className="text-sm font-semibold text-neutral-800">in/kashyap07</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
              </a>

              {/* GitHub link */}
              <a 
                href="https://github.com/kashyapdhamecha2207"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-white border border-neutral-200 rounded-2xl hover:border-black transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 bg-neutral-100 rounded-xl group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                    <Github size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">GitHub</span>
                    <span className="text-sm font-semibold text-neutral-800">github.com/kashyapdhamecha2207</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5 bg-white border border-neutral-200 p-8 rounded-3xl" aria-label="Contact form">
            
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider pl-1">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="name"
                className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-black placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black transition-all duration-300 disabled:opacity-50 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider pl-1">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                autoComplete="email"
                className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-black placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black transition-all duration-300 disabled:opacity-50 text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider pl-1">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={isLoading}
                className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-black placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-black transition-all duration-300 resize-none disabled:opacity-50 text-sm"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white p-4 rounded-full font-semibold text-sm hover:bg-neutral-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
