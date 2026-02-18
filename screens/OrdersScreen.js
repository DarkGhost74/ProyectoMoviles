import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Pressable,
    Button,
} from "react-native";
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function OrdersScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <SafeAreaView edges={["top", "bottom"]}>
                <Button title="Regresar" onPress={() => navigation.goBack()} />
                <View
                    style={[styles.bottomBar, { bottom: insets.bottom || 0 }]}
                >
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Ionicons name="grid-outline" size={24} color="#888" />
                    </Pressable>
                    <Ionicons
                        name="clipboard-outline"
                        size={24}
                        color="#FFD43B"
                    />
                    <Pressable onPress={() => navigation.navigate("Agenda")}>
                        <Feather name="calendar" size={24} color="#888" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Orders")}>
                        <Feather name="archive" size={24} color="#888" />
                    </Pressable>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#15181E",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});
