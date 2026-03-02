import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import PetDetailScreen from '../screens/PetDetailScreen';
import AdoptionFormScreen from '../screens/AdoptionFormScreen';
import SheltersScreen from '../screens/SheltersScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import AboutScreen from '../screens/AboutScreen';

import { colors } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ─── "Find a Pet" stack ───────────────────────────────────────────────────────
function FindPetStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'PawsConnect 🐾' }}
      />
      <Stack.Screen
        name="PetDetail"
        component={PetDetailScreen}
        options={({ route }) => ({ title: route.params?.pet?.name ?? 'Pet Details' })}
      />
      <Stack.Screen
        name="AdoptionForm"
        component={AdoptionFormScreen}
        options={{ title: 'Adoption Application' }}
      />
    </Stack.Navigator>
  );
}

function SheltersStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="SheltersList" component={SheltersScreen} options={{ title: 'Shelters' }} />
    </Stack.Navigator>
  );
}

function ResourcesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="ResourcesList" component={ResourcesScreen} options={{ title: 'Resources' }} />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primaryDark },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="AboutPage" component={AboutScreen} options={{ title: 'About' }} />
    </Stack.Navigator>
  );
}

// ─── Tab icon helper ─────────────────────────────────────────────────────────
function TabIcon({ emoji, focused }) {
  return (
    <Text style={{ fontSize: focused ? 26 : 22, opacity: focused ? 1 : 0.55 }}>{emoji}</Text>
  );
}

// ─── Root navigator ───────────────────────────────────────────────────────────
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textLight,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopColor: colors.border,
            paddingBottom: 6,
            paddingTop: 4,
            height: 62,
          },
          tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        }}
      >
        <Tab.Screen
          name="FindPet"
          component={FindPetStack}
          options={{
            tabBarLabel: 'Find a Pet',
            tabBarIcon: ({ focused }) => <TabIcon emoji="🐾" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Shelters"
          component={SheltersStack}
          options={{
            tabBarLabel: 'Shelters',
            tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="Resources"
          component={ResourcesStack}
          options={{
            tabBarLabel: 'Resources',
            tabBarIcon: ({ focused }) => <TabIcon emoji="📚" focused={focused} />,
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutStack}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ focused }) => <TabIcon emoji="ℹ️" focused={focused} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
