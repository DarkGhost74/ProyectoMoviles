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
    Ionicons,
    MaterialCommunityIcons,
    Feather,
    Octicons,
} from "@expo/vector-icons";
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BottomNav from "../components/BottomNav";

export default function OrdersScreen({ navigation }) {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <SafeAreaView
                style={[styles.container, { paddingBottom: insets.bottom }]}
                edges={["top", "bottom"]}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            margin: 16,
                            color: "#fff",
                        }}
                    >
                        Gestor de Ordenes
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
                            Orden actual
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.rowBetween}>
                            <View>
                                <Text style={styles.carTitle}>Honda Civic</Text>
                                <Text style={styles.subText}>
                                    Placas: AB123D • Gris • 2027
                                </Text>
                            </View>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>EN PROCESO</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate("OrderDetails")} >
                            <Text style={styles.primaryButtonText}>
                                Ver detalles
                            </Text>
                            <MaterialCommunityIcons
                                name="arrow-right"
                                size={20}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* UPCOMING */}
                    <Text style={styles.sectionLabel}>PRÓXIMAS ORDENES</Text>

                    {renderUpcoming(
                        "Ford F-150",
                        "Diagnostico de motor • PL-9988",
                        "HOY, 02:30 PM",
                        "PENDIENTE",
                    )}
                    {renderUpcoming(
                        "Toyota RAV4",
                        "Servicio de mantenimiento • TX-5544",
                        "MAÑANA, 09:00 AM",
                        "PROGRAMADO",
                    )}
                    {renderUpcoming(
                        "Toyota RAV4",
                        "Servicio de mantenimiento • TX-5544",
                        "MAÑANA, 09:00 AM",
                        "PROGRAMADO",
                    )}
                    {renderUpcoming(
                        "Toyota RAV4",
                        "Servicio de mantenimiento • TX-5544",
                        "MAÑANA, 09:00 AM",
                        "PROGRAMADO",
                    )}
                    {renderUpcoming(
                        "Toyota RAV4",
                        "Servicio de mantenimiento • TX-5544",
                        "MAÑANA, 09:00 AM",
                        "PROGRAMADO",
                    )}
                    {renderUpcoming(
                        "Toyota RAV4",
                        "Servicio de mantenimiento • TX-5544",
                        "MAÑANA, 09:00 AM",
                        "PROGRAMADO",
                    )}
                </ScrollView>
                <BottomNav active="Orders" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

function renderUpcoming(title, subtitle, time, status) {
    return (
        <View style={styles.taskCard}>
            <View style={styles.iconCircleDark}>
                <Feather name="clock" size={16} color="#FFD43B" />
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.carTitle}>{title}</Text>
                <Text style={styles.subText}>{subtitle}</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.timeText}>{time}</Text>
                <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F1115",
        paddingHorizontal: 18,
    },
    sectionLabel: {
        color: "#8B90A0",
        fontSize: 13,
        letterSpacing: 1,
        marginBottom: 15,
        marginTop: 10,
    },
    card: {
        backgroundColor: "#1A1D24",
        borderRadius: 20,
        padding: 20,
        marginBottom: 25,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    carTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    subText: {
        color: "#8B90A0",
        fontSize: 13,
        marginTop: 4,
    },
    badge: {
        backgroundColor: "rgba(255,212,59,0.15)",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    badgeText: {
        color: "#FFD43B",
        fontSize: 12,
        fontWeight: "600",
    },
    primaryButton: {
        backgroundColor: "#FFD43B",
        paddingVertical: 14,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
    },
    primaryButtonText: {
        color: "#000",
        fontWeight: "700",
    },
    assignmentCard: {
        backgroundColor: "#14161C",
        borderRadius: 18,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#2A2E38",
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#1F222B",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    smallButton: {
        backgroundColor: "#FFD43B",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },
    smallButtonText: {
        color: "#000",
        fontWeight: "600",
        fontSize: 12,
    },
    taskCard: {
        backgroundColor: "#1A1D24",
        borderRadius: 18,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    iconCircleDark: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#14161C",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    completedCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#2ECC71",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    timeText: {
        color: "#8B90A0",
        fontSize: 11,
        marginBottom: 6,
        textAlign: "right",
    },
    statusBadge: {
        borderWidth: 1,
        borderColor: "#FFD43B",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    statusText: {
        color: "#FFD43B",
        fontSize: 10,
    },
    price: {
        color: "#FFD43B",
        fontWeight: "700",
        fontSize: 16,
    },
    priorityBadge: {
        backgroundColor: "#402225",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
    },
    priorityText: {
        color: "#FF4D4F",
        fontSize: 11,
    },
    fab: {
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
        backgroundColor: "#FFD43B",
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        elevation: 8,
    },
});
