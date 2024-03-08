// CustomerCarePage.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const CustomerCarePage = () => {
  const handleEmail = () => {
    Linking.openURL('mailto:support@example.com');
  };

  const handlePhoneCall = () => {
    Linking.openURL('tel:+1234567890');
  };

  const handleChat = () => {
    // Implement your live chat functionality here
    // Example: Navigate to a screen where live chat is available
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Customer Care</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Contact Information</Text>
        <TouchableOpacity onPress={handleEmail}>
          <Text style={styles.contactOption}>Email: support@example.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePhoneCall}>
          <Text style={styles.contactOption}>Phone: +1234567890</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <Text style={styles.contactOption}>Live Chat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Frequently Asked Questions</Text>
        {/* Include your FAQ content here */}
      </View>

      {/* Additional sections such as Help Resources, Customer Feedback, Support Hours, etc. */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactOption: {
    fontSize: 16,
    marginBottom: 5,
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default CustomerCarePage;
