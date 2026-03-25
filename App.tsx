import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';

// ============================================
// LovELL Login UI - Design Only (No Functionality)
// ============================================

const LoginScreen = () => {
  // Dummy data for UI display only
  const dummyEmail = '';
  const dummyPassword = '';

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1974&auto=format' }} // Romantic soft gradient background
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.85 }}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            showsVerticalScrollIndicator={false}
          >
            {/* Main Content Container */}
            <View style={{ paddingHorizontal: 28, paddingVertical: 40 }}>
              
              {/* App Title / Logo Section */}
              <View style={{ alignItems: 'center', marginBottom: 50 }}>
                <Text
                  style={{
                    fontSize: 54,
                    fontWeight: '800',
                    color: '#fff',
                    textShadowColor: 'rgba(0,0,0,0.3)',
                    textShadowOffset: { width: 1, height: 2 },
                    textShadowRadius: 8,
                    letterSpacing: 1.5,
                    fontFamily: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'sans-serif-medium',
                  }}
                >
                  Lov
                  <Text style={{ color: '#FFB7C5' }}>E</Text>
                  LL
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'rgba(255,255,255,0.9)',
                    marginTop: 8,
                    fontWeight: '500',
                    textShadowColor: 'rgba(0,0,0,0.2)',
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 3,
                  }}
                >
                  where hearts connect
                </Text>
              </View>

              {/* Card Container for Inputs */}
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  borderRadius: 36,
                  paddingVertical: 32,
                  paddingHorizontal: 24,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 12 },
                  shadowOpacity: 0.25,
                  shadowRadius: 24,
                  elevation: 20,
                }}
              >
                {/* Email Input */}
                <View style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#5E2E53',
                      marginBottom: 8,
                      marginLeft: 12,
                      letterSpacing: 0.5,
                    }}
                  >
                    EMAIL
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#F8F0F5',
                      borderRadius: 28,
                      paddingHorizontal: 20,
                      borderWidth: 1,
                      borderColor: '#FFD9E3',
                    }}
                  >
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 16,
                        paddingVertical: 16,
                        color: '#2D1C2A',
                        fontWeight: '500',
                      }}
                      placeholder="hello@lovell.com"
                      placeholderTextColor="#C9B1BC"
                      value={dummyEmail}
                      editable={false} // Design only - no functionality
                      selectTextOnFocus={false}
                    />
                  </View>
                </View>

                {/* Password Input */}
                <View style={{ marginBottom: 28 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#5E2E53',
                      marginBottom: 8,
                      marginLeft: 12,
                      letterSpacing: 0.5,
                    }}
                  >
                    PASSWORD
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#F8F0F5',
                      borderRadius: 28,
                      paddingHorizontal: 20,
                      borderWidth: 1,
                      borderColor: '#FFD9E3',
                    }}
                  >
                    <TextInput
                      style={{
                        flex: 1,
                        fontSize: 16,
                        paddingVertical: 16,
                        color: '#2D1C2A',
                        fontWeight: '500',
                      }}
                      placeholder="••••••••"
                      placeholderTextColor="#C9B1BC"
                      secureTextEntry
                      value={dummyPassword}
                      editable={false} // Design only - no functionality
                      selectTextOnFocus={false}
                    />
                  </View>
                </View>

                {/* Forgot Password Link */}
                <TouchableOpacity activeOpacity={0.7} style={{ alignSelf: 'flex-end', marginBottom: 28 }}>
                  <Text
                    style={{
                      color: '#B05E7A',
                      fontSize: 13,
                      fontWeight: '600',
                      textDecorationLine: 'underline',
                    }}
                  >
                    Forgot password?
                  </Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: '#FF6F91',
                    borderRadius: 40,
                    paddingVertical: 16,
                    alignItems: 'center',
                    shadowColor: '#FF6F91',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.35,
                    shadowRadius: 12,
                    elevation: 8,
                    marginBottom: 24,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 18,
                      fontWeight: 'bold',
                      letterSpacing: 0.8,
                    }}
                  >
                    Log In
                  </Text>
                </TouchableOpacity>

                {/* Divider with "or" */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 28 }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: '#FFD9E3' }} />
                  <Text style={{ marginHorizontal: 16, color: '#A57C8C', fontWeight: '500', fontSize: 13 }}>or continue with</Text>
                  <View style={{ flex: 1, height: 1, backgroundColor: '#FFD9E3' }} />
                </View>

                {/* Social Buttons Row */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20, marginBottom: 20 }}>
                  {/* Apple */}
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      backgroundColor: '#F2E8ED',
                      paddingVertical: 12,
                      paddingHorizontal: 28,
                      borderRadius: 30,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                      marginHorizontal: 6,
                      borderWidth: 1,
                      borderColor: '#FFD1DE',
                    }}
                  >
                    <Text style={{ fontSize: 18, marginRight: 8 }}>🍎</Text>
                    <Text style={{ fontWeight: '600', color: '#4A2C3E', fontSize: 15 }}>Apple</Text>
                  </TouchableOpacity>

                  {/* Google */}
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      backgroundColor: '#F2E8ED',
                      paddingVertical: 12,
                      paddingHorizontal: 28,
                      borderRadius: 30,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                      marginHorizontal: 6,
                      borderWidth: 1,
                      borderColor: '#FFD1DE',
                    }}
                  >
                    <Text style={{ fontSize: 18, marginRight: 8 }}>G</Text>
                    <Text style={{ fontWeight: '600', color: '#4A2C3E', fontSize: 15 }}>Google</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign Up Link */}
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 28, marginBottom: 20 }}>
                <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 15, fontWeight: '500' }}>
                  New to LovELL?{' '}
                </Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={{ color: '#FFE3EB', fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                    Create Account
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Decorative Text */}
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.7)',
                  marginTop: 16,
                  letterSpacing: 0.3,
                }}
              >
                By continuing, you agree to our Terms of Love & Privacy Policy
              </Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;