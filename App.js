import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import AuthProvider from './src/components/AuthProvider/AuthProvider';
import SignUp from './src/screens/Account/SignUp';
import Login from './src/screens/Account/Login';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import FlashMessage from "react-native-flash-message";


const Stack = createNativeStackNavigator();
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = getAuth()
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
      else {
        setUser(null)
      }
    })
    return authSubscription;
  }, [])

  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/Spartan-Regular.ttf')
  })

  if (!loaded) {
    return <Text>Font is loading</Text>;
  }


  return (
    <AuthProvider>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Details" component={Details} />
            </>
          )
            :
            (
              <>
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
      <StatusBar />
    </AuthProvider>
  );
}


