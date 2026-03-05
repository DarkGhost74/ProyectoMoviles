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
import BottomNav from "../components/BottomNav";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <ScreenContent navigation={navigation} />
        </SafeAreaProvider>
    );
};

const Service = ({ title, status }) => {
    const renderIcon = () => {
        switch (status) {
            case "Finalizado":
                return (
                    <Feather name="check-circle" size={18} color="#22C55E" />
                );
            case "En Proceso":
                return <Feather name="clock" size={18} color="#FFD43B" />;
            case "Pendiente":
                return <Feather name="x-circle" size={18} color="#EF4444" />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.servicesRow}>
            <Text style={styles.servicesText}>•  {title}</Text>
            {renderIcon()}
        </View>
    );
};

const OrderCard = ({ type, vehicleYear, vehicleBrand, vehicleModel, vehicleColor, vehiclePlate, services, notes, time }) => {
    const getIconConfig = () => {
        switch (type) {
            case 'active':
                return { iconFamily: 'Feather', icon: 'tool', bgColor: '#FFD43B', stripColor: '#FFD43B' };
            case 'upcoming':
                return { iconFamily: 'Ionicons', icon: 'time-outline', bgColor: '#FFD43B', stripColor: null };
            case 'completed':
                return { iconFamily: 'Ionicons', icon: 'checkmark', bgColor: '#1E7D32', stripColor: null };
            default:
                return { iconFamily: 'Feather', icon: 'tool', bgColor: '#FFD43B', stripColor: '#FFD43B' };
        }
    };

    const iconConfig = getIconConfig();

    const renderIcon = () => {
        const iconProps = { size: 20, color: "#000" };
        if (iconConfig.iconFamily === 'Ionicons') {
            return <Ionicons name={iconConfig.icon} {...iconProps} />;
        }
        return <Feather name={iconConfig.icon} {...iconProps} />;
    };

    const vehicleText = `${vehicleYear} ${vehicleBrand} ${vehicleModel} • ${vehicleColor} • ${vehiclePlate}`;

    return (
        <View style={styles.orderCard}>
            {type === 'active' && <View style={[styles.yellowStrip, { backgroundColor: iconConfig.stripColor }]} />}

            <View style={[styles.iconContainer, { backgroundColor: iconConfig.bgColor }]}>
                {renderIcon()}
            </View>

            <View style={{ flex: 1 }}>
                {type === 'active' && (
                    <View style={styles.rowBetween}>
                        <Text style={styles.inProgress}>EN PROGRESO</Text>
                        <Text style={styles.since}>Desde las {time}</Text>
                    </View>
                )}

                {type === 'upcoming' && (
                    <View style={styles.rowBetween}>
                        <Text style={styles.scheduled}>PROGRAMADO</Text>
                        <Text style={styles.since}>{time}</Text>
                    </View>
                )}

                {type === 'completed' && (
                    <View style={styles.rowBetween}>
                        <Text style={styles.completed}>COMPLETADO</Text>
                        <Text style={styles.since}>{time}</Text>
                    </View>
                )}

                <Text style={styles.jobTitle}>{vehicleText}</Text>

                {services.map((item) => (
                    <Service
                        key={item.id}
                        title={item.title}
                        status={item.status}
                    />
                ))}

                {(type === 'active' || type === 'upcoming') && notes && (
                    <View style={styles.notesSection}>
                        <View style={styles.notesHeader}>
                            <Ionicons name="document-text-outline" size={14} color="#FFD43B" />
                            <Text style={styles.notesLabel}>Notas del cliente</Text>
                        </View>
                        <Text style={styles.notesText}>{notes}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const ACTIVE_ORDER = {
    id: '1',
    vehicleYear: '2026',
    vehicleBrand: 'Ferrari',
    vehicleModel: 'SF-26',
    vehicleColor: 'Rojo',
    vehiclePlate: '62SBG2',
    status: 'EN PROGRESO',
    since: '09:00 AM',
    notes: 'El cliente reporta ruido extraño al abrir el DRS. También pidió que se revisara el sistema de escape por posibles fugas.',
    services: [
        { id: '1', title: 'Cambio alerón delantero', status: 'Finalizado' },
        { id: '2', title: 'Inspección de unidad de potencia', status: 'Pendiente' },
        { id: '3', title: 'Reparación turbo', status: 'En Proceso' },
        { id: '4', title: 'Cambio de discos carbono-ceramicos', status: 'En Proceso' },
        { id: '5', title: 'Chequeo de fondo plano', status: 'En Proceso' },
        { id: '6', title: 'Cambio de llantas a compuesto blando', status: 'Pendiente' },
    ]
}

const UPCOMING_ORDERS = [
    {
        id: '2',
        vehicleYear: '2019',
        vehicleBrand: 'Ford',
        vehicleModel: 'F-150',
        vehicleColor: 'Verde',
        vehiclePlate: '57SBG3',
        time: 'Hoy, 02:30 PM',
        notes: 'El cliente pidió que se revisara la presión de las llantas.',
        services: [
            { id: '1', title: 'Diagnóstico de Motor', status: 'Pendiente' },
        ]
    },
    {
        id: '3',
        vehicleYear: '2022',
        vehicleBrand: 'Toyota',
        vehicleModel: 'RAV4',
        vehicleColor: 'Azul',
        vehiclePlate: '29HJK1',
        time: 'Mañana, 09:00 AM',
        notes: '',
        services: [
            { id: '1', title: 'Reemplazo de Batería', status: 'Pendiente' },
        ]
    }
]

const COMPLETED_ORDERS = [
    {
        id: '4',
        vehicleYear: '2023',
        vehicleBrand: 'BMW',
        vehicleModel: 'X5',
        vehicleColor: 'Negro',
        vehiclePlate: '45JLM2',
        time: '08:15 AM',
        services: [
            { id: '1', title: 'Cambio de Aceite y Filtro', status: 'Finalizado' },
        ]
    },
    {
        id: '5',
        vehicleYear: '2021',
        vehicleBrand: 'Audi',
        vehicleModel: 'A4',
        vehicleColor: 'Blanco',
        vehiclePlate: '78NPQ5',
        time: 'Ayer',
        services: [
            { id: '1', title: 'Recarga de Aire Acondicionado', status: 'Finalizado' },
        ]
    }
]

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
                            <View style={styles.avatar}>
                                <Feather name="user" size={30} color="black" />
                            </View>
                            <View>
                                <Text style={styles.greeting}>
                                    BUENOS DÍAS,
                                </Text>
                                <Text style={styles.name}>Chalino Sánchez</Text>
                            </View>
                        </View>
                    </View>

                    {/* ACTIVE REPAIR */}
                    <Text style={styles.sectionTitle}>Ordenes activas</Text>

                    <OrderCard
                        type="active"
                        vehicleYear={ACTIVE_ORDER.vehicleYear}
                        vehicleBrand={ACTIVE_ORDER.vehicleBrand}
                        vehicleModel={ACTIVE_ORDER.vehicleModel}
                        vehicleColor={ACTIVE_ORDER.vehicleColor}
                        vehiclePlate={ACTIVE_ORDER.vehiclePlate}
                        services={ACTIVE_ORDER.services}
                        notes={ACTIVE_ORDER.notes}
                        time={ACTIVE_ORDER.since}
                    />

                    {/* UPCOMING TASKS */}
                    <View style={styles.sectionRow}>
                        <Text style={styles.sectionTitle}>
                            Próximas ordenes
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Agenda')}>
                            <Text style={styles.link}>Ver Calendario</Text>
                        </TouchableOpacity>
                    </View>

                    {UPCOMING_ORDERS.map((order) => (
                        <OrderCard
                            key={order.id}
                            type="upcoming"
                            vehicleYear={order.vehicleYear}
                            vehicleBrand={order.vehicleBrand}
                            vehicleModel={order.vehicleModel}
                            vehicleColor={order.vehicleColor}
                            vehiclePlate={order.vehiclePlate}
                            services={order.services}
                            notes={order.notes}
                            time={order.time}
                        />
                    ))}

                    {/* COMPLETED TASKS */}
                    <View style={styles.sectionRow}>
                        <Text style={styles.sectionTitle}>
                            Ordenes Completadas
                        </Text>
                        <Text style={styles.subtle}>Ultimas 24h</Text>
                    </View>

                    {COMPLETED_ORDERS.map((order) => (
                        <OrderCard
                            key={order.id}
                            type="completed"
                            vehicleYear={order.vehicleYear}
                            vehicleBrand={order.vehicleBrand}
                            vehicleModel={order.vehicleModel}
                            vehicleColor={order.vehicleColor}
                            vehiclePlate={order.vehiclePlate}
                            services={order.services}
                            time={order.time}
                        />
                    ))}

                    <View style={{ height: 120 }} />
                </ScrollView>

                {/* BOTTOM NAV */}
                <BottomNav active="Home" />
            </SafeAreaView>
        </>
    );
};

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
        justifyContent: "center",
        alignItems: "center",
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

    servicesRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        gap: 8,
        width: "100%",
    },

    servicesText: {
        color: "#888",
        fontSize: 13,
        flex: 1,
        flexWrap: "wrap",
    },

    orderCard: {
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

    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    inProgress: {
        color: "#FFD43B",
        fontSize: 12,
        fontWeight: "bold",
    },

    scheduled: {
        color: "#3B82F6",
        fontSize: 12,
        fontWeight: "bold",
    },

    completed: {
        color: "#22C55E",
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

    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    notesSection: {
        marginTop: 16,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: "#2A2D35",
    },

    notesHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6,
        gap: 6,
    },

    notesLabel: {
        color: "#FFD43B",
        fontSize: 12,
        fontWeight: "600",
    },

    notesText: {
        color: "#888",
        fontSize: 13,
        lineHeight: 18,
    },
});
