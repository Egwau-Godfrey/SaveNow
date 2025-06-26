import { SafeAreaView, SectionList, Text, View, StyleSheet } from "react-native";
import SettingSectionItem from "@/components/settingsSection";
import { router } from "expo-router";

export default function Settings() {
  const logout = () => {
    router.replace('/(auth)');
  };

  const routeToPrivacy = () => {
    router.navigate('/(tabs)/settings/privacy');
  };

  const DATA = [
    {
      title: "General",
      data: [
        { id: '1', icon: 'person-outline', color: '#666', title: 'Account', onPress: () => console.log('Account pressed') },
        { id: '2', icon: 'notifications-outline', color: '#666', title: 'Notifications', onPress: () => console.log('Notifications pressed') },
        { id: '3', icon: 'lock-closed-outline', color: '#666', title: 'Privacy', onPress: routeToPrivacy },
      ]
    },
    {
      title: "Preferences",
      data: [
        { id: '4', icon: 'color-palette-outline', color: '#666', title: 'Theme', onPress: () => console.log('Theme pressed') },
        { id: '5', icon: 'language-outline', color: '#666', title: 'Language', onPress: () => console.log('Language pressed') },
      ]
    },
    {
      title: "Support",
      data: [
        { id: '6', icon: 'help-circle-outline', color: '#666', title: 'Help', onPress: () => console.log('Help pressed') },
        { id: '7', icon: 'mail-outline', color: '#666', title: 'Contact Us', onPress: () => console.log('Contact pressed') },
        { id: '8', icon: 'exit', color: '#ff2c2c', title: 'Log Out', onPress: logout },
      ]
    }
  ];

  const renderItem = ({ item }: { item: any }) => (
    <SettingSectionItem
      icon={item.icon}
      color={item.color}
      title={item.title}
      onPress={item.onPress}
    />
  );

  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sectionList}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    marginTop: 24,
    marginBottom: 8,
    paddingHorizontal: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionList: {
    paddingBottom: 30,
  },
});

