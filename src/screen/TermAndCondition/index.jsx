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

export default function TermsAndConditions({ navigation }) {
    const backScreen = () => navigation.goBack();

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
                        Política de privacidade e Termos e Condições
                        {"\n"}{"\n"}
                        A equipe Gout respeita a privacidade individual e valoriza a confiança dos seus utilizadores, clientes e parceiros. Como tal, estamos empenhados em proteger a informação pessoal que venha a partilhar connosco. Esta página descreve como fazemos uso dessa informação.
                        {"\n"}{"\n"}
                        Recepção de dados
                        Ao ceder-nos a sua informação pessoal, voluntariamente, ela apenas será acedida pelos nossos serviços. É considerado informação pessoal tudo o que possa ser usado para identificar um utilizador como, por exemplo, nome, endereço electrónico, altura, peso, idade, ou demais dados necessários para que possamos prestar o serviço solicitado ou até melhorar o funcionamento do aplicativo. Não registamos automaticamente informação pessoal, incluindo o seu endereço de IP. O registo dos endereços de IP que consultam o Site servem apenas para efeito de análise estatística de tráfego. Os dados fornecidos não serão transferidos para terceiros sem o seu consentimento prévio, mas podem ser usados dentro do aplicativo ou por outra empresa actuando como agente da editora para fins de processamento.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}