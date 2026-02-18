import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Pressable,
} from "react-native";
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <ScreenContent navigation={navigation} />
        </SafeAreaProvider>
    );
};

const ScreenContent = ({ navigation }) => {
    const insets = useSafeAreaInsets();

    return (
        <>
            <StatusBar style="light" />
            <SafeAreaView
                style={[styles.container, { paddingBottom: insets.bottom }]}
                edges={["top", "bottom"]}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* HEADER */}
                    <View style={styles.header}>
                        <View style={styles.profileRow}>
                            <View style={styles.avatar} />
                            <View>
                                <Text style={styles.greeting}>
                                    BUENOS DÍAS,
                                </Text>
                                <Text style={styles.name}>Chalino Sánchez</Text>
                            </View>
                        </View>
                    </View>

                    {/* ACTIVE REPAIR */}
                    <Text style={styles.sectionTitle}>Trabajo activo</Text>

                    <View style={styles.activeCard}>
                        <View style={styles.yellowStrip} />

                        <View style={styles.activeIcon}>
                            <Feather name="tool" size={20} color="#000" />
                        </View>

                        <View style={{ flex: 1 }}>
                            <View style={styles.rowBetween}>
                                <Text style={styles.inProgress}>
                                    EN PROGRESO
                                </Text>
                                <Text style={styles.since}>
                                    Desde las 09:00 AM
                                </Text>
                            </View>

                            <Text style={styles.jobTitle}>
                                Inspección de Frenos y Cambio de Balatas
                            </Text>
                            <Text style={styles.jobSub}>
                                2021 Honda Civic • Silver
                            </Text>
                        </View>
                    </View>

                    {/* UPCOMING TASKS */}
                    <View style={styles.sectionRow}>
                        <Text style={styles.sectionTitle}>Próximas tareas</Text>
                        <Text style={styles.link}>Ver Calendario</Text>
                    </View>

                    {renderUpcoming(
                        "Diagnóstico de Motor",
                        "2019 Ford F-150 • 57SBG3",
                        "Hoy, 02:30 PM",
                    )}
                    {renderUpcoming(
                        "Reemplazo de Batería",
                        "2022 Toyota RAV4 • 29HJK1",
                        "Mañana, 09:00 AM",
                    )}

                    {/* COMPLETED TASKS */}
                    <View style={styles.sectionRow}>
                        <Text style={styles.sectionTitle}>
                            Tareas Completadas
                        </Text>
                        <Text style={styles.subtle}>Ultimas 24h</Text>
                    </View>

                    {renderCompleted(
                        "Cambio de Aceite y Filtro",
                        "BMW X5 • Finalizado 08:15 AM",
                        "$124.00",
                    )}
                    {renderCompleted(
                        "Recarga de Aire Acondicionado",
                        "AUDI A4 • Finalizado Ayer",
                        "$89.50",
                    )}

                    <View style={{ height: 120 }} />
                </ScrollView>

                {/* BOTTOM NAV */}
                <View
                    style={[styles.bottomBar, { bottom: insets.bottom || 0 }]}
                >
                    <Ionicons name="grid-outline" size={24} color="#FFD43B" />
                    <Pressable onPress={() => navigation.navigate("Orders")}>
                        <Ionicons
                            name="clipboard-outline"
                            size={24}
                            color="#888"
                        />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Agenda")}>
                        <Feather name="calendar" size={24} color="#888" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Orders")}>
                        <Feather name="archive" size={24} color="#888" />
                    </Pressable>
                </View>
            </SafeAreaView>
        </>
    );
};

const renderUpcoming = (title, sub, time) => (
    <View style={styles.taskCard}>
        <View style={styles.clockIcon}>
            <Ionicons name="time-outline" size={18} color="#000" />
        </View>
        <View style={{ flex: 1 }}>
            <Text style={styles.taskTitle}>{title}</Text>
            <Text style={styles.taskSub}>{sub}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
    </View>
);

const renderCompleted = (title, sub, price) => (
    <View style={styles.taskCard}>
        <View style={styles.checkIcon}>
            <Ionicons name="checkmark" size={18} color="#fff" />
        </View>
        <View style={{ flex: 1 }}>
            <Text style={styles.taskTitle}>{title}</Text>
            <Text style={styles.taskSub}>{sub}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
    </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F1115",
        paddingHorizontal: 18,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 20,
    },

    profileRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#FFD43B",
        marginRight: 12,
    },

    greeting: {
        color: "#888",
        fontSize: 12,
    },

    name: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },

    bell: {
        position: "relative",
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#FFD43B",
        position: "absolute",
        right: 0,
        top: 0,
    },

    sectionTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },

    sectionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
    },

    link: {
        color: "#FFD43B",
    },

    subtle: {
        color: "#777",
    },

    activeCard: {
        flexDirection: "row",
        backgroundColor: "#1A1D23",
        borderRadius: 20,
        padding: 18,
        marginBottom: 20,
    },

    yellowStrip: {
        width: 4,
        backgroundColor: "#FFD43B",
        borderRadius: 4,
        marginRight: 12,
    },

    activeIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#FFD43B",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    inProgress: {
        color: "#FFD43B",
        fontSize: 12,
        fontWeight: "bold",
    },

    since: {
        color: "#777",
        fontSize: 12,
    },

    jobTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        marginTop: 8,
    },

    jobSub: {
        color: "#888",
        marginTop: 4,
    },

    progressRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
    },

    progressBar: {
        flex: 1,
        height: 6,
        backgroundColor: "#333",
        borderRadius: 4,
        marginRight: 8,
    },

    progressFill: {
        width: "65%",
        height: "100%",
        backgroundColor: "#FFD43B",
        borderRadius: 4,
    },

    percent: {
        color: "#fff",
    },

    badge: {
        backgroundColor: "#3A1F1F",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
    },

    badgeText: {
        color: "#FF4D4D",
        fontSize: 12,
    },

    assignmentCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1A1D23",
        padding: 16,
        borderRadius: 16,
    },

    assignmentTitle: {
        color: "#fff",
        fontWeight: "600",
    },

    assignmentSub: {
        color: "#888",
        fontSize: 13,
    },

    startBtn: {
        backgroundColor: "#FFD43B",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },

    startText: {
        fontWeight: "bold",
    },

    taskCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1A1D23",
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
    },

    clockIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#FFD43B",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    checkIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#1E7D32",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    taskTitle: {
        color: "#fff",
        fontWeight: "600",
    },

    taskSub: {
        color: "#888",
        fontSize: 13,
    },

    time: {
        color: "#888",
        fontSize: 12,
    },

    price: {
        color: "#fff",
        fontWeight: "600",
    },

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

    scanBtn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FFD43B",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,
    },

    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
