import 'react-native-gesture-handler';
import React from 'react';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Home from '../views/Home/Home';
import NuevoTweet from '../views/NuevoTweet/NuevoTweet';
import Perfil from '../views/Perfil/Perfil';

const Indexador = () => {
  const Tab = AnimatedTabBarNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: '#E2BAE9',
      }}>
      <Tab.Screen
        name="Perfil"
        component={Perfil}
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
        name="Nuevo"
        component={NuevoTweet}
        options={{
          tabBarLabel: 'Tweetear',
          tabBarIcon: ({ color }) => (
            <Ionicons name="pencil" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Indexador;
