import {StyleSheet, View} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {InputText} from './components/InputText';
import {ButtonPrimary} from './components/ButtonPrimary';
import {TextButton} from './components/TextButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';


export function SignUp() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.root, {paddingTop: insets.top}]}>
      <PageHeader headerText = "Sign Up"/>
      <InputText prompt = "Name"/>
      <InputText prompt = "Email"/>
      <InputText prompt = "Password"/>
      <ButtonPrimary buttonPrompt = "Sign Up"/>
      <TextButton textButtonPrompt = "Forgot Password" width = "50"/>
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

export default SignUp;
