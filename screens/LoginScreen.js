import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CarShopIcon = () => (
    <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
            <MaterialCommunityIcons
                name="hammer-screwdriver"
                size={48}
                color="black"
            />
        </View>
        <View style={styles.logoGlow} />
    </View>
);

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                <View style={styles.scrollContent}>
                    {/* Header / Logo */}
                    <View style={styles.header}>
                        <CarShopIcon />
                        <View style={styles.titleRow}>
                            <Text style={styles.titleWhite}>Car Shop </Text>
                            <Text style={styles.titleYellow}>Service</Text>
                        </View>
                        <Text style={styles.subtitle}>TALLER AUTOMOTRIZ</Text>
                    </View>

                    {/* Card */}
                    <View style={styles.card}>
                        <Text style={styles.welcomeTitle}>Bienvenido</Text>
                        <Text style={styles.welcomeSubtitle}>
                            Por favor inicia sesión
                        </Text>

                        {/* Email Field */}
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>CORREO</Text>
                            <View
                                style={[
                                    styles.inputWrapper,
                                    emailFocused && styles.inputWrapperFocused,
                                ]}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder="mecanico@carshop.com"
                                    placeholderTextColor="#555"
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    onFocus={() => setEmailFocused(true)}
                                    onBlur={() => setEmailFocused(false)}
                                />
                            </View>
                        </View>

                        {/* Password Field */}
                        <View style={styles.fieldGroup}>
                            <Text style={styles.label}>CONTRASEÑA</Text>
                            <View
                                style={[
                                    styles.inputWrapper,
                                    passwordFocused &&
                                        styles.inputWrapperFocused,
                                ]}
                            >
                                <TextInput
                                    style={styles.input}
                                    placeholder="••••••••"
                                    placeholderTextColor="#555"
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!showPassword}
                                    onFocus={() => setPasswordFocused(true)}
                                    onBlur={() => setPasswordFocused(false)}
                                />
                                <TouchableOpacity
                                    onPress={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    style={styles.eyeButton}
                                    activeOpacity={0.7}
                                >
                                    <Text style={styles.eyeIcon}>
                                        {showPassword ? (
                                            <AntDesign
                                                name="eye-invisible"
                                                size={24}
                                                color="#9A9A9A"
                                            />
                                        ) : (
                                            <AntDesign
                                                name="eye"
                                                size={24}
                                                color="#9A9A9A"
                                            />
                                        )}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Remember Me + Forgot Password */}
                        <View style={styles.optionsRow}>
                            <TouchableOpacity
                                style={styles.rememberRow}
                                onPress={() => setRememberMe(!rememberMe)}
                                activeOpacity={0.8}
                            >
                                <View
                                    style={[
                                        styles.checkbox,
                                        rememberMe && styles.checkboxActive,
                                    ]}
                                >
                                    {rememberMe && (
                                        <Text style={styles.checkmark}>✓</Text>
                                    )}
                                </View>
                                <Text style={styles.rememberText}>
                                    Recuerdame
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Sign In Button */}
                        <TouchableOpacity
                            style={styles.signInButton}
                            onPress={() => navigation.navigate("Home")}
                            activeOpacity={0.85}
                        >
                            <Text style={styles.signInText}>
                                Iniciar Sesión
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.alertText}>
                            Si olvidaste la contraseña, contacta con tu jefe
                            para que te proporcione una nueva.
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const YELLOW = "#F5C518";
const BG = "#1C1C1C";
const CARD_BG = "#252525";
const INPUT_BG = "#2E2E2E";
const TEXT_MUTED = "#888";
const TEXT_LABEL = "#9A9A9A";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: BG,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 32,
        alignItems: "center",
        padding: 24,
    },

    // ── Header ──────────────────────────────────────
    header: {
        alignItems: "center",
        marginBottom: 32,
    },
    logoContainer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    logoBox: {
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: YELLOW,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: YELLOW,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 16,
        elevation: 12,
    },
    logoSymbol: {
        fontSize: 36,
        color: "#1a1a1a",
    },
    logoGlow: {
        position: "absolute",
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: YELLOW,
        opacity: 0.15,
        transform: [{ scale: 1.4 }],
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "baseline",
    },
    titleWhite: {
        fontSize: 28,
        fontWeight: "800",
        color: "#FFFFFF",
        letterSpacing: 0.5,
    },
    titleYellow: {
        fontSize: 28,
        fontWeight: "800",
        color: YELLOW,
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 11,
        fontWeight: "600",
        color: TEXT_MUTED,
        letterSpacing: 3,
        marginTop: 4,
    },

    // ── Card ─────────────────────────────────────────
    card: {
        width: "100%",
        backgroundColor: CARD_BG,
        borderRadius: 24,
        padding: 28,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 10,
        marginBottom: 28,
    },
    welcomeTitle: {
        fontSize: 26,
        fontWeight: "800",
        color: "#FFFFFF",
        marginBottom: 6,
    },
    welcomeSubtitle: {
        fontSize: 14,
        color: TEXT_MUTED,
        marginBottom: 28,
    },

    // ── Fields ───────────────────────────────────────
    fieldGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 11,
        fontWeight: "700",
        color: TEXT_LABEL,
        letterSpacing: 1.5,
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: INPUT_BG,
        borderRadius: 14,
        paddingHorizontal: 16,
        height: 54,
        borderWidth: 1.5,
        borderColor: "transparent",
    },
    inputWrapperFocused: {
        borderColor: YELLOW,
    },
    inputIcon: {
        fontSize: 16,
        color: TEXT_MUTED,
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: "#FFFFFF",
        padding: 0,
    },
    eyeButton: {
        padding: 4,
    },
    eyeIcon: {
        fontSize: 16,
        color: TEXT_MUTED,
    },

    // ── Options Row ──────────────────────────────────
    optionsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 28,
        marginTop: 4,
    },
    rememberRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: "#555",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },
    checkboxActive: {
        backgroundColor: YELLOW,
        borderColor: YELLOW,
    },
    checkmark: {
        fontSize: 12,
        fontWeight: "800",
        color: "#1a1a1a",
    },
    rememberText: {
        fontSize: 14,
        color: TEXT_MUTED,
    },
    alertText: {
        fontSize: 14,
        color: TEXT_MUTED,
        marginTop: 12,
    },

    // ── Sign In Button ────────────────────────────────
    signInButton: {
        backgroundColor: YELLOW,
        borderRadius: 16,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: YELLOW,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 8,
    },
    signInText: {
        fontSize: 17,
        fontWeight: "800",
        color: "#1a1a1a",
        letterSpacing: 0.5,
    },

    // ── Register Row ─────────────────────────────────
    registerRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    registerText: {
        fontSize: 14,
        color: TEXT_MUTED,
    },
    registerLink: {
        fontSize: 14,
        fontWeight: "800",
        color: YELLOW,
    },
});
