import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = () => (
  <View>
    <Text style={styles.textStyle}>Albums</Text>
  </View>
);

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  }
});

export default Header;
