
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading the n8n chatbot
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <span className="text-2xl">{isOpen ? '✕' : '💬'}</span>
        </Button>
        
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
            Chat with us!
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-40 border border-gray-200 overflow-hidden animate-scale-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold">Square Academy Assistant</h3>
                <p className="text-xs text-blue-100">Ask me anything about our courses!</p>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors duration-300"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="h-full pb-16">
            {isLoaded ? (
              <iframe
                src="https://your-n8n-instance.com/webhook/chatbot-frontend"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Square Academy Chatbot"
                className="bg-gray-50"
              />
            ) : (
              <div className="p-6 h-full flex flex-col justify-center items-center bg-gray-50">
                <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
                <p className="text-gray-600 text-sm">Loading chatbot...</p>
              </div>
            )}
          </div>

          {/* Fallback Content if iframe doesn't load */}
          <div className="absolute inset-0 bg-white hidden" id="fallback-chat">
            <div className="p-4 h-full flex flex-col">
              <div className="flex-1 space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    👋 Hi! I'm here to help you with information about Square Academy. 
                    You can ask me about:
                  </p>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors duration-300">
                    💰 What are the fees for JEE coaching?
                  </button>
                  <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors duration-300">
                    🏫 Do you offer offline classes?
                  </button>
                  <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors duration-300">
                    📍 Where is the institute located?
                  </button>
                  <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors duration-300">
                    📅 How can I book a demo class?
                  </button>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-xs text-gray-500 text-center">
                  For immediate assistance, call: +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
