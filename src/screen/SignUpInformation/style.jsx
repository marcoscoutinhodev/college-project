import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "space-around",
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
    content: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
    },
    inputs: {
        width: "70%",
        alignItems: "center",
        marginTop: 30,
    },
    selectGender: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },
    selectTitle: {
        fontSize: 18,
        textTransform: "uppercase",
        textDecorationLine: "underline",
        textAlign: "center",
    },
    gender: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 15,
    },
    genderButton: {
        width: "40%",
        backgroundColor: "#555",
        padding: 10,
        borderRadius: 15,
    },
    genderTitle: {
        color: "#FFF",
        fontSize: 20,
        textAlign: "center",
    },
    viewInput: {
        width: "100%",
        alignItems: "center",
        borderColor: "#555",
        borderBottomWidth: 2,
        marginBottom: 50,
    },
    icon: {
        position: "absolute",
        left: 10,
        bottom: 5,
        fontSize: 18,
    },
    input: {
        fontSize: 18,
        textAlign: "center",
    },
    languages: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#0074c7",
        height: 38,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: "center",
    },
    txt: {
        fontSize: 18,
        color: "#FFF",
    },
    signup: {
        backgroundColor: "#555",
        width: "50%",
        borderRadius: 15,
        marginTop: 50,
    },
    signupText: {
        color: "#FFF",
        fontSize: 26,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
    },
    button: {
        width: "100%",
        backgroundColor: "#0074c7",
        height: 38,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginTop: 50,
    },
    text: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFF",
        textTransform: "uppercase",
    },
});

export default style;