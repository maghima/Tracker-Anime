import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
//import { auth } from '../firebaseConfig';
//import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /*const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });
      navigation.replace('Home');
    } catch (error) {
      alert(error.message);
    }
  };*/
  const handleRegister = () => {
    // TODO: Connect to Firebase or your backend
    if (!email || !password || !username) {
      alert('Please fill all fields');
      return;
    }

    alert(`Registered as ${username}`);
    navigation.replace('Login'); // Or go to Login if needed
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: '#4f46e5',
    textDecorationLine: 'underline',
  },
});