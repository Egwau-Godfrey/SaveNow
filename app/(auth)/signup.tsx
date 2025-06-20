import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNames, setFullNames] = useState("");



  const Login = () => {
    router.dismissAll();
    router.replace('/(auth)');
  };

  const SignUp = () => {
    // Handle sign up
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        keyboardVerticalOffset={140}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.content}>
            <Text style={styles.title}>Sign Up</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Names"
              placeholderTextColor="#999999"
              onChangeText={setFullNames}
              keyboardType="email-address"
              autoCapitalize="none"
            />

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

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#999999"
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry
            />

          </View>

          <View style={styles.LogBtnContainer}>
            <Pressable onPress={Login} style={styles.loginBtn}>
              <Text style={styles.btnText}>Login</Text>
            </Pressable>
          </View>

          <View style={styles.bottomTextContainer}>
            <Text style={{ fontSize: 18 }}>Already have an account? </Text>
            <Pressable onPress={Login}>
              <Text style={{ color: "#a78bfa", fontSize: 18 }}>Login</Text>
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
});
