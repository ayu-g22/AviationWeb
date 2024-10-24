import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: 'How would you implement this in places without cameras?',
      answer: 'We would integrate with the e-challan system already in use by traffic police. This ensures coverage even without cameras.'
    },
    {
      question: 'How do you ensure the driver’s credit score is affected and not the car owner’s?',
      answer: 'We include a vehicle ownership transfer feature, allowing the rightful driver’s score to be affected. Future integration with telematics, GPS, and smartphone data will provide further verification.'
    },
    {
      question: 'Would transferring ownership create a loophole to pass the vehicle to avoid a low score?',
      answer: 'To prevent misuse, we plan to limit frequent ownership transfers and employ real-time driver verification using data from smartphones or connected vehicles (e.g., electric cars).'
    },
    {
      question: 'How does your system reduce traffic congestion?',
      answer: 'By rewarding safe driving and penalizing violations, the system promotes smooth traffic flow, reduces accidents, and leads to better use of transport networks in congested areas.'
    },
    {
      question: 'How do you address the cost of implementation?',
      answer: 'Since much of the infrastructure (e.g., e-challan systems, traffic sensors) already exists, our system focuses on software integration and cloud-based processing, minimizing costs for cities.'
    },
    {
      question: 'What happens if someone’s credit score is affected due to a system error?',
      answer: 'We will implement an appeal system where users can challenge discrepancies. The system will log data to provide transparency, ensuring users can correct any potential errors.'
    }
  ];

  return (
    <div className="bg-black min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center">
         

          {/* Right side for the FAQ content */}
          <div className="w-full text-golden">
            <h1 className="text-darkerGold text-4xl font-bold mb-6 text-center">FAQ</h1>
            <div className="space-y-4 ">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-golden rounded-lg p-4 bg-black"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h2 className="text-darkerGold text-xl font-semibold pr-2">
                      {faq.question}
                    </h2>
                    <span className="text-golden text-2xl">
                      {activeIndex === index ? '-' : '+'}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <p className="mt-4 text-golden">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
