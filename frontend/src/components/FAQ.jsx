import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import '../FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null); // Create a ref for the answer element

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: 'Do you provide placement assistance for students?',
      answer: 'Of course, Runway24 always ensures and assures 100% placement assistance for our students.'
    },
    {
      question: 'What is the eligibility to join the course?',
      answer: 'Different courses have different eligibility options which are clearly mentioned on our course page. For more info kindly contact us.'
    },
    {
      question: 'What is the fee structure of your courses?',
      answer: 'Our fee structure is designed to cater to the needs of students, enabling them to complete their program without financial constraints.'
    },
    {
      question: 'How can I apply?',
      answer: 'Joining our aviation programs is simple. Contact us through the details on our site, and our team will guide you.'
    },
    {
      question: 'Do I need to make my payment in advance?',
      answer: 'Training charges are paid in advance and can also be paid in installments.'
    }
  ];

  useEffect(() => {
    if (activeIndex !== null) {
      // Set the height to the scrollHeight of the answer when active
      setHeight(answerRef.current.scrollHeight);
    } else {
      setHeight(0); // Reset height when no question is active
    }
  }, [activeIndex]);

  return (
    <div className="faq-container bg-black min-h-screen py-10 pt-24 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center">
          {/* FAQ Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto text-golden"
          >
            <h1 className="text-darkerGold text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">FAQ</h1>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-2 border-darkerGold rounded-xl p-4 bg-black shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <FaQuestionCircle className="text-darkerGold mr-2 text-lg" />
                    <h2 className="text-darkerGold text-lg sm:text-xl lg:text-xl font-semibold flex-1">
                      {faq.question}
                    </h2>
                    <span className="text-golden text-xl sm:text-xl">
                      {activeIndex === index ? '-' : '+'}
                    </span>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: height, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p
                          ref={answerRef}
                          className="mt-4 text-golden text-sm sm:text-base lg:text-lg"
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Decorative Divider */}
            <div className="mt-12 border-t border-darkerGold opacity-50 mx-auto w-1/3"></div>

            {/* Contact Us Section */}
            <div className="mt-8 text-center">
              <p className="text-golden text-lg mb-4">
                Have more questions? <br /> Our team is here to help!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-golden to-darkerGold text-black px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
