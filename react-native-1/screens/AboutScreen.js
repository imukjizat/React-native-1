import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.content}>
        Selamat datang di projek pertama react native Ilham Mukjizat.
        Disini Ilham Mukjizat akan mengembangkan aplikasi ini lebih lanjut.
      </Text>
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 16,
    color: '#333', // Ubah warna teks sesuai preferensi Anda
  },
});

export default AboutScreen;
