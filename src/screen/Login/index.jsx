import React, { useState } from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    Keyboard,
    Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import style from "./style";

import Logo from "../../../assets/logo.jpg";

export default function Login({ navigation }) {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ isEmailFilled, setIsEmailFilled ] = useState(false);
    const [ isPasswordFilled, setIsPasswordFilled ] = useState(false);
    const [ lang, setLang ] = useState("english");

    const handleEmailInputChange = (value) => {
        setEmail(value);
        setIsEmailFilled(!!value);
    }

    const handlePasswordInputChange = (value) => {
        setPassword(value);
        setIsPasswordFilled(!!value);
    }

    const signUpScreen = () => navigation.navigate("SignUp", { lang });

    async function verifyData() {
        const userJson = await AsyncStorage.getItem("user");

        const user = JSON.parse(userJson);
        user.lang = lang;

        if(user.email === email && user.password === password) {
            navigation.navigate("Profile", user);
        } else {
            Alert.alert(langOption.invalidLogin);
        }
    }

    let langOption = {};

    switch (lang) {
        case "english":
            langOption = {
                email: "Email",
                password: "Password",
                selectLang: "Select your language",
                login: "Login",
                createAcc: "Create Account",
                invalidLogin: "Invalid Login"
            }
            break;

        case "portugues":
            langOption = {
                email: "Email",
                password: "Senha",
                selectLang: "Selecione seu idioma",
                login: "Login",
                createAcc: "Criar Conta",
                invalidLogin: "Login Invalido"
            }
            break;

        case "espanol":
            langOption = {
                email: "Email",
                password: "Contraseña",
                selectLang: "Elige tu idioma",
                login: "Acceso",
                createAcc: "Crear una cuenta",
                invalidLogin: "Ingreso invalido"
            }
            break;
    }

    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView 
                style={style.container} 
                behavior={ Platform.OS === "ios" ? "padding" : "height" }
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={style.form}>
                        <Image source={Logo} style={style.logo}/>

                        <View style={[
                            style.emailView,
                            isEmailFilled ? { borderColor: "#0074c7" } : null
                        ]}>
                            <FontAwesome5 name="user-alt" style={style.icon}/>
                            <TextInput  
                                style={style.input}
                                placeholder={langOption.email}
                                onChangeText={ handleEmailInputChange }
                            />
                        </View>
                        
                        <View style={[
                            style.passwordView,
                            isPasswordFilled ? { borderColor: "#0074c7" } : null
                        ]}>
                            <MaterialCommunityIcons name="onepassword" style={style.icon}/>
                            <TextInput  
                                style={style.input}
                                placeholder={langOption.password}
                                onChangeText={ handlePasswordInputChange }
                                secureTextEntry={password ? true : false}
                            />
                        </View>

                        <Text style={{
                            fontSize: 26,
                            color: "#000",
                            marginTop: 20,
                        }}>{langOption.selectLang}</Text>
                        <View style={[
                            style.languages,
                        ]}>
                            <TouchableOpacity
                                style={[
                                    style.btn,
                                    lang === "english" ?
                                        { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                ]}
                                onPress={ () => {
                                    setLang("english");
                                    setPassword('');
                                }}  
                            >
                                <Text style={style.txt}>English</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    style.btn,
                                    lang === "portugues" ?
                                        { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                ]}
                                onPress={ () => {
                                    setLang("portugues");
                                    setPassword('');
                                }}  
                            >
                                <Text style={style.txt}>Portugues</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    style.btn,
                                    lang === "espanol" ?
                                        { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                ]}
                                onPress={ () => {
                                    setLang("espanol");
                                    setPassword('');
                                }}  
                            >
                                <Text style={style.txt}>Espanol</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity
                            style={[
                                style.button,
                                (isEmailFilled && isPasswordFilled) ? 
                                    { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                            ]}
                            disabled={ !(isEmailFilled && isPasswordFilled) }
                            onPress={() => { verifyData() }}
                        >
                            <Text style={style.text}>{langOption.login}</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>

                <View style={style.footer}>
                    <TouchableOpacity
                        style={style.btnFooter}
                        onPress={ signUpScreen }
                    >
                        <Text style={style.footerText}>{langOption.createAcc}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}