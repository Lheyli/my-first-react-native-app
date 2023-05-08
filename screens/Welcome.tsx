import React from 'react';
import { StyleSheet, Text, View, Button, Image  } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>;
};

const Welcome = ({ navigation }: Props) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME!</Text>
      <Image source={require('../assets/image.jpg')} style={styles.image} />
      <View style={styles.buttonContainer}>
      <Button title="Get Started" color="#f5222d" onPress={handlePress}  />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff1f0',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff7875',
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default Welcome;
