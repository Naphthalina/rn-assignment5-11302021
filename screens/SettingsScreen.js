// screens.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';



export function SettingsScreen({ toggleTheme, theme }) {
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Settings Screen</Text>
      <Button
        title={`Switch to ${theme.name === 'light' ? 'dark' : 'light'} mode`}
        onPress={toggleTheme}
      />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});