import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BottomNav from "../components/BottomNav";

const months = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

export default function AgendaScreen() {

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [showCalendar, setShowCalendar] = useState(true);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const repairs = {
    5: [
      { time: "09:00 AM", car: "Toyota Corolla", plate: "ABC-1234", service: "Oil Change & Filter" },
      { time: "11:30 AM", car: "Honda Civic", plate: "XYZ-9876", service: "Brake Pad Replacement" }
    ],
    10: [
      { time: "02:00 PM", car: "Ford F-150", plate: "TRK-5512", service: "Wheel Alignment" }
    ]
  };

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(1);
  };

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(1);
  };

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container} edges={["top"]}>

        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

          {/* HEADER */}
          <View style={styles.headerRow}>
            <Text style={styles.headerTitle}>Schedule</Text>
            <Pressable style={styles.plusButton}>
              <Feather name="plus" size={20} color="#FFD43B" />
            </Pressable>
          </View>

          {/* Navegacion del mes */}
          <View style={styles.monthRow}>
            <Pressable onPress={goPrevMonth}>
              <Feather name="chevron-left" size={22} color="#fff" />
            </Pressable>

            <Pressable onPress={() => setShowCalendar(!showCalendar)}>
              <Text style={styles.monthText}>
                {months[currentMonth]} {currentYear}
              </Text>
            </Pressable>

            <Pressable onPress={goNextMonth}>
              <Feather name="chevron-right" size={22} color="#fff" />
            </Pressable>
          </View>

          {/* CALENDAR GRID */}
          {showCalendar && (
            <View style={styles.calendarGrid}>
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const isSelected = selectedDay === day;

                return (
                  <Pressable
                    key={day}
                    style={[
                      styles.dayBox,
                      isSelected && styles.selectedDay
                    ]}
                    onPress={() => {
                      setSelectedDay(day);
                      setShowCalendar(false);
                    }}
                  >
                    <Text style={[
                      styles.dayText,
                      isSelected && { color: "#000" }
                    ]}>
                      {day}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          )}

         
          <Text style={styles.repairsTitle}>
            Ordenes para {months[currentMonth]} {selectedDay}
          </Text>

      
          {(repairs[selectedDay] || []).length === 0 ? (
            <Text style={styles.noRepairs}>
              No hay ordenes programadas para este día.
            </Text>
          ) : (
            repairs[selectedDay].map((item, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.time}>{item.time}</Text>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.car}>{item.car}</Text>
                  <Text style={styles.sub}>
                    {item.service}
                  </Text>
                  <Text style={styles.plate}>
                    {item.plate}
                  </Text>
                </View>
              </View>
            ))
          )}

        </ScrollView>

        <BottomNav active="Agenda" />

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1115",
    paddingHorizontal: 18,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },

  headerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },

  plusButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#1A1D24",
  },

  monthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  monthText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },

  dayBox: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  selectedDay: {
    backgroundColor: "#FFD43B",
    borderRadius: 8,
  },

  dayText: {
    color: "#fff",
    fontSize: 14,
  },

  repairsTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
  },

  noRepairs: {
    color: "#888",
    fontSize: 14,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#1A1D24",
    padding: 15,
    borderRadius: 16,
    marginBottom: 15,
  },

  time: {
    color: "#FFD43B",
    fontWeight: "bold",
    fontSize: 14,
  },

  car: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  sub: {
    color: "#8B90A0",
    fontSize: 12,
    marginTop: 4,
  },

  plate: {
    color: "#FFD43B",
    fontSize: 11,
    marginTop: 4,
  },
});