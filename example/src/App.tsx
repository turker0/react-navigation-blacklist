import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useTabBarBlacklist } from 'react-navigation-blacklist';

const Tab = createBottomTabNavigator();

const blackListExample = ['SubScreen2'];

// App
export default function App() {
  const { blacklist } = useTabBarBlacklist();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarVisible: blacklist({ route, list: blackListExample }),
        })}
      >
        <Tab.Screen name="Stack1" component={Stack1} />
        <Tab.Screen name="Stack2" component={Stack2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Stacks
const Stack1 = () => {
  return (
    <View style={styles.container}>
      <Text>Stack 1</Text>
      <Text>Root Screen</Text>
    </View>
  );
};

// Stack for Stack2
const Stack = createStackNavigator();
const Stack2 = () => (
  <Stack.Navigator>
    <Stack.Screen name="SubScreen1" component={SubScreen1} />
    <Stack.Screen name="SubScreen2" component={SubScreen2} />
    <Stack.Screen name="SubScreen3" component={SubScreen3} />
  </Stack.Navigator>
);

// Sub Screens
const SubScreen1 = ({ navigation }: ScreenProps) => (
  <View style={styles.container}>
    <Text>Stack 2</Text>
    <Text>Sub Screen 1</Text>
    <Button
      title="Move to Sub Screen2"
      onPress={() => navigation.navigate('SubScreen2')}
    />
  </View>
);

const SubScreen2 = ({ navigation }: ScreenProps) => (
  <View style={styles.container}>
    <Text>Stack 2</Text>
    <Text>Sub Screen 2</Text>
    <Button
      title="Move to Sub Screen3"
      onPress={() => navigation.navigate('SubScreen3')}
    />
  </View>
);

const SubScreen3 = () => (
  <View style={styles.container}>
    <Text>Stack 2</Text>
    <Text>Sub Screen 3</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Types
type ScreenProps = {
  navigation: StackNavigationProp<ParamListBase, string>;
};
