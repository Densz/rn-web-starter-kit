import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    backgroundColor: 'blue',
    paddingHorizontal: 100,
  },
});

export default function MyButton({children}) {
  return (
    <View style={styles.container}>
      <Text style={{color: 'red'}}>{children}</Text>
    </View>
  );
}
