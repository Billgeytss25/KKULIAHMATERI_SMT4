import React, { useState } from 'react';
import { SafeAreaView, Text, View, Switch } from 'react-native';
import tw from 'twrnc';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView
      style={tw`flex-1 justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <View style={tw`items-center`}>
        <Text
          style={tw`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold mb-4`}
        >
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={(f) => setIsDarkMode(f)}
          trackColor={{ false: '#ccc', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </SafeAreaView>
  );
}