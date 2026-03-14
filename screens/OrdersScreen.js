import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { Octicons, Feather } from "@expo/vector-icons";
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BottomNav from "../components/BottomNav";
import OrderCard from "../components/OrderCard";
import OrderService from "../services/OrderService";

import { getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";

const auth = getAuth(app);

// POR NADA DEL MUNDO TOCAR ESTOS IMPORTS!!
import OrderService from "../services/OrderService";
import { getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";


const auth = getAuth(app);

// Helper para procesar fechas de Postgres a 'HOY', 'MAÑANA' o 'DD/MM/YYYY'
const processUpcomingOrders = (orders) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatD = (d) => {
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const todayStr = formatD(today);
    const tomorrowStr = formatD(tomorrow);

    return orders.map(order => {
        let dayKey = 'SIN FECHA';
        let displayTime = order.time;

        if (order.time) {
            // El backend retorna 'DD/MM/YYYY, HH12:MI AM'
            const parts = order.time.split(', ');
            if (parts.length === 2) {
                const datePart = parts[0];
                const timePart = parts[1];
                
                if (datePart === todayStr) {
                    dayKey = 'HOY';
                    displayTime = `HOY, ${timePart}`;
                } else if (datePart === tomorrowStr) {
                    dayKey = 'MAÑANA';
                    displayTime = `MAÑANA, ${timePart}`;
                } else {
                    dayKey = datePart;
                }
            }
        }
        return { ...order, dayKey, displayTime };
    });
};

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

export default function OrdersScreen({ navigation }) {
    const [expandedId, setExpandedId] = useState(null);
    const insets = useSafeAreaInsets();
    
<<<<<<< HEAD
    // Estados para la API RESTful
    const [activeOrder, setActiveOrder] = useState(null);
    const [upcomingOrders, setUpcomingOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchOrders = async (uid) => {
        if (!uid) return;
        try {
            setIsLoading(true);

            // Consultas secuenciales (Protegiendo CleverCloud)
            const active = await OrderService.getActiveOrder(uid);
            const upcomingRaw = await OrderService.getUpcomingOrders(uid);

            setActiveOrder(active);
            setUpcomingOrders(processUpcomingOrders(upcomingRaw));

        } catch (err) {
            console.error("Error al cargar la agenda:", err);
=======
    const [activeOrder, setActiveOrder] = useState(null);
    const [upcomingOrders, setUpcomingOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOrders = async (uid) => {
        if (!uid) return;

        try {
            setIsLoading(true);
            setError(null);

            const active = await OrderService.getActiveOrder(uid);
            const upcoming = await OrderService.getUpcomingOrders(uid);

            setActiveOrder(active);
            setUpcomingOrders(upcoming);

        } catch (err) {
            console.error("Error al cargar órdenes:", err);
            setError("No se pudieron cargar las órdenes. Verifica tu conexión e intenta de nuevo.");
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
<<<<<<< HEAD
        // Escuchamos a Firebase para obtener el UID
=======
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03
        const unsubscribeAuth = auth.onAuthStateChanged((user) => {
            if (user) {
                fetchOrders(user.uid);
            } else {
                setIsLoading(false);
            }
        });

<<<<<<< HEAD
        // Recargamos si regresamos de otra pantalla
=======
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03
        const unsubscribeFocus = navigation.addListener('focus', () => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                fetchOrders(currentUser.uid);
            }
        });

        return () => {
            unsubscribeAuth();
            unsubscribeFocus();
        };
    }, [navigation]);

<<<<<<< HEAD
    // Renderizamos un Loading igual al de HomeScreen
=======
    const getDateLabel = (timeString) => {
        if (!timeString) return 'SIN FECHA';
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const dateMatch = timeString.split(',')[0];
        if (!dateMatch) return 'SIN FECHA';
        
        const [day, month, year] = dateMatch.split('/').map(Number);
        const orderDate = new Date(year, month - 1, day);
        
        const todayStr = today.toLocaleDateString('es-MX');
        const tomorrowStr = tomorrow.toLocaleDateString('es-MX');
        
        if (dateMatch === todayStr) return 'HOY';
        if (dateMatch === tomorrowStr) return 'MAÑANA';
        return dateMatch;
    };

    const groupedOrders = upcomingOrders.reduce((groups, order) => {
        const label = getDateLabel(order.time);
        if (!groups[label]) {
            groups[label] = [];
        }
        groups[label].push(order);
        return groups;
    }, {});

    const sortedDayLabels = Object.keys(groupedOrders).sort((a, b) => {
        if (a === 'HOY') return -1;
        if (b === 'HOY') return 1;
        if (a === 'MAÑANA') return -1;
        if (b === 'MAÑANA') return 1;
        return a.localeCompare(b);
    });

>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03
    if (isLoading && !activeOrder && upcomingOrders.length === 0) {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator size="large" color="#FFD43B" />
<<<<<<< HEAD
                    <Text style={{ color: "#888", marginTop: 15 }}>Cargando agenda...</Text>
=======
                    <Text style={{ color: "#888", marginTop: 15 }}>Sincronizando con el taller...</Text>
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }

<<<<<<< HEAD
    const groupedOrders = groupOrdersByDay(upcomingOrders);
=======
    if (error) {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Feather name="alert-triangle" size={40} color="#FF4D4D" />
                    <Text style={{ color: "#fff", marginTop: 15, textAlign: 'center', paddingHorizontal: 20 }}>{error}</Text>
                    <TouchableOpacity onPress={() => fetchOrders(auth?.currentUser?.uid)} style={[styles.detailsButton, { marginTop: 20 }]}>
                        <Text style={styles.detailsButtonText}>Reintentar</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03

    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <SafeAreaView
                style={[styles.container, { paddingBottom: insets.bottom }]}
                edges={["top", "bottom"]}
            >
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 20 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            margin: 16,
                            color: "#fff",
                        }}
                    >
                        Próximas Ordenes
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 10,
                        }}
                    >
                        <Octicons name="dot-fill" size={24} color="#FFD43B" />
                        <Text
                            style={{
                                color: "#FFD43B",
                                marginLeft: 8,
                                fontSize: 18,
                                fontWeight: "bold",
                            }}
                        >
                            Ordenes actuales
                        </Text>
                    </View>
<<<<<<< HEAD
                    
                    {/* Renderización Dinámica de Orden Activa */}
                    {activeOrder ? (
                        <OrderCard
                            id={activeOrder.id} 
=======
                    {activeOrder ? (
                        <OrderCard
                            id={activeOrder.id}
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03
                            type="active"
                            vehicleYear={activeOrder.vehicleYear}
                            vehicleBrand={activeOrder.vehicleBrand}
                            vehicleModel={activeOrder.vehicleModel}
                            vehiclePlate={activeOrder.vehiclePlate}
                            vehicleColor={activeOrder.vehicleColor}
<<<<<<< HEAD
                            ownerName={activeOrder.ownerName} 
=======
                            ownerName={activeOrder.ownerName}
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03
                            services={activeOrder.services}
                            notes={activeOrder.notes}
                            time={activeOrder.since}
                            mileage={activeOrder.vehicleMileage}
                            navigation={navigation}
                            expandedId={expandedId}
                            setExpandedId={setExpandedId}
                        />
                    ) : (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyText}>No hay órdenes en progreso</Text>
                        </View>
                    )}

<<<<<<< HEAD
                    {upcomingOrders.length === 0 && (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyText}>No tienes órdenes agendadas próximamente</Text>
                        </View>
                    )}

                    {/* Renderización Dinámica y Agrupada de Órdenes Próximas */}
                    {Object.keys(groupedOrders).map((day) => (
                        <View key={day}>
                            <Text style={styles.sectionLabel}>{day}</Text>
                            {groupedOrders[day].map((order) => (
                                <OrderCard
                                    key={order.id}
                                    id={order.id} 
                                    type="upcoming"
                                    vehicleYear={order.vehicleYear}
                                    vehicleBrand={order.vehicleBrand}
                                    vehicleModel={order.vehicleModel}
                                    vehiclePlate={order.vehiclePlate}
                                    vehicleColor={order.vehicleColor}
                                    ownerName={order.ownerName} // BUG ARREGLADO (Antes era ACTIVE_ORDER.ownerName)
                                    services={order.services}
                                    notes={order.notes}
                                    time={order.displayTime || order.time}
                                    mileage={order.vehicleMileage}
                                    navigation={navigation}
                                    expandedId={expandedId}
                                    setExpandedId={setExpandedId}
                                />
                            ))}
                        </View>
                    ))}
=======
                    <View style={styles.sectionRow}>
                        <Text style={styles.sectionTitle}>
                            Órdenes próximas
                        </Text>
                    </View>

                    {upcomingOrders.length > 0 ? (
                        sortedDayLabels.map((dayLabel) => (
                            <View key={dayLabel}>
                                <Text style={styles.sectionLabel}>{dayLabel}</Text>
                                {groupedOrders[dayLabel].map((order) => (
                                    <OrderCard
                                        key={order.id}
                                        id={order.id}
                                        type="upcoming"
                                        vehicleYear={order.vehicleYear}
                                        vehicleBrand={order.vehicleBrand}
                                        vehicleModel={order.vehicleModel}
                                        vehiclePlate={order.vehiclePlate}
                                        vehicleColor={order.vehicleColor}
                                        ownerName={order.ownerName}
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
                        ))
                    ) : (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyText}>No hay órdenes próximas</Text>
                        </View>
                    )}
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03

                    <View style={{ height: 120 }} />
                </ScrollView>
                <BottomNav active="Orders" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

<<<<<<< HEAD

=======
>>>>>>> 8b76e079e2222ab3f97b2decc8cb396b1b42dd03
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F1115",
        paddingHorizontal: 18,
    },
    sectionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },
    sectionLabel: {
        color: "#8B90A0",
        fontSize: 13,
        letterSpacing: 1,
        marginBottom: 15,
        marginTop: 10,
    },
    emptyState: {
        backgroundColor: "#1A1D23",
        borderRadius: 20,
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    emptyText: {
        color: "#777",
        fontSize: 14,
    },
    detailsButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FFD43B",
    },
    detailsButtonText: {
        color: "#FFD43B",
        fontSize: 13,
        fontWeight: "600",
    },
});
