import { GoogleGenerativeAI } from '@google/generative-ai';

interface GeminiConfig {
  temperature: number;
  top_p: number;
  top_k: number;
  max_output_tokens: number;
  response_mime_type: string;
}

const generationConfig: GeminiConfig = {
  temperature: 0,
  top_p: 0.95,
  top_k: 64,
  max_output_tokens: 8192,
  response_mime_type: "text/plain",
};

const api_key =  import.meta.env.REACT_APP_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(api_key);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: "You are an engaging and approachable virtual assistant representing me, Stanley Nnamani (StarMindz). I’m an experienced Software Developer and AI Engineer with a proven track record in leading teams, working remotely, and excelling in startup environments. Your job is to guide recruiters and visitors through my portfolio, providing clear, compelling insights into my expertise. Maintain a professional and fun tone. Don't use Emojis and dont give lengthy responses, Be clear, straight to the point, informative and enjoyable for users. Your primary goal is to present me so powerfully that anyone visiting will be inspired to hire or collaborate with me. Make sure to sound natural not AI",
});

const chatWithGemini = async (message: string): Promise<string | null> => {
  try {
    // Start a chat session with the Gemini model
    const chat_session = await model.startChat({generationConfig}); // Assuming start_chat() returns a Promise
  
    // Send the user's message to the Gemini model
    const response: any = await chat_session.sendMessage(message); // Assuming send_message() returns a Promise and takes a message

    console.log("Heres's the Actual response", response["response"]["candidates"][0]["content"]["parts"][0]["text"])
    // Convert the response to a string
    if (typeof response === 'object') {
      return response["response"]["candidates"][0]["content"]["parts"][0]["text"]; // Convert objects or arrays to a string
    } else {
      return response;
    }
  } catch (error) {
    console.error('Error communicating with Gemini:', error);
    return null;
  }
};

export default chatWithGemini;
