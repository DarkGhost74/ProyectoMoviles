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
import { useNavigation } from "@react-navigation/native"; //NAVEGACION



export default function OrderDetailsScreen() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <SafeAreaView
                style={{flex: 1, backgroundColor: "#0B0F14" }}
                edges={["top", "bottom"]}
            >
                <View style={{
                    flexDirection:"row",
                    alignItems: "center",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    backgroundColor: "#0B0F14",
                }}>
                    <Pressable 
                        onPress={() => navigation.goBack()}
                        hitSlop={12}
                        style={{ padding: 1}}
                        >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={24}
                            color={"#ffff"}                       
                        />           
                    </Pressable>
                    <Text
                    style={{
                        color: "#ffff",
                        fontSize: 24,
                        fontWeight: "bold",
                        marginLeft: 20,

                    }}                  //PONER EL NUMERO DE ORDEM               
                    >
                        Orden #

                    </Text>                    
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: "#ccc",
                    marginVertical: 10,
                }} >

                </View>
                <ScrollView>
                    
                    
                </ScrollView>


            </SafeAreaView>

        </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F1115",
        paddingHorizontal: 18,
    },
})