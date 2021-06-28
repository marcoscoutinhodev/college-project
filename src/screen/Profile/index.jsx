import React, { useState } from "react";
import {
    SafeAreaView,
    ImageBackground,
    View,
    Text,
    Switch,
} from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar";

import ProfileOptions from "../../components/ProfileOptions";

import Logo from "../../../assets/logo_opacity.jpeg";

import style from "./style";

export default function Profile({route, navigation}) {
    const {
        name,
        email,
        password,
        gender,
        weight,
        height,
        lang,
    } = route.params;

    const [ notification, setNotification ] = useState(false);
    const [ backUp, setBackUp ] = useState(false);

    const waterPerDay = weight * 35;

    let langOption = {};

    switch (lang) {
        case "english":
            langOption = {
                waterInfo: `You need ${waterPerDay} liters of water per day`,
                accSet: "Account Settings",
                editProf: "Edit Profile",
                physcInf: "Physical Information",
                termsCond: "Terms and Conditions",
                notif: "Notification",
                bkUp: "Back Up",
            }
            break;

        case "portugues":
            langOption = {
                waterInfo: `Você precisa de ${waterPerDay} litros de água por dia`,
                accSet: "Configuracao de Conta",
                editProf: "Editar Perfil",
                physcInf: "Informacoes Fisicas",
                termsCond: "Termos e Condicoes",
                notif: "Notificacao",
                bkUp: "Back Up",
            }
            break;

        case "espanol":
            langOption = {
                waterInfo: `Necesitas ${waterPerDay} litros de agua al día`,
                accSet: "Configuraciones de la cuenta",
                editProf: "Editar perfil",
                physcInf: "Información Física",
                termsCond: "Términos y condiciones",
                notif: "Notificación",
                bkUp: "Back Up",
            }
            break;
        default:
            langOption = {
                accSet: "Account Settings",
                editProf: "Edit Profile",
                physcInf: "Physical Information",
                termsCond: "Terms and Conditions",
                notif: "Notification",
                bkUp: "Back Up",
            }
            break;
    }

    return (
        <SafeAreaView style={style.container}>
            <ImageBackground
                source={Logo}
                style={style.bgImage}
            >
                <View style={style.userInfo}>
                    <UserAvatar
                        userName={name}
                        size={200}
                        backgroundColor="#0074c7"
                        textColor="#FFF"
                    />
                    <Text style={style.userName}>{name}</Text>
                </View>

                <Text style={style.waterInfo}>
                    {langOption.waterInfo}
                </Text>

                <View style={style.accountSet}>
                    <Text style={style.text}>{langOption.accSet}</Text>
                    <View style={style.option}>
                        <ProfileOptions
                            text={langOption.editProf}
                            navigation={ navigation }
                            changeTo="SignUp"
                            props={{
                                lang
                            }}
                        />
                        <ProfileOptions
                            text={langOption.physcInf}
                            navigation={ navigation }
                            changeTo="SignUpInformation"
                            props={{
                                name,
                                email,
                                password,
                                lang
                            }}
                        />
                        <ProfileOptions 
                            text={langOption.termsCond}
                            navigation={ navigation }
                            changeTo="TermAndCondition"
                            props={{
                                lang
                            }}
                        />
                    </View>
                    
                    <View style={style.switch}>
                        <Text style={style.text}>{langOption.notif}</Text>
                        <Switch 
                            value={ notification }
                            onValueChange={ () => setNotification(!notification) }
                            trackColor={{ true: "#0074c7", false: "grey" }}
                            thumbColor={ notification ? "#0074c7" : "white" }
                        />
                    </View>

                    <View style={style.switch}>
                        <Text style={style.text}>Back Up</Text>
                        <Switch 
                            value={ backUp }
                            onValueChange={ () => setBackUp(!backUp) }
                            trackColor={{ true: "#0074c7", false: "grey" }}
                            thumbColor={ backUp ? "#0074c7" : "white" }
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}