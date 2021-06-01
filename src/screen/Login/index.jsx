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
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import style from "./style";

import Logo from "../../../assets/logo.jpg";
import Button from "../../components/Button";

export default function Login({ navigation }) {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ isEmailFilled, setIsEmailFilled ] = useState(false);
    const [ isPasswordFilled, setIsPasswordFilled ] = useState(false);

    const handleEmailInputChange = (value) => {
        setEmail(value);
        setIsEmailFilled(!!value);
    }

    const handlePasswordInputChange = (value) => {
        setPassword(value);
        setIsPasswordFilled(!!value);
    }

    const signUpScreen = () => navigation.navigate("SignUp");

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
                                placeholder="Email"
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
                                placeholder="Password"
                                onChangeText={ handlePasswordInputChange }
                                secureTextEntry={true}
                            />
                        </View>

                        <Button
                            text="Login"
                            isFilled={ (isEmailFilled && isPasswordFilled) }
                            navigation={navigation}
                            changeTo="Profile"
                        />
                    </View>
                </TouchableWithoutFeedback>

                <View style={style.footer}>
                    <TouchableOpacity
                        style={style.btnFooter}
                        onPress={ signUpScreen }
                    >
                        <Text style={style.footerText}>Create Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.btnFooter}>
                        <Text style={style.footerText}>Need Help?</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}