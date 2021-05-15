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
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 10,
    },
    input: {
        width: "70%",
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
    btnLogIn: {
        width: "70%",
        backgroundColor: "#0074c7",
        height: 38,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 50,
    },
    text: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFF",
        textTransform: "uppercase",
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