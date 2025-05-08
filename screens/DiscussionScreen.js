import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Button } from 'react-native';

export default function DiscussionScreen({ route }) {
  const { club } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', user: 'AnimeFan123', content: 'Who else cried in episode 59?' },
    { id: '2', user: 'OtakuZ', content: 'Best plot twist ever!' },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        user: 'You',
        content: message,
      };
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{club.name}</Text>

      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.user}>{item.user}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />

      <TextInput
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
        style={styles.input}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, marginBottom: 10 },
  message: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f3f4f6',
    borderRadius: 6,
  },
  user: { fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
  },
});
