import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#EEE"
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    userInfo: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    userName: {
        fontSize: 32,
        fontWeight: "bold",
    },
    accountSet: {
        width: "80%",
    },
    text: {
        fontSize: 26,
        fontWeight: "bold",
    },
    option: {
        width: "100%",
        height: 150,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    switch: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
    },
});

export default style;