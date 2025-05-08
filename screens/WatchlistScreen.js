import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';

const mockWatchlist = [
  { id: '1', title: 'Attack on Titan', category: 'Watching' },
  { id: '2', title: 'Demon Slayer', category: 'Completed' },
  { id: '3', title: 'One Piece', category: 'Watching' },
  { id: '4', title: 'Death Note', category: 'Plan to Watch' },
];

const categories = ['All', 'Watching', 'Completed', 'On Hold', 'Dropped', 'Plan to Watch'];

export default function WatchlistScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const shareWatchlist = async () => {
    const list = filteredList.map(item => `- ${item.title} (${item.category})`).join('\n');
    const fileUri = FileSystem.documentDirectory + 'watchlist.txt';
    await FileSystem.writeAsStringAsync(fileUri, list);
    await Sharing.shareAsync(fileUri);
  };
  
  const filteredList =
    selectedCategory === 'All'
      ? mockWatchlist
      : mockWatchlist.filter(item => item.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Watchlist</Text>

      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('EpisodeTracker', { show: item })}
          >
            <Text style={styles.showTitle}>{item.title}</Text>
            <Text style={styles.showCategory}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />

      // Add this button at the bottom of the return
      <Button title="Share My Watchlist" onPress={shareWatchlist} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  categoryContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedCategory: { backgroundColor: '#4f46e5' },
  categoryText: { color: '#333' },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  showTitle: { fontSize: 18 },
  showCategory: { color: '#666' },
});
