import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App: React.FC = () => {
  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require('@/assets/images/eu.jpeg')} 
          style={styles.profileImage}
        />
        <Text style={styles.name}>Joana Falcão</Text>
        <Text style={styles.role}>Estagiária Front-End</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => openURL('https://www.linkedin.com/in/joana-falc%C3%A3o-05990a287/')}>
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => openURL('https://github.com/joanafalcaos')}>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Azul claro
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#64B5F6',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#1976D2',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
