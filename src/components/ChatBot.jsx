import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isContactForm, setIsContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  });

  // EmailJS Configuration
  const emailConfig = {
    serviceID: 'service_w8i5o6c',
    templateID: 'template_b2na8un',
    userID: 'i6zt0dd8scG-ImPC5'
  };

  // Predefined Bot Responses
  const botResponses = {
    greeting: "👋 Hi there! I'm your virtual assistant. You can ask me about:\n📌 Skills\n📌 Experience\n📌 Education\nType 'contact' if you'd like to reach out!",
    
    contact: "📩 I'd love to hear from you! Please share:\n1️⃣ Your Full Name\n2️⃣ Your Email\n3️⃣ Your Phone (optional)\n4️⃣ Your Message\nI'll get back to you soon!",

    thankYou: "✅ Thanks for reaching out! I'll review your message and respond within 24 hours.",

    skills: "🚀 My skill set includes:\n💻 React, JavaScript, Python, HTML/CSS\n🔗 Windchill & Automation\n⚙️ Web & Software Development",

    experience: "📊 I have good years of experience in:\n🔹 Frontend Development\n🔹 Automation & Windchill Integration\n🔹 Jira & Workflow Optimization",

    education: "🎓 I have done my masters in Electronic Systems Design at NTNU and bachelor's in Electrical and Electronics Engineering at Pokhara University.\n💡 Passionate about software, electronics automation, and web technologies!",

    default: "🤖 I'm here to assist you!\nTry asking about my:\n- Skills\n- Experience\n- Education\nType 'contact' to message me directly."
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openChat = () => {
    setShowChat(true);
  
    // Send greeting message only if it's the first time opening the chat
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([{ text: botResponses.greeting, isBot: true }]);
      }, 500);
    }
  };
  

  // Handles user message submission
  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    setMessages(prev => [...prev, { text: inputMessage, isBot: false }]);
    setInputMessage('');

    // If currently filling out the contact form, handle form input
    if (isContactForm) {
      handleContactForm(inputMessage);
      return;
    }

    // Normalize user input
    const userInput = inputMessage.trim().toLowerCase();
    
    // Check if response exists, otherwise use default response
    const response = botResponses[userInput] || botResponses.default;

    // If user wants to contact, activate contact form
    if (userInput === "contact") {
      setIsContactForm(true);
      setContactInfo({ name: '', email: '', phone: '', message: '' });
    }

    // Add bot response to chat after delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 800);
  };

  // Handles contact form input step-by-step
  const handleContactForm = (input) => {
    const currentState = contactInfo;
    const steps = ['name', 'email', 'phone', 'message'];
    const currentStep = steps.findIndex(step => !currentState[step]);

    if (currentStep !== -1) {
      const stepName = steps[currentStep];
      setContactInfo(prev => ({ ...prev, [stepName]: input }));
      setMessages(prev => [...prev, { 
        text: `${stepName.charAt(0).toUpperCase() + stepName.slice(1)}: ${input}`,
        isBot: true 
      }]);

      if (currentStep === 3) {
        sendEmail();
        setIsContactForm(false);
        setMessages(prev => [...prev, { text: botResponses.thankYou, isBot: true }]);
      }
    }
  };

  // Sends email using EmailJS
  const sendEmail = () => {
    emailjs.send(
      emailConfig.serviceID,
      emailConfig.templateID,
      contactInfo,
      emailConfig.userID
    ).catch(error => console.error('Email error:', error));
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {showChat ? (
        <div 
          className="w-80 bg-white rounded-xl shadow-2xl border border-gray-100"
          data-aos="zoom-in"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-bold text-lg">Chat Assistant</h3>
            <button 
              onClick={() => setShowChat(false)}
              className="hover:rotate-90 transition-transform duration-300"
            >
              ✕
            </button>
          </div>
          
          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg ${
                  msg.isBot ? 
                  'bg-white border border-gray-200' : 
                  'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                }`}>
                  {msg.text.split('\n').map((line, idx) => (
                    <p key={idx} className="leading-snug">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full pl-4 pr-12 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 text-white p-1.5 rounded-lg hover:bg-purple-600"
              >
                ➤
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={(openChat) => setShowChat(true)}
          className="group bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          data-aos="fade-left"
        >
          🤖 Chat with me
        </button>
      )}
    </div>
  );
};

export default ChatBot;
