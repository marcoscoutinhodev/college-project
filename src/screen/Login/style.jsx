import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },
    form: {
        flex: 1,
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 10,
    },
    input: {
        width: "100%",
        marginTop: 50,
        textAlign: "center",
    },
    icon: {
        fontSize: 18,
        position: "absolute",
    },
    emailView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#555",
    },
    passwordView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#555",
    },
    footer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
    },
    btnFooter: {
        backgroundColor: "#0074c7",
        height: 28,
        textAlign: "center",
        borderRadius: 20,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    footerText: {
        fontSize: 16,
        textAlign: "center",
        color: "#FFF",
    },
});

export default Style;