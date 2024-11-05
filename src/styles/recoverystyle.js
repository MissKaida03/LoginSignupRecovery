import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },

  // Recovery image style
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: -10,
  },

  // Title style
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  // Subtitle style
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 7,
    marginBottom: 35,
  },

  // Input field style
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#333',
    marginBottom: 20,
  },

  // Button style
  button: {
    width: '70%',
    height: 50,
    backgroundColor: '#ffa4c2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Button text style
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Back to login text style
  backToLogin: {
    color: '#888',
    marginTop: 20,
  },

  // Login link style
  loginLink: {
    color: '#ffa4c2',
    fontWeight: 'bold',
  },
});