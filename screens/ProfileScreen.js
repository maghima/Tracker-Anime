import React from 'react';
//import { auth } from '../firebaseConfig';
//import { signOut } from 'firebase/auth';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const user = {
    name: 'OtakuMaster99',
    avatar: 'https://i.pravatar.cc/150?img=12',
    episodesWatched: 341,
    favoriteGenres: ['Shonen', 'Thriller', 'Fantasy'],
  };
  /*const user = auth.currentUser;
  const username = user?.displayName;
  const email = user?.email;*/
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Episodes Watched:</Text>
        <Text>{user.episodesWatched}</Text>
      </View>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Favorite Genres:</Text>
        <Text>{user.favoriteGenres.join(', ')}</Text>
      </View>

      <View style={styles.buttons}>
        <Button title="Edit Profile" onPress={() => alert('Edit Profile')} />
        <View style={{ height: 10 }} />
        <Button title="Logout" onPress={() => signOut(auth)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 6,
  },
  statLabel: { fontWeight: 'bold' },
  buttons: { marginTop: 30, width: '100%' },
});
