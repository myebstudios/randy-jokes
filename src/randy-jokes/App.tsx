import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppColors, CardColors, Spaces, Typography} from './globals/GlobalStyles';
import OnboardingButton from "./components/OnboardingButton";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text style={Typography.largeHeading}>Home</Text>*/}
      <OnboardingButton/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spaces.appMargin
  },
});
