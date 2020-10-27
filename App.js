import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import Login from './src/views/Login/Login';
import Register from './src/views/Register/Register';
import Avatares from './src/views/Avatares/Avatares';
import Descripcion from './src/views/Descripcion/Descripcion';
import Home from './src/views/Home/Home';
import NuevoTweet from './src/views/NuevoTweet/NuevoTweet';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const Stack = createStackNavigator();
  const Tab = AnimatedTabBarNavigator();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Avatares"
            component={Avatares}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Descripcion"
            component={Descripcion}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: '#E2BAE9',
          }}>
          <Tab.Screen
            name="Perfil"
            component={Home}
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: ({ color }) => (
                <Ionicons name="user" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Inicio',
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Ranking"
            component={NuevoTweet}
            options={{
              tabBarLabel: 'Tweetear',
              tabBarIcon: ({ color }) => (
                <Ionicons name="pencil" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
