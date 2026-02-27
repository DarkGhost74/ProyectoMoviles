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
const weekDays = ["L","M","M","J","V","S","D"];

export default function AgendaScreen() {

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [filterType, setFilterType] = useState("day");
  const [showCalendar, setShowCalendar] = useState(true);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
 const repairs = [
  {
    id: 1,
    fecha: "2026-02-05",
    hora: "09:00 AM",
    servicio: "Cambio de aceite",
    cliente: "Juan Perez",
    placa: "ABC-1234"
  },
  {
    id: 2,
    fecha: "2026-02-05",
    hora: "11:30 AM",
    servicio: "Cambio de balatas",
    cliente: "Carlos Lopez",
    placa: "XYZ-9876"
  },
  {
    id: 3,
    fecha: "2026-02-10",
    hora: "02:00 PM",
    servicio: "Alineación",
    cliente: "Luis Torres",
    placa: "TRK-5512"
  }
];

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
const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2,"0")}-${String(selectedDay).padStart(2,"0")}`;

let filteredRepairs = repairs;

if (filterType === "day") {
  filteredRepairs = repairs.filter(r => r.fecha === formattedDate);
}

if (filterType === "month") {
  filteredRepairs = repairs.filter(r => 
    r.fecha.startsWith(`${currentYear}-${String(currentMonth + 1).padStart(2,"0")}`)
  );
}

if (filterType === "week") {
  const selectedDate = new Date(formattedDate);
  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  filteredRepairs = repairs.filter(r => {
    const repairDate = new Date(r.fecha);
    return repairDate >= startOfWeek && repairDate <= endOfWeek;
  });
}
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container} edges={["top"]}>

        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>

          {/* HEADER */}
          <View style={styles.headerRow}>
            
            <Text style={styles.headerTitle}>Órdenes programadas</Text>
            
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
          {/* WEEK DAYS */}
<View style={styles.weekRow}>
  {weekDays.map((day, index) => (
    <Text key={index} style={styles.weekDayText}>
      {day}
    </Text>
  ))}
</View>
            <View style={styles.calendarGrid}>
             {[
  ...Array(startOffset).fill(null),
  ...Array(daysInMonth).keys()
].map((value, i) => {

  if (value === null) {
    return <View key={i} style={styles.dayBox} />;
  }

  const day = value + 1;
  const isSelected = selectedDay === day;

  return (
    <Pressable
      key={i}
      style={[
        styles.dayBox,
        isSelected && styles.selectedDay
      ]}
      onPress={() => setSelectedDay(day)}
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
          <View style={styles.filterRow}>
  {["day","week","month"].map(type => (
    <Pressable
      key={type}
      onPress={() => setFilterType(type)}
      style={[
        styles.filterButton,
        filterType === type && styles.activeFilter
      ]}
    >
      <Text
        style={[
          styles.filterText,
          filterType === type && { color: "#000" }
        ]}
      >
        {type === "day" ? "Día" : type === "week" ? "Semana" : "Mes"}
      </Text>
    </Pressable>
  ))}
</View>

         
          <Text style={styles.repairsTitle}>
            Ordenes para {months[currentMonth]} {selectedDay}
          </Text>

      
          {filteredRepairs.length === 0 ? (
            <Text style={styles.noRepairs}>
              No hay ordenes programadas para este día.
            </Text>
          ) : (
            filteredRepairs.map((item) => (
  <View key={item.id} style={styles.card}>
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
  filterRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
},

filterButton: {
  paddingVertical: 8,
  paddingHorizontal: 20,
  backgroundColor: "#1A1D24",
  borderRadius: 20,
},

activeFilter: {
  backgroundColor: "#FFD43B",
},

filterText: {
  color: "#fff",
  fontSize: 13,
},
weekRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 10,
},

weekDayText: {
  width: "14.28%",
  textAlign: "center",
  color: "#8B90A0",
  fontSize: 12,
  fontWeight: "600",
},
});
