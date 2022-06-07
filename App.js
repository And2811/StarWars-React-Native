import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './telas/TelaInicial/index';
import Trilogia1 from './telas/Trilogia1/index';
import Trilogia2 from './telas/Trilogia2/index';
import Trilogia3 from './telas/Trilogia3/index';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela inicial' component={TelaInicial}/>
        <Stack.Screen name='Trilogia 1' component={Trilogia1}/>
        <Stack.Screen name='Trilogia 2' component={Trilogia2} />
        <Stack.Screen name='Trilogia 3' component={Trilogia3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
