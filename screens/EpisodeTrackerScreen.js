import { scheduleReminder } from '../utils/notifications';

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Linking  } from 'react-native';
import Slider from '@react-native-community/slider';

export default function EpisodeTrackerScreen({ route }) {
  const { show } = route.params;
  const totalEpisodes = 24; // Can be dynamic from DB/API
  const [watched, setWatched] = useState(0);
  const openStreaming = () => {
    // Example URLs (can be dynamic in the future)
    const urls = {
      'Attack on Titan': 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan',
      'Demon Slayer': 'https://www.netflix.com/title/81091393',
      'One Piece': 'https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece',
      'Death Note' : 'https://www.imdb.com/title/tt0877057/',
    };

    const url = urls[show.title];
    if (url) Linking.openURL(url);
    else alert('Streaming link not available');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{show.title}</Text>
      <Text style={styles.label}>Watched {watched} of {totalEpisodes} episodes</Text>

      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={totalEpisodes}
        step={1}
        value={watched}
        onValueChange={value => setWatched(value)}
      />

      <Button title="Save Progress" onPress={() => alert('Progress Saved!')} />
      <Button title="Remind Me in 10s" onPress={() => scheduleReminder('New Episode', 'Watch the next episode now!', 10)} />
      <Button title="Watch Now" onPress={openStreaming} />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 10 },
});
