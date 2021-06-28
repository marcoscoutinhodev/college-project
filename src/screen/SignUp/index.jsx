import React, { useState } from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import {
    Ionicons,
    MaterialIcons,
    FontAwesome5,
    MaterialCommunityIcons
} from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import style from "./style";

import Logo from "../../../assets/logo.jpg";
import Button from "../../components/Button";

export default function SignUp({ route, navigation }) {
    const lang = route.params.lang;
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ agreeTerms, setAgreeTerms ] = useState(false);

    const handleNameInput = (value) => setName(value);
    const handleEmailInput = (value) => setEmail(value);
    const handlePasswordInput = (value) => setPassword(value);
    const handleTermsButton = () => setAgreeTerms(!agreeTerms);

    const isFormComplete = !!(name && email && password && agreeTerms);

    let langOption = {};

    switch (lang) {
        case "english":
            langOption = {
                fullName: "Full Name",
                email: "Email",
                password: "Password",
                agreeTerms: "I agree to the terms and conditions",
                next: "Next",
                termsCond: "Terms & Conditions",
            }
            break;

        case "portugues":
            langOption = {
                fullName: "Nome Completo",
                email: "Email",
                password: "Senha",
                agreeTerms: "Eu concordo com os termos e condicoes",
                next: "Proximo",
                termsCond: "Termos & Condicoes",
            }
            break;

        case "espanol":
            langOption = {
                fullName: "Nombre Completo",
                email: "Email",
                password: "Contraseña",
                agreeTerms: "Estoy de acuerdo con los términos y condiciones",
                next: "Próximo",
                termsCond: "Términos y condiciones",
            }
            break;
    }

    return (
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

                        <View style={style.form}>
                            <View style={[
                                style.input,
                                !!name ? { borderColor: "#0074c7" } : null
                            ]}>
                                <MaterialIcons name="drive-file-rename-outline" style={style.icon} />
                                <TextInput 
                                    style={style.textInput}
                                    placeholder={langOption.fullName}
                                    onChangeText={ handleNameInput }
                                />
                            </View>

                            <View style={[
                                style.input,
                                !!email ? { borderColor: "#0074c7" } : null
                            ]}>
                                <FontAwesome5 name="user-alt" style={style.icon} />
                                <TextInput 
                                    style={style.textInput}
                                    placeholder={langOption.email}
                                    onChangeText={ handleEmailInput }
                                />
                            </View>

                            <View style={[
                                style.input,
                                !!password ? { borderColor: "#0074c7" } : null
                            ]}>
                                <MaterialCommunityIcons name="onepassword" style={style.icon} />
                                <TextInput
                                    style={style.textInput}
                                    placeholder={langOption.password}
                                    onChangeText={ handlePasswordInput }
                                    secureTextEntry={ true }
                                />
                            </View>
                            
                            <View style={style.terms}>
                                <Checkbox 
                                    value={ agreeTerms }
                                    onValueChange={ handleTermsButton }
                                    color={ agreeTerms ? "#0074c7" : null }
                                />
                                <Text style={{ fontSize: 16 }}>{langOption.agreeTerms}</Text>
                            </View>

                            <Button
                                text={langOption.next}
                                isFilled={ isFormComplete }
                                navigation={navigation}
                                changeTo="SignUpInformation"
                                params={{
                                    name,
                                    email,
                                    password,
                                    lang,
                                }}
                            />
                        </View>

                        <TouchableOpacity
                            style={style.footer}
                            onPress={ () => navigation.navigate("TermAndCondition", { lang }) }
                        >
                            <Text style={style.txtHelp}>{langOption.termsCond}</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}