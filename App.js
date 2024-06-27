import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import {HomeScreen} from './screens/HomeScreen';
import {MyCardsScreen} from './screens/MyCardsScreen';
import {StatisticsScreen} from './screens/StatisticsScreen';
import {SettingsScreen} from './screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: '#000000',
  },
  name: 'light',
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000000',
    text: '#ffffff',
  },
  name: 'dark',
};

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(scheme === 'dark' ? darkTheme : lightTheme);
  }, [scheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.name === 'light' ? darkTheme : lightTheme));
  };

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'My Cards') {
              iconName = focused ? 'card' : 'card-outline';
            } else if (route.name === 'Statistics') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings">
          {(props) => <SettingsScreen {...props} toggleTheme={toggleTheme} theme={theme.colors} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
