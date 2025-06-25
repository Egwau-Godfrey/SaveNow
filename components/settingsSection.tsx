import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, Text, StyleSheet } from "react-native";

type ButtonType = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
  onPress: () => void;
};

const SettingSectionItem = ({ icon, title, color, onPress }: ButtonType) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed
      ]}
      onPress={onPress}
    >
      <View style={styles.left}>
        <Ionicons name={icon} size={22} color={color} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#bbb" />
    </Pressable>
  );
};

export default SettingSectionItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 4,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  pressed: {
    backgroundColor: '#f3f3f3',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

