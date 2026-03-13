import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
} from "react-native";
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import BottomNav from "../components/BottomNav";
import OrderCard from "../components/OrderCard";

export default function PastRepairsScreen({ navigation }) {
    const [expandedId, setExpandedId] = useState(null);
    const insets = useSafeAreaInsets();

    const groupedOrders = groupOrdersByDay(COMPLETED_ORDERS);

    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <SafeAreaView
                style={[styles.container, { paddingBottom: insets.bottom }]}
                edges={["top", "bottom"]}
            >
                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={styles.headerTitle}>
                        Historial de Reparaciones
                    </Text>

                    {/* SUMMARY SIN EFICIENCIA */}
                    <View style={styles.summaryCard}>
                        <View>
                            <Text style={styles.smallLabel}>
                                COMPLETADAS HOY
                            </Text>
                            <Text style={styles.bigNumber}>
                                {COMPLETED_ORDERS.length} Reparaciones
                            </Text>
                        </View>
                    </View>

                    {/* SEARCH BAR ORIGINAL */}
                    <View style={styles.searchContainer}>
                        <Feather
                            name="search"
                            size={18}
                            color="#8B90A0"
                        />
                        <TextInput
                            placeholder="Buscar por placa o cliente..."
                            placeholderTextColor="#8B90A0"
                            style={styles.searchInput}
                            caretColor="#FFD43B"
                        />
                    </View>

                    {/* LISTADO AGRUPADO */}
                    {dayOrder.map((day) => (
                        groupedOrders[day] && (
                            <View key={day}>
                                <Text style={styles.sectionLabel}>
                                    {day.toUpperCase()}
                                </Text>

                                {groupedOrders[day].map((order) => (
                                    <OrderCard
                                        key={order.id}
                                        type="completed"
                                        vehicleYear={order.vehicleYear}
                                        vehicleBrand={order.vehicleBrand}
                                        vehicleModel={order.vehicleModel}
                                        vehiclePlate={order.vehiclePlate}
                                        services={order.services}
                                        notes={order.notes}
                                        time={order.time}
                                        mileage={order.vehicleMileage}
                                        navigation={navigation}
                                        expandedId={expandedId}
                                        setExpandedId={setExpandedId}
                                    />
                                ))}
                            </View>
                        )
                    ))}

                    <View style={{ height: 120 }} />
                </ScrollView>

                <BottomNav active="PastRepairs" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

/* ---------- AGRUPACIÓN ---------- */

const groupOrdersByDay = (orders) => {
    const groups = {};
    orders.forEach((order) => {
        const day = order.dayKey;
        if (!groups[day]) {
            groups[day] = [];
        }
        groups[day].push(order);
    });
    return groups;
};

const dayOrder = ["HOY", "AYER", "20/03/2026"];

/* ---------- MOCK DATA ---------- */

const COMPLETED_ORDERS = [
    {
        id: "1",
        vehicleYear: "2020",
        vehicleBrand: "Toyota",
        vehicleModel: "Hilux",
        vehiclePlate: "ABC-1234",
        vehicleMileage: "65,000 km",
        time: "HOY, 10:00 AM",
        dayKey: "HOY",
        notes: "Revisión completa del sistema de frenado.",
        services: [
            { id: "1", title: "Cambio de balatas", status: "Finalizado" }
        ]
    },
    {
        id: "2",
        vehicleYear: "2019",
        vehicleBrand: "Volkswagen",
        vehicleModel: "Golf GTI",
        vehiclePlate: "GTI-0909",
        vehicleMileage: "70,000 km",
        time: "AYER, 02:00 PM",
        dayKey: "AYER",
        notes: "Cambio de aceite sintético.",
        services: [
            { id: "1", title: "Cambio de aceite", status: "Finalizado" }
        ]
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F1115",
        paddingHorizontal: 18,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginVertical: 16,
    },

    summaryCard: {
        backgroundColor: "#1A1D24",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "rgba(255,212,59,0.3)",
    },

    smallLabel: {
        color: "#8B90A0",
        fontSize: 11,
        letterSpacing: 1,
    },

    bigNumber: {
        color: "#FFD43B",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 4,
    },

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#14161C",
        borderRadius: 15,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginBottom: 20,
    },

    searchInput: {
        flex: 1,
        marginLeft: 10,
        color: "#fff",
    },

    sectionLabel: {
        color: "#8B90A0",
        fontSize: 13,
        letterSpacing: 1,
        marginBottom: 15,
        marginTop: 10,
    },
});