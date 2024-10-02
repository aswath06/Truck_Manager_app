import { StyleSheet, Text, View, TextInput, Animated, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Backarrow from '../../assets/icons/back_arrow';
import Nextarrow from '../../components/backarroe';

const typingDuration = 100;

export default function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailAnimation] = useState(new Animated.Value(0));
  const [progress] = useState(new Animated.Value(0));
  const [errorMessage, setErrorMessage] = useState('');
  const [nameText, setNameText] = useState('');
  const [slideAnim] = useState(new Animated.Value(0));
  const [step, setStep] = useState(1);

  useEffect(() => {
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

    typeText("Let's start with your name", setNameText);

    const displayElements = () => {
      setTimeout(() => {
        Animated.timing(emailAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();

        Animated.timing(progress, {
          toValue: 1 / 3,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }, 2000);
    };

    setTimeout(displayElements, nameText.length * typingDuration + typingDuration);
  }, []);

  const handleNextArrowClick = () => {
    if (step === 1 && !name) {
      setErrorMessage('Name cannot be empty.');
      return;
    }
    if (step === 2 && !email) {
      setErrorMessage('Email cannot be empty.');
      return;
    }

    Animated.timing(slideAnim, {
      toValue: -300,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      if (step === 1) {
        setStep(2);
        setNameText('Hello, enter your email');
        // Fill to half
        Animated.timing(progress, {
          toValue: 0.5,
          duration: 500,
          useNativeDriver: false,
        }).start();
      } else if (step === 2) {
        setStep(3);
        setNameText('Great! Create your password');
        // Fill to full
        Animated.timing(progress, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }
      setErrorMessage('');

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleLogin = () => {
    if (!email) {
      setErrorMessage('Email cannot be empty.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setErrorMessage('Password cannot be empty.');
      return;
    }
    setErrorMessage('');
    console.log('Logging in with:', { email, password });
  };

  const inputScale = (animationValue) => animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.backArrowContainer}>
        <Backarrow style={{ left: 5 }} />
      </View>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
        <Text style={styles.startText}>{nameText}</Text>
      </Animated.View>

      {step === 1 && (
        <Animated.View style={{ transform: [{ scale: inputScale(emailAnimation) }] }}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              keyboardType="default"
            />
            <View style={styles.bottomLine} />
          </View>
        </Animated.View>
      )}

      {step === 2 && (
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
      )}

      {step === 3 && (
        <Animated.View style={{ transform: [{ scale: inputScale(emailAnimation) }] }}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View style={styles.bottomLine} />
          </View>
        </Animated.View>
      )}

      <TouchableOpacity onPress={step === 3 ? handleLogin : handleNextArrowClick} style={styles.backArrowContainer1}>
        <Nextarrow style={{ left: 5 }} />
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: progressBarWidth }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
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
  backArrowContainer1: {
    borderColor: 'orange',
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "orange",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 650,
    right: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  startText: {
    fontSize: 18,
    color: 'black',
    marginTop: 50,
    marginBottom: 30,
    fontWeight: 'bold',
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
  progressContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 20,
    position: 'absolute',
    top: 700,
    right: 20,
    width: 350,
    marginRight: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'orange',
    borderRadius: 5,
  },
});
