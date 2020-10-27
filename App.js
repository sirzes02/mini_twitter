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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {!user ? (
          <>
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
            <Stack.Screen
              name="Index"
              component={Indexador}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Prueba"
              component={Editar}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Index"
              component={Indexador}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Edicion"
              component={Editar}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
