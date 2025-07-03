import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Transactions = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView style={styles.rowScroll} contentContainerStyle={{paddingBottom: 30}}>
        <Pressable style={styles.RowBtn}>
          <Ionicons name="add" color={'white'} size={12} />
          <Text>Add New</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rowScroll: {
    flex: 1,
    flexDirection: 'row',
    height: 60
  },

  RowBtn: {
    flexDirection: 'row',
    backgroundColor: "#a78bfa",
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Transactions;
