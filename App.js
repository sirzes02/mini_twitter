import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/views/Login/Login';
import Register from './src/views/Register/Register';
import Avatares from './src/views/Avatares/Avatares';
import Descripcion from './src/views/Descripcion/Descripcion';
import auth from '@react-native-firebase/auth';
import Indexador from './src/views/Indexador';
import Editar from './src/views/Editar/Editar';
import TweetIndividual from './src/views/TweetIndividual/TweetIndividual';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const Stack = createStackNavigator();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
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
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Indexador}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Edicion"
            component={Editar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TweetIndividual"
            component={TweetIndividual}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
