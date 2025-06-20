import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    
    router.replace('/(tabs)');
  };

  const BacktoOnboard = () => {
    router.replace('/(onboarding)');
  };

  const SignUp = () => {
    router.navigate('/(auth)/signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        keyboardVerticalOffset={140}
      >
        <View style={styles.backBtnContainer}>
          <Pressable onPress={BacktoOnboard} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#a78bfa" />
          </Pressable>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps='handled'
        >
        
          <View style={styles.content}>
            <Text style={styles.title}>Login</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor="#999999"
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="#999999"
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry
            />

            <View style={styles.forgotPass}>
              <Pressable>
                <Text style={{color: "#a78bfa"}}>Forgot password?</Text>
              </Pressable>
            </View>

          </View>

          <View style={styles.LogBtnContainer}>
            <Pressable onPress={Login} style={styles.loginBtn}>
              <Text style={styles.btnText}>Login</Text>
            </Pressable>
          </View>

          <View style={styles.bottomTextContainer}>
            <Text style={{ fontSize: 18 }}>Don't have an account? </Text>
            <Pressable onPress={SignUp}>
              <Text style={{ color: "#a78bfa", fontSize: 18 }}>Signup</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderColor: "#a78bfa",
    borderWidth: 2,
    borderRadius: 20,
    height: 50,
    width: "90%",
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  loginBtn: {
    backgroundColor: "#a78bfa",
    height: 60,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginTop: 20,
  },
  LogBtnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  forgotPass: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#a78bfa",
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtnContainer: {
    paddingLeft: 20,
  },
});
