import axios from 'axios';

const apiKey = 'LA-8cef0a65fa154994b08f69f22897b0c618f390884ea34aa69c1d029fa9308b4c';
const baseUrl = 'https://api.llama-api.com';

const sendMessage = async () => {
  try {
    const response: any = await axios.post(
      `${baseUrl}/v1/chat/completions`, // Adjust the endpoint if needed
      {
        model: 'llama3.1-70b',
        messages: [
          { role: 'system', content: 'Assistant is a large language model trained by OpenAI.' },
          { role: 'user', content: 'Who were the founders of Microsoft?' }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    // You can adjust this based on the actual response structure
    const content = response.data.choices[0].message.content;
    console.log('Response:', JSON.stringify(response.data, null, 2));
    console.log('Message Content:', content);
  } catch (error) {
    console.error('Error calling the Llama API:', error);
  }
};

// Call the function
sendMessage();