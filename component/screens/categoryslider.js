// CategorySlider.js

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';

const categories = [
  { name: 'AUTOMOBILE'}, //image: require('../assets/automobile.jpg') 
  { name: 'WOMEN FASHION'},// image: require('../assets/women_fashion.jpg') },
  { name: 'MEN FASHION'},//image: require('../assets/men_fashion.jpg') },
  { name: 'KIDS FASHION'},
  { name: 'ELECTRONICS'},
  { name: 'SPORTS,FITNESS & OUTDOOR'},
  { name: 'COMPUTERS & GAMING'},
  { name: 'BOOKS,MEDIA & MUSIC'},
  { name: 'HOME & KITCHEN'},
  { name: 'MOBILE & TABLETS'},
  { name: 'KIDS-TOYS '},
  { name: 'DAILY NEEDS'},
  { name: 'MACHINERY & EQUIPMENT'},
  { name: 'AGRICULTURAL PRODUCTS'}, 
  { name: 'HANDICRAFTS '},

];

const CategorySlider = () => {
  
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.categoryItem}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.categoryName} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    categoryItem: {
      alignItems: 'center',
      marginRight: 20,
    },
    imageContainer: {
      width: 50,
      height: 50,
      borderRadius: 40, // Make it a circle
      overflow: 'hidden',
      marginBottom: 10,
      borderWidth: 2,
      borderColor: '#ccc', // Border color for the circle
    },
    image: {
      width: '100%',
      height: '100%',
    },
    categoryName: {
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default CategorySlider;