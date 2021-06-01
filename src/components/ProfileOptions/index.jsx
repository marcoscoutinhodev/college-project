import React from "react";
import {
    Text,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import style from "./style";

export default function ProfileOption({ text, navigation, changeTo }) {
    return(
        <TouchableOpacity style={style.button} onPress={ () => navigation.navigate(changeTo) }>
            <Text style={style.text}>{text}</Text>
            <AntDesign name="rightcircle" style={{ fontSize: 26 }}/>
        </TouchableOpacity>
    );
}