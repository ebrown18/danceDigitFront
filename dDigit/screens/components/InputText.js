import {StyleSheet, View, Text} from 'react-native';

export function InputText({prompt}) {
  return (
    <View style={styles.root}>
      <Text style={styles.$name}>
        {prompt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 343,
    height: 50,
  },
  $name: {
    color: '#a0a0a0',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
  },
});






