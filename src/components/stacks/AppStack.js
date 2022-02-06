import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import IndexScreen from '../screens/IndexScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Index' 
                component={IndexScreen} 
                options={{
                title: 'Movies App',
                headerStyle: {
                    backgroundColor: '#2c3e50'
                },
                headerTitleStyle: {
                    color: '#fff'
                }
                }}
            />
            <Stack.Screen 
                name='Detail' 
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppStack;