import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PRIMARY = "#F5C518"; // amarillo
const BACKGROUND = "#1E2A38"; // azul oscuro
const CARD_BG = "#223246";

type MenuCardProps = {
  icon: React.ReactNode;
  label: string;
};

const MenuCard: React.FC<MenuCardProps> = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      {icon}
      <Text style={styles.cardText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function CarShopScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Hola, <Text style={styles.bold}>Chalino Sánchez</Text>
          </Text>
          <Text style={styles.title}>Car Shop Service</Text>
          <View style={styles.divider} />
        </View>

        {/* Grid */}
        <View style={styles.grid}>
          <MenuCard
            icon={<Feather name="tool" size={40} color={PRIMARY} />}
            label="ÓRDENES DE SERVICIO"
          />

          <MenuCard
            icon={<Feather name="user" size={40} color={PRIMARY} />}
            label="CLIENTES"
          />

          <MenuCard
            icon={<Feather name="archive" size={40} color={PRIMARY} />}
            label="HISTORIAL"
          />

          <MenuCard
            icon={<Feather name="dollar-sign" size={40} color={PRIMARY} />}
            label="PAGOS"
          />

          <MenuCard
            icon={
              <MaterialCommunityIcons name="disc" size={40} color={PRIMARY} />
            }
            label="PIEZAS"
          />

          <MenuCard
            icon={<Ionicons name="bar-chart" size={40} color={PRIMARY} />}
            label="DASHBOARD"
          />

          <MenuCard
            icon={<Feather name="settings" size={40} color={PRIMARY} />}
            label="CONFIGURACIÓN"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <Ionicons name="home-outline" size={26} color={PRIMARY} />
        <Ionicons name="search-outline" size={26} color="#9AA4B2" />

        {/* Floating Button */}
        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fab}>
            <Ionicons name="add" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <Ionicons name="notifications-outline" size={26} color="#9AA4B2" />
        <Ionicons name="menu-outline" size={26} color="#9AA4B2" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  greeting: {
    color: "#C5CDD8",
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  title: {
    color: PRIMARY,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  divider: {
    height: 2,
    backgroundColor: PRIMARY,
    marginTop: 10,
    width: "100%",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  card: {
    width: "48%",
    aspectRatio: 1,
    backgroundColor: CARD_BG,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  cardText: {
    color: PRIMARY,
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  bottomBar: {
    height: 70,
    backgroundColor: "#0F1A28",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  fabContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: 25,
  },
  fab: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
});
