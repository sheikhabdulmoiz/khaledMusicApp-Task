import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import SigninScreen from './screens/SigninScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import SplashScreen from './screens/SplashScreen';

//Abdul Moiz
//SourceCode Task

const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={true}
        backgroundColor="#1E272E"
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {showSplashScreen ? (
            <Stack.Screen name="splash" component={SplashScreen} />
          ) : (
            <>
              <Stack.Screen name="signup" component={SignupScreen} />
              <Stack.Screen name="signin" component={SigninScreen} />
              <Stack.Screen name="dashboard" component={DashboardScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
