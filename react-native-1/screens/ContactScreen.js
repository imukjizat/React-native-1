import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

// Import gambar dari direktori lokal
import ElonImage from './assets/Elon.png'; // Ganti dengan path yang benar
import ZuckerbergImage from './assets/Zuckerberg.png'; // Ganti dengan path yang benar
import IlhamImage from './assets/Ilham.png';

const ContactScreen = () => {
  const kontak = [
    { id: '1', nama: 'Ilham Mukjizat', nomorTelepon: '081112223334', imageUrl: IlhamImage },
    { id: '2', nama: 'Mark Zuckerberg', nomorTelepon: '08765432101', imageUrl: ZuckerbergImage },
    { id: '3', nama: 'Elon Musk', nomorTelepon: '08123456789', imageUrl: ElonImage },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.profileContainer}>
      <Image
        source={item.imageUrl}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nama}>{item.nama}</Text>
        <Text style={styles.nomorTelepon}>{item.nomorTelepon}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={kontak}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  flatListContainer: {
    paddingBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 15,
  },
  nama: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nomorTelepon: {
    fontSize: 16,
    color: '#555',
  },
});

export default ContactScreen;
