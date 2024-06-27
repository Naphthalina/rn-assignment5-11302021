// screens.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch } from 'react-native';

export function SettingsScreen({ toggleTheme, theme }) {
  const [isEnabled, setIsEnabled] = useState(theme.name === 'dark');

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    toggleTheme();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={{ color: theme.text, fontSize: 20, fontWeight: '600' }}>Settings</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: theme.text }]}>Language</Text>
          <Text style={styles.greaterThan}>&gt;</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: theme.text }]}>My Profile</Text>
          <Text style={styles.greaterThan}>&gt;</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: theme.text }]}>Contact Us</Text>
          <Text style={styles.greaterThan}>&gt;</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: theme.text }]}>Change Password</Text>
          <Text style={styles.greaterThan}>&gt;</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.option, { marginBottom: 30 }]}>
          <Text style={[styles.optionText, { color: theme.text }]}>Privacy Policy</Text>
          <Text style={styles.greaterThan}>&gt;</Text>
        </TouchableOpacity>

        <View style={styles.themeOption}>
          <Text style={[styles.optionText, { color: theme.text }]}>Theme</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
  greaterThan: {
    fontSize: 18,
    color: 'grey',
    paddingRight: 20,
    fontWeight: '300',
  },
  themeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
});
