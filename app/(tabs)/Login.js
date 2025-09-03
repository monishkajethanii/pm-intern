import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed');
  };

  const handleRegister = () => {
    // Handle register navigation here
    console.log('Register pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3c72" />
      
      <LinearGradient
        colors={['#1e3c72', '#2a5298', '#4facfe']}
        style={styles.gradient}
      >
        {/* Header with Logo */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('./logo.png')}
              style={styles.logoImage}
              resizeMode="cover"
            />
            {/* <Text style={styles.brandText}>Internship</Text> */}
            <Text style={styles.tagline}>LEARN FROM THE BEST</Text>
          </View>
        </View>

        {/* Login Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Login to your account</Text>
          
          {/* Mobile Number Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#999"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Enter Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.registerLink}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  brandText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  tagline: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    opacity: 0.9,
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 40,
    justifyContent: 'flex-start',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  passwordInput: {
    paddingRight: 55,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 16,
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#4facfe',
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#4facfe',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    fontSize: 14,
    color: '#4facfe',
    fontWeight: '600',
  },
});