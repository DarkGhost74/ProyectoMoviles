import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <View>
            <Text>Agenda Screen</Text>

            <Button title="Regresar" onPress={() => navigation.goBack()} />
        </View>
    );
}
/*
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function OrdersScreen() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HEADER }
                <View style={styles.header}>
                    <Text style={styles.title}>Orders Management</Text>
                    <View style={styles.searchBtn}>
                        <Feather name="search" size={20} color="#FFD43B" />
                    </View>
                </View>

                {/* CURRENT ORDER }
                <Text style={styles.sectionLabel}>CURRENT ORDER</Text>

                <View style={styles.card}>
                    <View style={styles.rowBetween}>
                        <View>
                            <Text style={styles.carTitle}>Honda Civic</Text>
                            <Text style={styles.subText}>
                                Plate: ABC-1234 • Silver
                            </Text>
                        </View>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>IN PROGRESS</Text>
                        </View>
                    </View>

                    <View style={styles.progressHeader}>
                        <Text style={styles.progressLabel}>
                            BRAKE PAD REPLACEMENT
                        </Text>
                        <Text style={styles.progressPercent}>
                            65% COMPLETE
                        </Text>
                    </View>

                    <View style={styles.progressBar}>
                        <View style={styles.progressFill} />
                    </View>

                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>
                            View Details →
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* NEW ASSIGNMENTS }
                <View style={styles.rowBetween}>
                    <Text style={styles.sectionLabel}>NEW ASSIGNMENTS</Text>
                    <View style={styles.priorityBadge}>
                        <Text style={styles.priorityText}>2 PRIORITY</Text>
                    </View>
                </View>

                <View style={styles.assignmentCard}>
                    <View style={styles.iconCircle}>
                        <MaterialCommunityIcons
                            name="wrench"
                            size={18}
                            color="#FFD43B"
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.carTitle}>Tesla Model 3</Text>
                        <Text style={styles.subText}>
                            Suspension Calibration
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.smallButton}>
                        <Text style={styles.smallButtonText}>START</Text>
                    </TouchableOpacity>
                </View>

                {/* UPCOMING }
                <Text style={styles.sectionLabel}>UPCOMING TASKS</Text>

                {renderUpcoming(
                    "Ford F-150",
                    "Engine Diagnostics • PL-9988",
                    "TODAY, 02:30 PM",
                    "PENDING"
                )}

                {renderUpcoming(
                    "Toyota RAV4",
                    "Transmission Flush • TX-5544",
                    "TOMORROW, 09:00 AM",
                    "SCHEDULED"
                )}

                {/* COMPLETED }
                <Text style={styles.sectionLabel}>COMPLETED TASKS</Text>

                {renderCompleted("BMW X5", "OIL CHANGE • DONE 08:15 AM", "$124.00")}
                {renderCompleted("Audi A4", "AC RECHARGE • DONE YESTERDAY", "$89.50")}

                <View style={{ height: 120 }} />
            </ScrollView>

            {/* FLOATING BUTTON }
            <TouchableOpacity style={styles.fab}>
                <Feather name="plus" size={26} color="#000" />
            </TouchableOpacity>
        </View>
    );
}

function renderUpcoming(title: string, subtitle: string, time: string, status: string) {
    return (
        <View style={styles.taskCard}>
            <View style={styles.iconCircleDark}>
                <Feather name="clock" size={16} color="#FFD43B" />
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.carTitle}>{title}</Text>
                <Text style={styles.subText}>{subtitle}</Text>
            </View>

            <View>
                <Text style={styles.timeText}>{time}</Text>
                <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
            </View>
        </View>
    );
}

function renderCompleted(title: string, subtitle: string, price: string) {
    return (
        <View style={styles.taskCard}>
            <View style={styles.completedCircle}>
                <Feather name="check" size={16} color="#000" />
            </View>

            <View style={{ flex: 1 }}>
                <Text style={styles.carTitle}>{title}</Text>
                <Text style={styles.subText}>{subtitle}</Text>
            </View>

            <Text style={styles.price}>{price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F1115",
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    title: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "700",
    },
    searchBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#1A1D24",
        justifyContent: "center",
        alignItems: "center",
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
    progressHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    progressLabel: {
        color: "#8B90A0",
        fontSize: 12,
    },
    progressPercent: {
        color: "#FFD43B",
        fontSize: 12,
        fontWeight: "600",
    },
    progressBar: {
        height: 8,
        backgroundColor: "#2A2E38",
        borderRadius: 10,
        marginTop: 10,
    },
    progressFill: {
        width: "65%",
        height: 8,
        backgroundColor: "#FFD43B",
        borderRadius: 10,
    },
    primaryButton: {
        backgroundColor: "#FFD43B",
        paddingVertical: 14,
        borderRadius: 15,
        alignItems: "center",
        marginTop: 20,
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
*/