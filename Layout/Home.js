// Home.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import CategorySlider from '../component/screens/categoryslider'; // Import the CategorySlider component
import Banner from '../component/screens/Banner';

const Home = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleNotificationIconPress = () => {
    navigation.navigate('Notifications'); // Navigate to the 'Notifications' screen
  };

  const handleWishlistIconPress = () => {
    navigation.navigate('Wishlist'); // Navigate to the 'Wishlist' screen
  };

  const handleCartIconPress = () => {
    navigation.navigate('Cart'); 
  };

  return (
    <View style={styles.container}>
      {/* Include the Header component */}
      <Header 
        handleNotificationIconPress={handleNotificationIconPress} 
        handleWishlistIconPress={handleWishlistIconPress} 
        handleCartIconPress={handleCartIconPress}
      />

      {/* Include the CategorySlider component */}
      <CategorySlider />
      <Banner/>
      {/* Your Home screen content goes here */}
      <View style={styles.content}>
        {/* Additional content goes here */}
      </View>

      {/* Include the Footer component */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Vertical layout
    justifyContent: 'space-between',
     // Distribute space evenly between header, content, and footer
  },
  content: {
    flex: 1, // Take remaining space between header and footer
  },
});

export default Home;