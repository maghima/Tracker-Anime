import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';

const mockClubs = [
  { id: '1', name: 'Attack on Titan Fans', members: 120 },
  { id: '2', name: 'Shonen Enthusiasts', members: 90 },
  { id: '3', name: 'Anime & Chill', members: 200 },
];

export default function ClubsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Community Clubs</Text>

      <FlatList
        data={mockClubs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.clubCard}
            onPress={() => navigation.navigate('Discussion', { club: item })}
          >
            <Text style={styles.clubName}>{item.name}</Text>
            <Text style={styles.members}>{item.members} members</Text>
          </TouchableOpacity>
        )}
      />

      <Button title="Create a Club" onPress={() => navigation.navigate('CreateClub')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, marginBottom: 16 },
  clubCard: {
    backgroundColor: '#e0e7ff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  clubName: { fontSize: 18, fontWeight: 'bold' },
  members: { color: '#555' },
});
