import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles/loginstyle'; 
import { useNavigation } from '@react-navigation/native';
import Logo from '../logo'; 

export default function Login() {
  const [isRemembered, setIsRemembered] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#fff"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.rememberContainer}
            onPress={() => setIsRemembered(!isRemembered)}
          >
            <View style={styles.checkbox}>
              {isRemembered && <Icon name="check" size={16} color="#ffa4c2" />}
            </View>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <Text
            style={styles.forgotText}
            onPress={() => navigation.navigate('RecoveryAccount')}
          >
            Forgot Password?
          </Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          New here?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}
