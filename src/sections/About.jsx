import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a Computer Science student at The Ohio State University with a passion for learning, software development, and testing. I love diving into new technologies and ensuring software quality.
                </p>
                <p>
                  When I'm not coding, you can find me playing basketball, pickleball, or occasionally tennis (though I'm not winning any championships anytime soon).
                </p>
                <p>
                  LeBron James is the GOAT(let's settle that debate).
                </p>
                <p>
                  Taco Bell enthusiast and late-night library regular. The perfect study break combo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
