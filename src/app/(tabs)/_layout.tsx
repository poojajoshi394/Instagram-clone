import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarShowLabel: false }}>
      <Tabs.Screen 
        name='index' 
        options={{ 
          headerTitle: 'For you',
          tabBarIcon: () => <FontAwesome name="home" size={26} color="black" /> 
        }} 
      />
      <Tabs.Screen 
        name='new' 
        options={{ 
          headerTitle: 'Create post',
          tabBarIcon: () => <AntDesign name="pluscircle" size={26} color="black" />
        }} 
      />
      <Tabs.Screen 
        name='profile' 
        options={{ 
          headerTitle: 'For you',
          tabBarIcon: () => <FontAwesome name="user" size={26} color="black" /> 
        }} 
      />
    </Tabs>
  );
}
