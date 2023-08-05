import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Login = () => {
    return (
        <View style={styles.container}>
            <Text>Olá</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
});

export default Login;