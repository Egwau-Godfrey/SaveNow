import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function PrivacyPolicy() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={[styles.scrollContent, {paddingBottom: 30}]}>
        <Text style={styles.header}>Privacy Policy</Text>

        <Text style={styles.date}>Last Updated: June 25, 2025</Text>

        <Text style={styles.paragraph}>
          This Privacy Policy explains how we collect, use, and protect your personal information
          when you use our personal savings mobile application (“App”), designed for users in Uganda.
        </Text>

        <Text style={styles.subheader}>1. Information We Collect</Text>
        <Text style={styles.paragraph}>
          We only collect the following personal information during account creation:
        </Text>
        <Text style={styles.bullet}>• Email address</Text>
        <Text style={styles.bullet}>• Password (encrypted and stored securely)</Text>

        <Text style={styles.subheader}>2. How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          We use your email and password solely for the purpose of:
        </Text>
        <Text style={styles.bullet}>• Creating and managing your savings account</Text>
        <Text style={styles.bullet}>• Sending security or password reset notifications</Text>

        <Text style={styles.subheader}>3. Data Security</Text>
        <Text style={styles.paragraph}>
          Your password is encrypted and never stored in plain text. We take reasonable measures to protect your information from unauthorized access, loss, or misuse.
        </Text>

        <Text style={styles.subheader}>4. Third-Party Sharing</Text>
        <Text style={styles.paragraph}>
          We do not sell, trade, or share your personal information with third parties.
        </Text>

        <Text style={styles.subheader}>5. Data Storage</Text>
        <Text style={styles.paragraph}>
          All data is securely stored and managed in accordance with applicable data protection laws in Uganda.
        </Text>

        <Text style={styles.subheader}>6. Your Rights</Text>
        <Text style={styles.paragraph}>
          You have the right to:
        </Text>
        <Text style={styles.bullet}>• Access your data</Text>
        <Text style={styles.bullet}>• Request account deletion</Text>
        <Text style={styles.bullet}>• Request a password change</Text>

        <Text style={styles.subheader}>7. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns about this Privacy Policy, you can contact us at:
        </Text>
        <Text style={styles.bullet}>• Email: support@savingsapp.ug</Text>

        <Text style={styles.footerNote}>
          By using this app, you agree to the terms outlined in this Privacy Policy.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  bullet: {
    fontSize: 16,
    color: '#444',
    marginLeft: 10,
    marginTop: 4,
    lineHeight: 24,
  },
  footerNote: {
    marginTop: 30,
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

