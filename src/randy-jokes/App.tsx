import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppColors, CardColors, Spaces, Typography} from './globals/GlobalStyles';
import OnboardingButton from "./components/OnboardingButton";
import RefreshButton from "./components/RefreshButton";
import OptionButton from "./components/OptionButton";
import JokeCard from "./components/JokeCard";

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.container}>

        <JokeCard color={CardColors[2]} setup="Why do bananas have to put on sunscreen before they go to the beach?" punchline="Because they might peel!" type="General" />

        <View style={styles.optionContainer}>
          <OptionButton onPress={() => { alert("Share joke")} } iconSource={require('./assets/icons/tabler-icon-share-2.png')} />
          <RefreshButton onPress={() => { alert("New Joke")} } />
          <OptionButton onPress={() => { alert("Save joke image")} } iconSource={require('./assets/icons/tabler-icon-photo-down.png')} />
        </View>

      </View>

      <StatusBar style="light" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    // backgroundColor: AppColors.secondary,
    padding: Spaces.appMargin
  },
  optionContainer: {
    flexDirection: "row",
    alignSelf: 'center',
    justifyContent: "space-around",
    alignItems: "center",
    gap: Spaces.s32,
  }
});
