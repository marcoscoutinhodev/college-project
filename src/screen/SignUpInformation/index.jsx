import React, { useState } from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Image,
    Text,
    TextInput,
    Platform,
    TouchableOpacity,
} from  "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import logo from "../../../assets/logo.jpg"

import style from "./style";

export default function SignUpInformation({ route, navigation }) {
    const { name, email, password } = route.params || {};

    const [ genderOption, setGenderOption ] = useState();
    const [ weight, setWeight ] = useState();
    const [ height, setHeight ] = useState();

    const handleInputWeight = (value) => setWeight(value);
    const handleInputHeight = (value) => setHeight(value);

    const isFormComplete = !!(genderOption && weight && height);

    return(
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView
                style={style.container}
                behavior={ Platform.OS === "ios" ? "padding" : "height" }    
            >
                <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                    <View style={style.content}>
                        <TouchableOpacity
                            style={style.btnBack}
                            onPress={ () => navigation.goBack() }
                        >
                            <Ionicons name="arrow-back" style={style.back}/>
                        </TouchableOpacity>

                        <Image
                            source={logo}
                            style={style.image}
                        />

                        <View style={style.inputs}>
                            <View style={style.selectGender}>
                                <Text style={style.selectTitle}>Select your gender bellow</Text>
                                <View style={style.gender}>
                                    <TouchableOpacity
                                        style={[
                                            style.genderButton,
                                            genderOption === "male" ?
                                                { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                        ]}
                                        onPress={ () => setGenderOption("male") }    
                                    >
                                        <Text style={style.genderTitle}>Male</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[
                                            style.genderButton,
                                            genderOption === "female" ?
                                                { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                        ]}
                                        onPress={ () => setGenderOption("female") }    
                                    >
                                        <Text style={style.genderTitle}>Female</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={[
                                style.viewInput,
                                weight ? { borderColor: "#0074c7" } : { borderColor: "#555" }
                            ]}>
                                <MaterialCommunityIcons name="human-male-height" style={style.icon} />
                                <TextInput
                                    style={style.input}
                                    placeholder="Type your weight"
                                    keyboardType="numeric"
                                    onChangeText={ handleInputWeight }
                                />
                            </View>

                            <View style={[
                                style.viewInput,
                                height ? { borderColor: "#0074c7" } : { borderColor: "#555" }
                            ]}>
                                <MaterialCommunityIcons name="human-male-height-variant" style={style.icon} />
                                <TextInput
                                    style={style.input}
                                    placeholder="Type your height"
                                    keyboardType="numeric"
                                    onChangeText={ handleInputHeight }
                                />
                            </View>

                            <TouchableOpacity style={[
                                style.signup,
                                isFormComplete ?
                                    { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                ]}
                                disabled={ !isFormComplete }
                            >
                                <Text style={style.signupText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}