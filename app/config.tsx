import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppConfig = () => {
    return (
        <View style={style.conteiner}>
            <TouchableOpacity style={style.buttonStyle}>
                <Text style={style.textPerson}>Perfil </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonStyle}>
                <Text style={style.textPerson}>Segurança</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonStyle}>
                <Text style={style.textPerson}>Idioma</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonStyle}>
                <Text style={style.textPerson}>Trocar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonStyle}>
                <Text style={{ color: 'red' }}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}


export default function Config() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00171f' }}>
            <AppConfig />
        </SafeAreaView>

    )

}

const style = StyleSheet.create({
    conteiner: {

        flexDirection: 'column',
    },
    textPerson: {
        color: 'white',
        fontSize:15
    },
    buttonStyle: {
        borderBottomColor: '#C0FF00',
        borderBottomWidth: 2,
    }
})