import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(true);

  const handleLogin = () => {
    // handle login logic here
  };

  const onPress = () => {
    // handle Facebook login logic here
  };


  return (
    <View style={styles.container}>
         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
         <Image source={require('../assets/logo.png')} style={styles.logo} />
         </View>
      <TextInput
        label="Email or Mobile Number"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
           <TextInput
        label="Password"
        value={password}
        secureTextEntry={hidePassword}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        right={
          <TextInput.Icon
            style={styles.eye}
            name={hidePassword ? 'eye-off' : 'eye'}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
       <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <Button style={styles.facebook} onPress={onPress}>
      <Icon name="facebook" size={20} color="#5250B4" />
      <Text style={styles.fbText}>   FACEBOOK LOG IN</Text>
    </Button>
    <Button style={styles.google} onPress={onPress}>
      <Icon name="google" size={20} color="#5250B4" />
      <Text style={styles.gText}>   GOOGLE LOG IN</Text>
    </Button>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ borderColor: 'rgba(48, 48, 77, 0.12)', borderWidth: 1, borderBottomWidth: 0.6, width: '80%', marginBottom: 20 }} />
  <Text style={styles.text}>Don't have an account?</Text>
  <Text style={styles.cText}>CREATE AN ACCOUNT</Text>
  <Button style={styles.facebookText} onPress={onPress}>
      <Icon name="facebook" size={20} color="#5250B4" />
      <Text style={styles.fText}>   FACEBOOK LOG IN</Text>
    </Button>
    <Button style={styles.googleText} onPress={onPress}>
      <Icon name="google" size={20} color="#5250B4" />
      <Text style={styles.ggText}>   GOOGLE LOG IN</Text>
    </Button>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  facebook: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#5250B4',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },  
  fbText: {
    color: '#5250B4',
    marginLeft: 10,
  },
  facebookText: {
    width: '80%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#5250B4',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },  
  fText: {
    color: '#5250B4',
    marginLeft: 10,
  },
  text: {
    color: '#30304D',
    marginBottom: 10,
    fontWeight: 'bold'
    
  },
  cText: {
    color: '#5250B4',
    marginBottom: 10,
    
  },
  google: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#5250B4',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },  
  gText: {
    color: '#5250B4',
    marginLeft: 10,
  },
  googleText: {
    width: '80%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#5250B4',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },  
  ggText: {
    color: '#5250B4',
    marginLeft: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5250B4',
    marginBottom: 30,
    textAlign: 'center',
  },
  forgotText: {
    fontSize: 16,
    color: '#5250B4',
    marginBottom: 30,
    textAlign: 'left',
  },
 input: {
    width: '100%',
    height: 50,
    borderColor: '#5c0011',
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  eye: {
    color: '#ff7875',
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: '#5250B4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 250,
    height: 80,
    marginBottom: 30,
  },
});

export default Login;
