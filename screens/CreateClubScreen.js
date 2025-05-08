import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateClubScreen({ navigation }) {
  const [clubName, setClubName] = useState('');

  const createClub = () => {
    if (clubName.trim()) {
      alert(`Club "${clubName}" created!`);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Club</Text>
      <TextInput
        placeholder="Club Name"
        value={clubName}
        onChangeText={setClubName}
        style={styles.input}
      />
      <Button title="Create" onPress={createClub} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 20 },
});
