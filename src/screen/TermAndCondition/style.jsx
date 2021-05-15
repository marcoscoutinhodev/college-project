import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    scrollView: {
        width: "100%",
    },
    content: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    btnBack: {
        width: "100%",
        alignItems: "flex-start",
        marginTop: 25,
        marginLeft: 40,
        marginBottom: 10,
    },
    back: {
        fontSize: 36,
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 15,
        marginBottom: 30,
    },  
    text: {
        width: "80%",
        fontSize: 18,
        textAlign: "center",
        color: "#000",
    }
});

export default Style;