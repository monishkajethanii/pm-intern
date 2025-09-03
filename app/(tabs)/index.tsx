import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Auto navigate to next screen after 3 seconds
    const timer = setTimeout(() => {
      // navigation.navigate('Login'); // Uncomment when navigation is set up
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3c72" />
      
      <LinearGradient
        colors={['#1e3c72', '#2a5298', '#4facfe']}
        style={styles.gradient}
      >
        {/* Government Logo */}
        <View style={styles.govLogoContainer}>
          <View style={styles.govLogo}>
            <View style={styles.emblem}>
              {/* Indian Government Emblem representation */}
              <Text style={styles.emblemText}>🇮🇳</Text>
            </View>
            <View style={styles.govTextContainer}>
              <Text style={styles.govText}>MINISTRY OF</Text>
              <Text style={styles.govText}>CORPORATE</Text>
              <Text style={styles.govText}>AFFAIRS</Text>
              <Text style={styles.govSubText}>GOVERNMENT OF INDIA</Text>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.internText}>Intern with</Text>
          <Text style={styles.topCompaniesText}>TOP COMPANIES</Text>
          <Text style={styles.ofText}>of</Text>
          <View style={styles.bharatContainer}>
            <Text style={styles.bharatText}>
              <Text style={styles.bText}>B</Text>
              <Text style={styles.hText}>H</Text>
              <Text style={styles.aText}>A</Text>
              <Text style={styles.rText}>R</Text>
              <Text style={styles.aText2}>A</Text>
              <Text style={styles.tText}>T</Text>
            </Text>
          </View>
        </View>

        {/* Company Logos */}
        <View style={styles.companyLogosContainer}>
          <View style={styles.companyRow}>
            {/* Reliance Logo */}
            <View style={styles.companyLogo}>
              <View style={styles.relianceLogo}>
                <Text style={styles.relianceText}>🏠</Text>
              </View>
              <Text style={styles.companyName}>Reliance</Text>
              <Text style={styles.companySubText}>Industries Limited</Text>
            </View>

            {/* HDFC Bank Logo */}
            <View style={styles.companyLogo}>
              <View style={styles.hdfcLogo}>
                <Text style={styles.hdfcText}>HDFC BANK</Text>
                <Text style={styles.hdfcSubText}>We understand your world</Text>
              </View>
            </View>

            {/* Tata Logo */}
            <View style={styles.companyLogo}>
              <View style={styles.tataLogo}>
                <Text style={styles.tataText}>TATA</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Technical Collaboration */}
        <View style={styles.techCollabContainer}>
          <Text style={styles.techCollabText}>Technical Collaboration with</Text>
          <View style={styles.meityLogo}>
            <Text style={styles.meityText}>MeitY</Text>
            <View style={styles.meityIcon}>
              <Text style={styles.meityIconText}>📱</Text>
            </View>
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
  govLogoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  govLogo: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emblem: {
    marginRight: 10,
  },
  emblemText: {
    fontSize: 24,
  },
  govTextContainer: {
    alignItems: 'flex-start',
  },
  govText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 12,
  },
  govSubText: {
    fontSize: 8,
    color: '#666',
    marginTop: 2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  internText: {
    fontSize: 28,
    color: '#fff',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  topCompaniesText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  ofText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 15,
  },
  bharatContainer: {
    alignItems: 'center',
  },
  bharatText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  bText: { color: '#ff6b35' },
  hText: { color: '#4facfe' },
  aText: { color: '#50c878' },
  rText: { color: '#ff6b35' },
  aText2: { color: '#4facfe' },
  tText: { color: '#50c878' },
  companyLogosContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    padding: 20,
    marginVertical: 20,
  },
  companyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  companyLogo: {
    alignItems: 'center',
    flex: 1,
  },
  relianceLogo: {
    alignItems: 'center',
    marginBottom: 5,
  },
  relianceText: {
    fontSize: 24,
    color: '#8B4513',
  },
  companyName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  companySubText: {
    fontSize: 8,
    color: '#666',
    textAlign: 'center',
  },
  hdfcLogo: {
    backgroundColor: '#004080',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    minWidth: 80,
  },
  hdfcText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  hdfcSubText: {
    color: '#fff',
    fontSize: 6,
    textAlign: 'center',
    marginTop: 2,
  },
  tataLogo: {
    alignItems: 'center',
  },
  tataText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e40af',
    letterSpacing: 1,
  },
  techCollabContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  techCollabText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  meityLogo: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  meityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  meityIcon: {
    backgroundColor: '#4facfe',
    borderRadius: 4,
    padding: 4,
  },
  meityIconText: {
    fontSize: 12,
  },
});