import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles/loginstyle'; 
import loginLogo from '../../assets/loginlogo.png';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={loginLogo}
        style={styles.logoImage}
      />
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.signInText}>Sign in to your account</Text>
    </View>
  );
}
