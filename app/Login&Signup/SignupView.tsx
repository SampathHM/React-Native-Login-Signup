import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

export default function SignupView() {
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

    function handleSignup() {
        console.log('Signup Button pressed')
        }

    function onSwitchToLogin() {
        console.log('Sign in link pressed')
        }

    function onSwitchToBack() {
        console.log('Switch to Back pressed')
        }

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/Image.jpg')} 
            style={{width: 200, height: 200, position: 'absolute', top:0, right:0}}/>

      {/* Back Arrow */}
      <Pressable onPress={onSwitchToBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </Pressable>

      <Text style={styles.title}>Create Account</Text>
      
        {/* Full Name Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>FULL NAME</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="John Williams"
              placeholderTextColor="#999"
              value={fullName}
              onChangeText={setFullName}                                        
            />
          </View>
        </View>

        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>EMAIL</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="john@email.com"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>PASSWORD</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>CONFIRM PASSWORD</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#999"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Signup Button */}
        <Pressable onPress={handleSignup} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#FFD580', '#FF8C00']}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </LinearGradient>
        </Pressable>

        {/* Login Link */}
        <Pressable onPress={onSwitchToLogin} style={styles.signupLinkContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <Text style={styles.signupLink}>Sign in</Text>
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    position: 'relative'
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 20,    
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 40,
    color: '#333',
    textAlign: 'left'
  },  
  inputGroup: {
    marginBottom: 24
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    height: 50,
    position: 'relative'
  },
  icon: {
    marginHorizontal: 12
  },
  input: {
    flex: 1,
    height: '100%',
    padding: 10,
    fontSize: 16
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginTop: 16
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12
  },
  signupLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32
  },
  signupText: {
    color: 'black',
  },
  signupLink: {
    color: 'orange',
    fontWeight: '600'
  }
})