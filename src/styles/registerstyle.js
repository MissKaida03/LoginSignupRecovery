import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Main container
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5'
  },

  // Logo image style
  registerImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: -10,
    marginTop: 50
  },

  // Title style
  registerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },

  // Subtitle style
  registerSubtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20
  },

  // Input field style
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 5,
    color: '#fff'
  },

  // Password input container
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  // Password input text
  passwordInput: {
    flex: 1,
    color: '#fff'
  },

  // Register button style
  registerButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#ffa4c2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 50
  },
  // Register button text
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  // Login redirect text
  loginRedirectText: {
    color: '#888',
    marginTop: -20
  },
  // Login link style
  loginRedirectLink: {
    color: '#ffa4c2',
    fontWeight: 'bold'
  },
});