import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form: {
        width: "100%",
        height: "100%",
        botto: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    formContext: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        padding: 20,
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        backgroundColor: "#ff0043",
        borderRadius: 40,
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 12,
    },
    textCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
});

export default styles;