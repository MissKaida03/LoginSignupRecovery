import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  // Logo section
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 250,
    height: 250,
    marginBottom: -10,
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
  signInText: {
    fontSize: 16,
    color: '#888',
    marginBottom: -10,
  },

  // Login form container
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  // Input fields
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 5,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#ffb8d2',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
  },

  // Options (Remember me and Forgot Password)
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#888',
  },
  forgotText: {
    color: '#888',
  },

  // Login button
  loginButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#ffa4c2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Sign-up redirection
  signupText: {
    color: '#888',
    marginTop: 10,
    textAlign: 'center',
  },
  signupLink: {
    color: '#ffa4c2',
    fontWeight: 'bold',
  },

  // Checkbox styles
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#fff',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxInner: {
    width: 14,
    height: 14,
    backgroundColor: '#ffa4c2',
  },
});