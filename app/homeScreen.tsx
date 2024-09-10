import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Heald from "../assets/images/heald.png"
import Passos from "../assets/images/passos.png"
import Fogo from "../assets/images/fogo.png"
import Perfil from "../assets/images/perfil.png"
import Perna from "../assets/images/perna.jpg"
import Costas from "../assets/images/costas.jpg"
import Braco from "../assets/images/braco.jpg"
import Plano from '../assets/images/prancheta.png'
import Gpizza from '../assets/images/grafico.png'
import Status from '../assets/images/layout.png'
import Config from '../assets/images/config.png'
import Peitoral from '../assets/images/peitoral.jpg'
import { Link } from "expo-router";

const Saudacao = ({ }) => {
    return (
      <View style={{ flexDirection: 'row', }}>
        <View style={{ margin: 10 }}>
          <Image source={Perfil}></Image>
        </View>
        <View>
          <Text style={{ color: 'white' }}>
            Bem vindo de volta,
          </Text>
          <Text style={{ color: 'white' }}>
            Roberto!
          </Text>
        </View>
      </View>
    )
  }
  
  const Card = () => {
    return (
      <View style={style.conteiner}>
        <View style={style.card}>
          {/* config icon */}
          <View style={{ alignItems: 'center' }}>
            <Image source={Passos} />
          </View>
          {/* config resultado */}
          <View>
            <Text style={style.testInfo}>
              1900KM
            </Text>
          </View>
          {/* config nome */}
          <View>
            <Text style={style.testInfo}>
              Passos
            </Text>
          </View>
  
        </View>
  
        <View style={style.card}>
          {/* config icon */}
          <View style={{ alignItems: 'center' }}>
            <Image source={Fogo} />
          </View>
          {/* config resultado */}
          <View>
            <Text style={style.testInfo}>
              200 Kcal
            </Text>
          </View>
          {/* config nome */}
          <View>
            <Text style={style.testInfo}>
              Calorias
            </Text>
          </View>
        </View>
  
        <View style={style.card}>
          {/* config icon */}
          <View style={{ alignItems: 'center' }}>
            <Image source={Heald} />
          </View>
          {/* config resultado */}
          <View>
            <Text style={style.testInfo}>
              80 BPM
            </Text>
          </View>
          {/* config nome */}
          <View>
            <Text style={style.testInfo}>
              Batimentos
            </Text>
          </View>
        </View>
      </View>
  
    )
  }
  
  const InfoTreino = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'white', marginTop: 10 }}>
            Treinos
          </Text>
        </View>
        <View style={style.cardTreino}>
          <Image style={style.configImg} source={Perna} />
          <Text style={style.textoTreino}>Pernas </Text>
        </View>
        <View style={style.cardTreino}>
          <Image style={style.configImg} source={Costas} />
          <Text style={style.textoTreino}>Costas </Text>
        </View>
        <View style={style.cardTreino}>
          <Image style={style.configImg} source={Braco} />
          <Text style={style.textoTreino}>Braços </Text>
        </View>
        <View style={style.cardTreino}>
          <Image style={style.configImg} source={Peitoral} />
          <Text style={style.textoTreino}>Peitoral</Text>
        </View>
      </View>
    )
  }
  
  const Footer = () => {
    return (
      <View style={style.footer}>
        <View>
          <Image source={Status} />
        </View>
        <View>
          <Image source={Gpizza} />
        </View>
        <View>
          <Image source={Plano} />
        </View>
        <View>
            <Link push href={"./config"}>
                <Image source={Config} />
            </Link>
        </View>
      </View>
    )
  }



export default function HomeScreen(){
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#00171f' }}>

        <ScrollView>
          <Saudacao />
          <Card />
          <InfoTreino />
          <Footer />
        </ScrollView>
  
      </SafeAreaView>
  
    )
}
const style = StyleSheet.create({
    card: {
      backgroundColor: '#2B2B2B',
      height: 100,
      width: 120,
      borderRadius: 10,
      justifyContent: 'center'
    },
    conteiner: {
      justifyContent: 'space-evenly',
      flexDirection: 'row'
    },
    testInfo: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center'
    },
    configImg: {
      height: 200,
      width: 367,
      borderRadius: 10,
    },
    cardTreino: {
      backgroundColor: '#2B2B2B',
      height: 200,
      width: 360,
      marginTop: 10,
      borderRadius: 10,
    },
    footer: {
      backgroundColor: 'rgba(43,43,43,0.5)',
      height: 60,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 10,
      color: 'white',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    textoTreino:{
      color:'#C0FF00',
      position:'absolute',
      fontSize:30,
      marginTop:85,
      marginLeft:10
    }
  
  })