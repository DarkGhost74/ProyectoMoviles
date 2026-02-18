import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <View>
            <Text>Agenda Screen</Text>

            <Button title="Regresar" onPress={() => navigation.goBack()} />
        </View>
    );
}