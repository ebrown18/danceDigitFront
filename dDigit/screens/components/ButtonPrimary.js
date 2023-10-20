import {StyleSheet, View, Text} from 'react-native';

export function ButtonPrimary({buttonPrompt}) {
  return (
    <View style={styles.root}>
      <Text style={styles.clickMe}>
        {buttonPrompt}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#00cc00',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  clickMe: {
    color: '#ffffff', 
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 50,
  },
});
