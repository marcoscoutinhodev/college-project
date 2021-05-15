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

import logo from "../../../assets/logo.jpg"

export default function SignUp({ navigation }) {
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ agreeTerms, setAgreeTerms ] = useState(false);

    const handleNameInput = (value) => setName(value);
    const handleEmailInput = (value) => setEmail(value);
    const handlePasswordInput = (value) => setPassword(value);
    const handleTermsButton = () => setAgreeTerms(!agreeTerms);
    const termAndConditionScreen = () => navigation.navigate("TermAndCondition");
    const backScreen = () => navigation.goBack();

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
                            onPress={ backScreen }
                        >
                            <Ionicons name="arrow-back" style={style.back}/>
                        </TouchableOpacity>

                        <Image
                            source={logo}
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
                                    placeholder="Full Name"
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
                                    placeholder="Email"
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
                                    placeholder="Password"
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
                                <Text>I agree to the terms and conditions</Text>
                            </View>

                            <TouchableOpacity 
                                style={[
                                    style.signup,
                                    agreeTerms ? { backgroundColor: "#0074c7" } : { backgroundColor: "#555" }
                                ]}
                                disabled={ !agreeTerms }
                            >
                                <Text style={style.txtSignUp}>Sign up</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={style.footer}
                            onPress={ termAndConditionScreen }
                        >
                            <Text style={style.txtHelp}>Terms {'&'} Conditions</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}