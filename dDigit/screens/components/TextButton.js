import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function TextButton({textButtonPrompt, buttonWidth}) {
  return (
    <View style={[styles.root, {width: buttonWidth}]}>
      <Text style={styles.textButtonClick}>
        {textButtonPrompt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButtonClick: {
    color: '#00cc00',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
});

export default TextButton;


