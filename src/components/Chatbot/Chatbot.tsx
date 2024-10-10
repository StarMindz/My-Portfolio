import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { technologies, testimonials, experiences, projects } from '../../information';
import chatWithGemini from '../../utils/chat';

// Define the types for messages
interface Message {
  name: string;
  message: string;
}

const Chatbox: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

// Mapping technology names to a single string
const technologyNames = technologies.map(tech => tech.name).join(", ");

// Formatting experience details into a readable string
const experienceDetails = experiences.map(exp =>
  `Title: ${exp.title}, Company: ${exp.company_name}, Date: ${exp.date}`
).join("\n");

// Formatting project details into a readable string
const projectDetails = projects.map(project =>
  `Project Name: ${project.name}, Description: ${project.description}`
).join("\n");

// Formatting testimonial details into a readable string
const testimonialDetails = testimonials.map(testi =>
  `Name: ${testi.name}, Designation: ${testi.designation}, Company: ${testi.company}, Testimonial: "${testi.testimonial}"`
).join("\n");



  useEffect(() => {
    const handleEnterPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSend();
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener('keyup', handleEnterPress);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keyup', handleEnterPress);
      }
    };
  }, []);

  const toggleChatbox = () => {
    setIsActive(!isActive);
  };

  const handleSend = async () => {
    if (!inputRef.current) return;
    const text = inputRef.current.value;
    if (text.trim() === '') return;

    const userMessage: Message = { name: 'User', message: text };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    inputRef.current.value = '';

    const prompt = `
    User Input: "${text}".

    Context:
    Here are some of my tech skills and technologies:
    ${technologyNames}

    Here are some of my past experiences:
    ${experienceDetails}

    Here are some testimonials about me:
    ${testimonialDetails}

    Here are some project I've worked on in the past:
    ${projectDetails}
    `;
    console.log(prompt)

    try {
      const geminiResponse = await chatWithGemini(prompt);
      const chatbotMessage: Message = { name: 'Chatbot', message: geminiResponse || 'Response not available.' };
      setMessages((prevMessages) => [...prevMessages, chatbotMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = { name: 'Chatbot', message: 'Sorry, there was an error processing your request.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbox">
      <div className={`chatbox__support w-[280px] md:w-[300px] ${isActive ? 'chatbox--active' : ''}`}>
        <div className="chatbox__header">
          <div className="chatbox__image--header">
            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="avatar" />
          </div>
          <div className="chatbox__content--header">
            <h4 className="chatbox__heading--header">Chat Support</h4>
            <p className="chatbox__description--header">Hi! How can I help you?</p>
          </div>
        </div>
        <div className="chatbox__messages" ref={messagesRef}>
          {messages.slice().reverse().map((msg, index) => (
            <div
              key={index}
              className={`messages__item ${msg.name === 'Chatbot' ? 'messages__item--visitor' : 'messages__item--operator'}`}
            >
              {`${msg.message}`}
            </div>
          ))}
        </div>
        <div className="chatbox__footer">
          <input type="text" placeholder="Write a message..." ref={inputRef} />
          <button className="chatbox__send--footer send__button" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
      <div className="chatbox__button">
        <button onClick={toggleChatbox}>
          <img src="/comment-solid (1).svg" alt="chat icon" />
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
