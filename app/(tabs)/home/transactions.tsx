import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Transactions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello Transactions</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Transactions;
