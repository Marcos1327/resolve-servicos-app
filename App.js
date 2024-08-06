import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importando o ícone

export default function App() {
  return (
    <ImageBackground 
      source={{ uri: 'https://uploaddeimagens.com.br/images/004/821/527/full/eu_e_ela.jpeg?1722899308' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>EU TE AMO REBEKA FERNANDES DE JESUS</Text>
        <FontAwesome name="heart" size={30} color="red" style={styles.icon} /> 
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 150,
    fontSize: 20,
    color: 'white',
  },
  icon: {
    marginBottom: 10, // Ajuste o valor conforme necessário
  },
});