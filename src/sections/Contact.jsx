import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {/* Contact form will go here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
