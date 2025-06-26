import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "Home",
          tabBarActiveTintColor: "#a78bfa",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: "Settings", 
          tabBarActiveTintColor: "#a78bfa",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          )
        }} 
      />
    </Tabs>
  );
}