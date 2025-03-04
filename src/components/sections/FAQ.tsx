import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="text-blue-600 text-2xl transform transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

interface Faq {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  
  // Initial visible FAQs
  const initialFaqs: Faq[] = [
    {
      question: "What is LocalCart?",
      answer: "LocalCart is a last-mile delivery platform that connects over 25,000 local retailers with customers. We provide same-day delivery, inventory synchronization, and secure payment processing to ensure a seamless shopping experience."
    },
    {
      question: "How does LocalCart ensure on-time delivery?",
      answer: "LocalCart has a 98% on-time delivery rate thanks to our advanced logistics network, real-time tracking, and efficient route optimization. We prioritize timely deliveries to meet customer expectations."
    },
    {
      question: "What cities does LocalCart operate in?",
      answer: "LocalCart currently operates in 100 cities and is continuously expanding. You can check if we’re available in your city by visiting our website or contacting our support team."
    },
    {
      question: "How can I join LocalCart as a retailer?",
      answer: "Retailers can join LocalCart by signing up on our platform. We provide tools for inventory synchronization, payment processing, and access to a large customer base. Visit our website to get started."
    },
    {
      question: "What is inventory synchronization?",
      answer: "Inventory synchronization ensures that your online store’s inventory is updated in real-time with your physical stock. This helps avoid overselling and ensures accurate product availability for customers."
    }
  ];
  
  // Additional FAQs that will be shown after clicking "Show more"
  const additionalFaqs: Faq[] = [
    {
      question: "Does LocalCart offer same-day delivery?",
      answer: "Yes, LocalCart offers same-day delivery in all the cities we operate in. Customers can enjoy fast and reliable delivery services for their orders."
    },
    {
      question: "How does payment processing work on LocalCart?",
      answer: "LocalCart provides secure payment processing for both retailers and customers. We support multiple payment methods, including credit/debit cards, digital wallets, and cash on delivery."
    },
    {
      question: "Is LocalCart available on mobile?",
      answer: "Yes, LocalCart has a mobile app for both customers and retailers. You can download it from the App Store or Google Play to manage orders, track deliveries, and sync inventory on the go."
    },
    {
      question: "How does LocalCart benefit local retailers?",
      answer: "LocalCart helps retailers expand their reach, manage inventory efficiently, and process payments securely. By joining our platform, retailers can grow their business and serve more customers."
    },
    {
      question: "What is LocalCart's customer support like?",
      answer: "LocalCart offers 24/7 customer support through phone, email, and live chat. Our team is always ready to assist with any questions or issues you may have."
    }
  ];

  // Determine which FAQs to show based on showAll state
  const visibleFaqs: Faq[] = showAll ? [...initialFaqs, ...additionalFaqs] : initialFaqs;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left column with title */}
        <div className="md:col-span-4">
          <h2 className="text-5xl font-bold text-black mb-2">Have questions?</h2>
          <p className="text-4xl font-bold text-gray-400">Find answers.</p>
        </div>
        
        {/* Right column with accordion */}
        <div className="md:col-span-8">
          <div className="divide-y divide-gray-200">
            {visibleFaqs.map((faq, index) => (
              <FaqItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
          {!showAll && (
            <button 
              className="mt-8 text-blue-600 font-medium hover:text-blue-700 focus:outline-none transition-colors duration-200"
              onClick={handleShowMore}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;