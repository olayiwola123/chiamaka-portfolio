import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/2347030121795?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
            setMessage('');
        }
    };

    return (
        <div className="fixed bottom-16 right-8 z-50">
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-green-500 p-3 rounded-full shadow-lg cursor-pointer text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaWhatsapp size={28} />
            </motion.div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className="bg-white p-4 rounded-lg shadow-xl mt-2 flex items-center space-x-2"
                >
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="border border-gray-300 rounded-lg px-3 py-2 flex-grow focus:outline-none focus:ring focus:ring-green-300"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </motion.div>
            )}
        </div>
    );
}

export default WhatsAppChat;
