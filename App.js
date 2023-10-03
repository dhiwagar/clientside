import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';
import Deliveryscreen from './screens/Deliveryscreen';
import Preparingscreen from './screens/Preparingscreen';
import Resturantscreen from './screens/Resturantscreen';
import Basketscreen from './screens/Basketscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import { store } from "./app/store";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
  <Provider store={store}>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="Resturant" component={Resturantscreen} />
        <Stack.Screen name="Delivery" component={Deliveryscreen}
         options={{
          presentation:"modal",
          headerShown:false,
         }}
        
        />
        <Stack.Screen name="Prepareorder" component={Preparingscreen}  options={{
          presentation:"fullScreenModal",
          headerShown:false,
         }} />
        <Stack.Screen 
        name="Basket" 
        component={Basketscreen}
        options={() => ({
          presentation: 'modal',
         headerShown:false,
  })}
         
        />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
