import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Pressable, StyleSheet, Text, View, Image } from "react-native";

const nextOnboarding = () => {
    router.replace('/(auth)')
};

export default function Step3() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.image_container}>
        <Image style={styles.image_1} source={require('/Users/egwaugodfrey/Documents/Coding/react-native-projects/SaveNow/assets/images/onboarding_3.png')}/>
      </View>

      <View style={styles.image_text}>
        <Text style={styles.titleText}>🔔 Get Smart Reminders</Text>
        <Text style={styles.subText}>Never miss bill payments or budget limits with timely alerts designed to keep your finances in check.</Text>
      </View>

      <View style={styles.button_1}>
        <Pressable onPress={nextOnboarding}  style={styles.pressable}>
          <Text style={styles.onboardText}>Get Started</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  button_1: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    bottom: 60,
  },
  pressable: {
    borderColor: "#a78bfa",
    borderWidth: 2,
    height: 60,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  onboardText: {
    color: "#a78bfa",
    fontWeight: "bold",
    fontSize: 18
  },
  image_1: {
    height: 500,
    width: 400,
    resizeMode: "contain",
  },
  image_container: {
    alignItems: "center"
  },
  image_text: {
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 22,
    paddingBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: "center"
  },
  skip: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  skip_text: {
    paddingRight: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#a78bfa",
  },
});
