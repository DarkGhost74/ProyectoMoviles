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
import BottomNav from "../components/BottomNav";

export default function OrdersScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <SafeAreaView edges={["top", "bottom"]}>
                <Button title="Regresar" onPress={() => navigation.goBack()} />
                <BottomNav active="Orders" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({

});
