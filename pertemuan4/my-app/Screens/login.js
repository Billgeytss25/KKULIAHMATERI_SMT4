import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Login(){
    return (
        <View style={Style.container}>
            <Text>Login</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {

    },
});