import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
} from "react-native";
import {
    Feather,
    MaterialCommunityIcons,
    Octicons,
} from "@expo/vector-icons";
import {
   
    SafeAreaView,
    
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BottomNav from "../components/BottomNav";

export default function PastRepairsScreen() {
   

    return (
        <>
            <StatusBar style="light" />
            <SafeAreaView
                style={styles.container}
                edges={["top"]}
            >
                <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 100 }}
>

                    {/* TÍTULO */}
                    <Text style={styles.headerTitle}>
                        Historial de Reparaciones
                    </Text>

                    {/* RESUMEN */}
                    <View style={styles.summaryCard}>
                        <View>
                            <Text style={styles.smallLabel}>
                                COMPLETADAS HOY
                            </Text>
                            <Text style={styles.bigNumber}>
                                8 Reparaciones
                            </Text>
                        </View>

                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={styles.smallLabel}>
                                Eficiencia Total
                            </Text>
                            <Text style={styles.bigPercent}>
                                94%
                            </Text>
                        </View>
                    </View>

                    {/* BUSCADOR */}
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
                        />
                    </View>

                    {/* SECCIÓN */}
                    <Text style={styles.sectionLabel}>
                        RECIENTEMENTE FINALIZADAS
                    </Text>

                    {renderCompleted(
                        "Toyota Hilux SRX",
                        "ABC-1234",
                        "Cambio de balatas",
                        "Sara Rodriguez",
                        "Finalizada hace 2h"
                    )}

                    {renderCompleted(
                        "Volkswagen Golf GTI",
                        "GTI-0909",
                        "Cambio de aceite sintético",
                        "Pablo Lopez",
                        "Finalizada hace 4h"
                    )}

                    {renderCompleted(
                        "Ford F-150 Raptor",
                        "RAP-7721",
                        "Calibración de transmisión",
                        "Roberto Sanchez ",
                        "Finalizada hace 6h"
                    )}

                </ScrollView>

               
<BottomNav active="PastRepairs" />
            </SafeAreaView>
        </>
    );
}

function renderCompleted(title, plate, service, mechanic, time) {
    return (
        <View style={styles.taskCard}>
            <View style={{ flex: 1 }}>
                <View style={styles.rowBetween}>
                    <View>
                        <Text style={styles.carTitle}>{title}</Text>
                        <Text style={styles.subText}>
                            Placas: {plate}
                        </Text>
                    </View>

                    <View style={styles.completedBadge}>
                        <Text style={styles.completedText}>
                            COMPLETADA
                        </Text>
                    </View>
                </View>

                <View style={styles.serviceRow}>
                    <MaterialCommunityIcons
                        name="wrench"
                        size={14}
                        color="#FFD43B"
                    />
                    <Text style={styles.subText}>
                        {service}
                    </Text>
                </View>

                <View style={styles.rowBetween}>
                    <Text style={styles.subText}>
                        {mechanic}
                    </Text>
                    <Text style={styles.timeText}>
                        {time}
                    </Text>
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
        flexDirection: "row",
        justifyContent: "space-between",
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

    bigPercent: {
        color: "#fff",
        fontSize: 22,
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
    },

    taskCard: {
        backgroundColor: "#1A1D24",
        borderRadius: 18,
        padding: 16,
        marginBottom: 15,
    },

    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    carTitle: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },

    subText: {
        color: "#8B90A0",
        fontSize: 12,
        marginTop: 4,
    },

    completedBadge: {
        backgroundColor: "rgba(255,212,59,0.15)",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },

    completedText: {
        color: "#FFD43B",
        fontSize: 10,
        fontWeight: "600",
    },

    serviceRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 8,
        marginBottom: 8,
    },

    timeText: {
        color: "#8B90A0",
        fontSize: 11,
    },
});