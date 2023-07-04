import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GlobalStyles from "./components/GlobalStyles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
        <Button 
          title={"Go details screen"}
          onPress={() => navigation.navigate('Details')}
        />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button 
        title={"Go to Home Screen"}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 19
  },
  container: {
    paddingHorizontal: 70,
    paddingVertical: 20
  }
})