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
    } = route.params;

    const [ notification, setNotification ] = useState(false);
    const [ backUp, setBackUp ] = useState(false);

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

                <View style={style.accountSet}>
                    <Text style={style.text}>Account Settings</Text>
                    <View style={style.option}>
                        <ProfileOptions
                            text="Edit Profile"
                            navigation={ navigation }
                            changeTo="SignUp"
                        />
                        <ProfileOptions
                            text="Physical Information"
                            navigation={ navigation }
                            changeTo="SignUpInformation"
                            props={{
                                name,
                                email,
                                password
                            }}
                        />
                        <ProfileOptions 
                            text="Terms and Conditions" 
                            navigation={ navigation }
                            changeTo="TermAndCondition"
                        />
                    </View>
                    
                    <View style={style.switch}>
                        <Text style={style.text}>Notifications</Text>
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