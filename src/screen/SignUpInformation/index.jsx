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
    Alert,
} from  "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Logo from "../../../assets/logo.jpg";

import style from "./style";

export default function SignUpInformation({ route, navigation }) {
    const { name, email, password, lang } = route.params || {};

    const [ genderOption, setGenderOption ] = useState();
    const [ weight, setWeight ] = useState();
    const [ height, setHeight ] = useState();

    const handleInputWeight = (value) => setWeight(value);
    const handleInputHeight = (value) => setHeight(value);

    const isFormComplete = !!(genderOption && weight && height);

    async function saveData(obj) {
        await AsyncStorage.setItem("user", JSON.stringify(obj));

        Alert.alert(langOption.accCreated);

        navigation.navigate("Login");
    }

    let langOption = {};

    switch (lang) {
        case "english":
            langOption = {
                selectGender: "Select your gender bellow",
                male: "Male",
                female: "Female",
                weight: "Type your weight",
                height: "Type your height",
                signUp: "Sign Up",
                accCreated: "Account created successfully",
            }
            break;

        case "portugues":
            langOption = {
                selectGender: "Selecione seu genero abaixo",
                male: "Masculino",
                female: "Feminino",
                weight: "Digite seu peso",
                height: "Digite sua altura",
                signUp: "Criar Conta",
                accCreated: "Conta criada com sucesso",
            }
            break;

        case "espanol":
            langOption = {
                selectGender: "Seleccione su género a continuación",
                male: "Hombre",
                female: "Mujer",
                weight: "Escriba su peso",
                height: "Escriba su altura",
                signUp: "Inscribirse",
                accCreated: "Cuenta creada con éxito",
            }
            break;
    }

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
                            source={Logo}
                            style={style.image}
                        />

                        <View style={style.inputs}>
                            <View style={style.selectGender}>
                                <Text style={style.selectTitle}>{langOption.selectGender}</Text>
                                <View style={style.gender}>
                                    <TouchableOpacity
                                        style={[
                                            style.genderButton,
                                            genderOption === "male" ?
                                                { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                        ]}
                                        onPress={ () => setGenderOption("male") }    
                                    >
                                        <Text style={style.genderTitle}>{langOption.male}</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[
                                            style.genderButton,
                                            genderOption === "female" ?
                                                { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                        ]}
                                        onPress={ () => setGenderOption("female") }    
                                    >
                                        <Text style={style.genderTitle}>{langOption.female}</Text>
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
                                    placeholder={langOption.weight}
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
                                    placeholder={langOption.height}
                                    keyboardType="numeric"
                                    onChangeText={ handleInputHeight }
                                />
                            </View>

                            <TouchableOpacity
                                style={[
                                    style.button,
                                    isFormComplete ? { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                ]}
                                disabled={ !isFormComplete }
                                onPress={() => {
                                    const userInfo = {
                                        name,
                                        email,
                                        password,
                                        genderOption,
                                        weight,
                                        height,
                                    };

                                    saveData(userInfo);
                                }}
                            >
                                <Text style={style.text}>{langOption.signUp}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}