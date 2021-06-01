import React from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";

import style from "./style";

export default function Button({ text, isFilled, navigation, changeTo, params }) {
    return (
        <TouchableOpacity
            style={[
                style.button,
                isFilled ? { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
            ]}
            disabled={ !isFilled }
            onPress={ () => navigation.navigate(changeTo, params) }
        >
            <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
    );
}