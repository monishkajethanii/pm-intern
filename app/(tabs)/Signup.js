import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function RegistrationScreen() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleGetOTP = () => {
    // Handle OTP request logic here
    console.log('Get OTP pressed');
  };

  const handleRegistration = () => {
    // Handle registration logic here
    console.log('Registration pressed');
  };

  const handleLoginNow = () => {
    // Handle navigation to login screen
    console.log('Login Now pressed');
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
            <View style={styles.logoIcon}>
                <Image
                              source={require('./logo.png')}
                              style={styles.logoImage}
                              resizeMode="cover"
                            />
            </View>
            <Text style={styles.brandText}>Internship</Text>
            <Text style={styles.tagline}>LEARN FROM THE BEST</Text>
          </View>
        </View>

        {/* Registration Form */}
        <ScrollView style={styles.formWrapper} showsVerticalScrollIndicator={false}>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Registration</Text>
            <Text style={styles.formSubtitle}>Create your account</Text>
            
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

            {/* OTP Input with Get OTP Button */}
            <View style={styles.otpContainer}>
              <View style={styles.otpInputContainer}>
                <TextInput
                  style={styles.otpInput}
                  placeholder="Enter OTP"
                  placeholderTextColor="#999"
                  value={otp}
                  onChangeText={setOtp}
                  keyboardType="numeric"
                  maxLength={6}
                />
              </View>
              <TouchableOpacity style={styles.getOtpButton} onPress={handleGetOTP}>
                <Text style={styles.getOtpText}>Get OTP</Text>
              </TouchableOpacity>
            </View>

            {/* Create Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Create Password (Ex: Test@123)"
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

            {/* Re-Enter Password Input */}
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Re Enter Password (Ex: Test@123)"
                placeholderTextColor="#999"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#999"
                />
              </TouchableOpacity>
            </View>

            {/* Password Requirements Note */}
            <Text style={styles.passwordNote}>
              Note : Password must be at least 8 characters long and must include 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.
            </Text>

            {/* Registration Button */}
            <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
              <Text style={styles.registerButtonText}>Registration</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleLoginNow}>
                <Text style={styles.loginLink}>Login Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  brandText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  tagline: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.5,
    opacity: 0.9,
  },
  formWrapper: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 30,
    minHeight: 600,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  formSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
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
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  otpInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  otpInput: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  getOtpButton: {
    backgroundColor: '#1a365d',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    minWidth: 100,
  },
  getOtpText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  passwordNote: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
    marginBottom: 25,
    paddingHorizontal: 5,
  },
  registerButton: {
    backgroundColor: '#1a365d',
    borderRadius: 12,
    paddingVertical: 18,
    marginBottom: 20,
    shadowColor: '#1a365d',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    fontSize: 14,
    color: '#4facfe',
    fontWeight: '600',
  },
});