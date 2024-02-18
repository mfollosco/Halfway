import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import {firebase} from './config';

const assistant_role = `

I am Sunny, your dedicated, but limited, habit tracking assistant. Here's what to expect:

Focus:

Simple check-ins: Message me every few hours with updates like "Completed X!" or "Struggled with Y."
Brief responses: My only role is to acknowledge your efforts with concise and neutral phrases like "Great! Noted."
I can't respond with something too different to the aforementioned examples.
No analysis or advice: I cannot offer opinions, solutions, or diagnoses.
Remember:

I am a chatbot: I lack understanding and emotional capacity.
No chit-chat: Stick to habit updates only.
Limited responses: Don't expect lengthy replies or discussions.
I will ALWAYS respond to every message you send
Overall:

I'm here to provide simple recognition, not complex therapy. Focus on sharing your progress, and I'll offer a quick boost without unnecessary chatter.

`;

export default function ChatbotApp() {
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState("");
  const OPEN_AI_KEY = "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";


  const handleSend = async (newMessages = []) => {
    try {
      const userMessage = newMessages[0];
      setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage));
  
      const messageText = userMessage.text.toLowerCase();
      const keywords = ["mental health", "lazy", "motivated", "depression", "good day", "happy"];
  
      if (!keywords.some(keyword => messageText.includes(keyword))) {
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: "Your answer is not relevant. Try again",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Sunny'
          }
        };
  
        setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
      } else {
        try {
          const result = await axios.post(
            'https://api.openai.com/v1/engines/davinci-002/completions',
            {
              prompt: assistant_role,
              max_tokens: 25,
              temperature: 0.5
              //system_context: assistant_role
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPEN_AI_KEY}`,
              },
            },
          );

          console.log("Doneee");
          console.log(result.data.choices[0].text)
          console.log("Doneee2");

        //   const botMessage = {
        //     _id: new Date().getTime() + 2, // Use a different ID for the bot's message
        //     text: result.data.choices[0].text,
        //     createdAt: new Date(),
        //     user: {
        //       _id: 2,
        //       name: 'Sunny'
        //     }
        //   };
  
          const botMessageText = result.data.choices[0].text.replace(/(<([^>]+)>)/gi, "");
          const botMessage = {
            _id: new Date().getTime() + 2,
            text: botMessageText,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Sunny'
            }
          };

          setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
        } catch (error) {
          console.error('Error fetching AI response:', error);
        }
      }
    } catch (error) {
      console.error('Error in handleSend:', error);
    }
  };

  const endConversation = async () => {
    const database = firebase.firestore();
    database.collection("userMessage").add({
      Message: "Test",
      // Timestamp: DateTime.now(),
    })
    .then((docRef)=>{
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.log("Error adding document: ", error);
    })
  }
  
  return (
    <View style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}>
      <View
        style={{
          backgroundColor: '#514D80',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          borderBottomWidth: 1,
          marginTop: 40,
          marginBottom: 5
        }} >
        <Text style={{
          fontSize: 32,
          fontWeight: "bold"
        }}>
          Sunny
        </Text>
      </View>

      <TouchableOpacity onPress={endConversation}>
          <Text>
            End Conversation

        </Text>
      </TouchableOpacity>
      <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{ _id: 1 }}
        // other GiftedChat props...
      />
    </View>
  );
};



