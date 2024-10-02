import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import Backarrow from '../../assets/icons/back_arrow';
import Eyehide from '../../assets/icons/eyeclose';
import Eyeshow from '../../assets/icons/eyeshow';

const typingDuration = 100;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [welcomeText, setWelcomeText] = useState('');
  const [loginText, setLoginText] = useState('');
  const [emailAnimation] = useState(new Animated.Value(0));
  const [passwordAnimation] = useState(new Animated.Value(0));
  const [isLoginButtonVisible, setIsLoginButtonVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const welcome = "Welcome.";
    const login = "Login to start track";

    const typeText = (text, setter) => {
      let index = 0;
      const interval = setInterval(() => {
        setter(prev => prev + text[index]);
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, typingDuration);
    };

    typeText(welcome, setWelcomeText);
    typeText(login, setLoginText);

    const displayElements = () => {
      setTimeout(() => {
        Animated.timing(emailAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 2000);

      setTimeout(() => {
        Animated.timing(passwordAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 2500);

      setTimeout(() => setIsLoginButtonVisible(true), 3000);
      setTimeout(() => setIsRegisterVisible(true), 3500);
    };

    setTimeout(displayElements, welcome.length * typingDuration + typingDuration);
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Email and password cannot be empty.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setErrorMessage('');
    console.log('Logging in with:', email, password);
  };

  const inputScale = (animationValue) => animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <View style={styles.container}>
      <View style={styles.backArrowContainer}>
        <Backarrow style={{ left: 5 }} />
      </View>
      <Text style={styles.welcomeText}>{welcomeText}</Text>
      <Text style={styles.loginText}>{loginText}</Text>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <Animated.View style={{ transform: [{ scale: inputScale(emailAnimation) }] }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={styles.bottomLine} />
        </View>
      </Animated.View>

      <Animated.View style={{ transform: [{ scale: inputScale(passwordAnimation) }] }}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <View style={styles.bottomLine} />

          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            {showPassword ? <Eyeshow /> : <Eyehide />}
          </TouchableOpacity>
        </View>
      </Animated.View>

      {isLoginButtonVisible && (
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      )}

      {isRegisterVisible && (
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => console.log('Navigate to Register')}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  backArrowContainer: {
    borderColor: 'orange',
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10,
    marginTop: 30,
  },
  loginText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
    fontWeight: "bold"
  },
  inputContainer: {
    marginBottom: 15,
    position: 'relative',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    marginTop: 20,
  },
  input: {
    height: 40,
    fontSize: 16,
    padding: 10,
    color: 'black',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  bottomLine: {
    height: 2,
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
  },
  loginButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  registerText: {
    color: 'black',
    fontSize: 16,
  },
  registerLink: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
