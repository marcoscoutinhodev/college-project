import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    content: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    btnBack: {
        position: "absolute",
        left: 20,
        top: 60,
    },
    back: {
        fontSize: 36,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    form: {
        width: "70%",
        alignItems: "center",
        marginTop: 20,
    },
    input: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderColor: "#555",
        marginVertical: 15,
    },
    icon: {
        fontSize: 18,
    },
    textInput: {
        width: "100%",
        textAlign: "center",
    },
    terms: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    footer: {
        position: "absolute",
        bottom: 20,
        backgroundColor: "#0074c7",
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    txtHelp: {
        color: "#FFF",
        fontSize: 16,
    },
});

export default Style;