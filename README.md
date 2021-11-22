# react-navigation-blacklist

Screen based tabBar blacklist for react-navigation.

## Installation

> Make sure you have installed react-navigation

```sh
npm install react-navigation-blacklist
```

## Usage

```js
import ReactNavigationBlacklist from 'react-navigation-blacklist';

// ...

export default function App() {
  const { blacklist } = useTabBarBlacklist();
  const blackListExample = ['SubScreen2'];
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

// ...

// Stack2

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
