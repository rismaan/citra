
import React from 'react';

const LiveChatWidget: React.FC = () => {
  return (
    <a
      href="https://wa.me/6282260067490"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-5 rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300 ease-in-out"
    >
      <img
        src="https://i.imghippo.com/files/HxR6953AtA.jpg"
        alt="Chat Agent"
        className="w-10 h-10 rounded-full object-cover border-2 border-white mr-3"
      />
      <span>Chat Langsung</span>
    </a>
  );
};

export default LiveChatWidget;