import {StyleSheet, View} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {ButtonPrimary} from './components/ButtonPrimary';
import {TextButton} from './components/TextButton';
import { BodyText } from './components/BodyText';
import { useSafeAreaInsets} from 'react-native-safe-area-context';


export function ForgotPassword() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.root, {paddingTop: insets.top}]}>
      <PageHeader headerText = "Forgot Password"/>
      <BodyText bodyText= "Click below to receive a password reset link via email."/>
      <ButtonPrimary buttonPrompt = "Click Me"/>
      <TextButton textButtonPrompt = "Login"/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 375,
    height: 812,
    flexShrink: 0,
    flex: 1, 
  },
});

export default ForgotPassword;