import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";

import HomeScreen from "./screens/HomeScreen";
import OrdersScreen from "./screens/OrdersScreen";
import AgendaScreen from "./screens/AgendaScreen";

import { app } from "./firebaseConfig";

const Stack = createNativeStackNavigator();

export default function App() {
    useEffect(() => {
        // Firebase connection
        if (app) {
            console.log("Firebase successfully connected!");
            console.log("Proyect initialized as:", app.name);
        }
        // Fondo de la barra
        NavigationBar.setBackgroundColorAsync("#000000");

        // Iconos blancos
        NavigationBar.setButtonStyleAsync("light");
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Orders"
                    component={OrdersScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Agenda"
                    component={AgendaScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
