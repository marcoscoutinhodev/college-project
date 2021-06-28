import React from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    Text
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import style from "./style";

import logo from "../../../assets/logo.jpg"

export default function TermsAndConditions({ route, navigation }) {
    const { lang } = route.params;
    const backScreen = () => navigation.goBack();

    let langOption = {};

    switch (lang) {
        case "english":
            langOption = {
                termsTitle: "Privacy Policy and Terms and Conditions",
                termsAndCond: "The Gout team respects individual privacy and values ​​the trust of its users, customers and partners. As such, we are committed to protecting the personal information you share with us. This page teaches how we make use of this information data reception When you voluntarily give us your personal information, it will only be accessed by our services. Personal information is anything that can be used to identify a user, such as name, email address, height, weight, age, or other data provided in order to provide the requested service or even improve the functioning of the application. We do not automatically record personal information, including your IP address. The registration of IP addresses that consult the Site is only for the purpose of analyzing traffic statistics. The data provided will not be transferred to third parties without your prior consent, but may be used ​​within the application or by another company acting as agent of the publisher for processing purposes."
            }
            break;

        case "portugues":
            langOption = {
                termsTitle: "Política de privacidade e Termos e Condições",
                termsAndCond: "A equipe Gout respeita a privacidade individual e valoriza a confiança dos seus utilizadores, clientes e parceiros. Como tal, estamos empenhados em proteger a informação pessoal que venha a partilhar connosco. Esta página descreve como fazemos uso dessa informação. Recepção de dados Ao ceder-nos a sua informação pessoal, voluntariamente, ela apenas será acedida pelos nossos serviços. É considerado informação pessoal tudo o que possa ser usado para identificar um utilizador como, por exemplo, nome, endereço electrónico, altura, peso, idade, ou demais dados necessários para que possamos prestar o serviço solicitado ou até melhorar o funcionamento do aplicativo. Não registamos automaticamente informação pessoal, incluindo o seu endereço de IP. O registo dos endereços de IP que consultam o Site servem apenas para efeito de análise estatística de tráfego. Os dados fornecidos não serão transferidos para terceiros sem o seu consentimento prévio, mas podem ser usados dentro do aplicativo ou por outra empresa actuando como agente da editora para fins de processamento."
            }
            break;

        case "espanol":
            langOption = {
                termsTitle: "Política de privacidad y Termos e Condições",
                termsAndCond: "El equipo de Gout respeta la privacidad individual y valora la confianza de sus usuarios, clientes y socios. Como tal, estamos comprometidos a proteger la información personal que comparte con nosotros. Esta página muestra cómo usamos esta información recibiendo datos Cuando voluntariamente nos proporciona su información personal, solo nuestros servicios accederán a ella. La información personal es todo aquello que se puede utilizar para identificar a un usuario, como nombre, dirección de correo electrónico, estatura, peso, edad u otra información facilitada con el fin de prestar el servicio solicitado o incluso mejorar el funcionamiento de la aplicación. No registramos automáticamente información personal, incluida su dirección IP. El registro de direcciones IP que consultan el Sitio tiene como única finalidad analizar estadísticas de tráfico. Los datos proporcionados no se cederán a terceros sin su consentimiento previo, pero podrán ser utilizados dentro de la aplicación o por otra empresa que actúe como agente del editor para fines de procesamiento."
            }
            break;
    }

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scrollView}>
                <View style={style.content}>
                    <TouchableOpacity
                        style={style.btnBack}
                        onPress={ backScreen }
                    >
                        <Ionicons name="arrow-back" style={style.back}/>
                    </TouchableOpacity>

                    <Image 
                        source={ logo }
                        style={style.logo}
                    />

                    <Text style={style.text}>
                        {langOption.termsTitle}
                        {"\n"}{"\n"}
                        {langOption.termsAndCond}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}