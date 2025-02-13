import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

export default function LoginView() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleForgotPassword() {
    console.log('Forgot password pressed')    
  }

  function handleLogin() {
    console.log('Login Button pressed')
  }

  function handleSignupLink() {
    console.log('Signup link pressed')
  }  

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/Image.jpg')} 
            style={{width: 200, height: 200, position: 'absolute', top:0, right:0}}/>

        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please sign in to continue.</Text>
      
        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>EMAIL</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="user123@email.com"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}              
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
              placeholder="PASSWORD"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <Pressable onPress={handleForgotPassword} style={styles.forgotContainer}>
              <Text style={styles.forgotLink}>FORGOT?</Text>
            </Pressable>
          </View>
        </View>

        {/* Right-aligned Login Button */}
        <Pressable onPress={handleLogin} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#FFD580', '#FF8C00']}
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </LinearGradient>
        </Pressable>

        <Pressable onPress={handleSignupLink} style={styles.signupLinkContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <Text style={styles.signupLink}>Sign up</Text>
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 160,
    marginBottom: 8,
    color: 'Black'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40
  },  
  inputGroup: {
    marginBottom: 24
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
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
    marginHorizontal:12
  },
  input: {
    flex: 1,    
    padding: 10,
    fontSize: 16,    
  },
  forgotContainer: {
    right: 12,    
  },
  forgotLink: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 14
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginTop: 16
  },
  button: {
    width: 120,
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
    marginTop: 200
  },
  signupText: {
    color: 'black',
  },
  signupLink: {
    color: 'orange',
    fontWeight: 'bold'
  }
})