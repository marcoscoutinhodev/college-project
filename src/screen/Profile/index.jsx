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

export default function Profile({navigation}) {
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
                        userName="User Name"
                        size={200}
                        backgroundColor="#0074c7"
                        textColor="#FFF"
                    />
                    <Text style={style.userName}>User Name</Text>
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
                        />
                    </View>

                    <View style={style.switch}>
                        <Text style={style.text}>Back Up</Text>
                        <Switch 
                            value={ backUp }
                            onValueChange={ () => setBackUp(!backUp) }
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}