import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = 'API_KEY_HIDDEN'; 

const ArtificalScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const presetText = "Pretend as if you are an expert in Finance. Answer only finance related questions. If the question is not finance related, tell me that you are only capable of answering finance related questions. Give very short answer to this question:\n";

  const handleSend = async () => {
    const messageToSend = presetText + inputMessage; 

    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    try {
      const result = await model.generateContent(messageToSend); 
      const textResponse = result.response.text();
      setMessages(prevMessages => [...prevMessages, { text: textResponse, sender: 'gemini' }]);
    } catch (error) {
      console.error('Error generating response:', error);
    }
  };

  const startNewChat = () => {
    setMessages([]);
    setInputMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.message, item.sender === 'user' ? styles.userMessage : styles.geminiMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        
        contentContainerStyle={styles.chatArea}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={handleSend} />
        <TouchableOpacity style={styles.newChatButton} onPress={startNewChat}>
          <Text style={styles.newChatButtonText}>New Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  chatArea: { marginTop: 100, flexGrow: 1, padding: 15 },
  message: { padding: 12, borderRadius: 20, maxWidth: '75%', alignSelf: 'flex-start', overflow: 'hidden' },
  userMessage: { backgroundColor: '#2E86AB', alignSelf: 'flex-end', borderBottomRightRadius: 5 },
  geminiMessage: { backgroundColor: '#333', borderBottomLeftRadius: 5 },
  messageText: { color: 'white', fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, borderTopWidth: 1, borderTopColor: '#222', backgroundColor: '#181818' },
  input: { flex: 1, backgroundColor: '#282828', borderRadius: 25, padding: 12, color: 'white', marginRight: 10 }, // Added marginRight for spacing
  newChatButton: { backgroundColor: '#555', borderRadius: 20, paddingHorizontal: 15, paddingVertical: 8 },
  newChatButtonText: { color: 'white', fontWeight: 'bold' },
});

export default ArtificalScreen;
