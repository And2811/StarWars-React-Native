import React from "react"; 
import { View, Text, Image } from "react-native";
import Luke from '../../assets/lucas-skywalker.jpg';
import styles from './style';
export default function Trilogia2(){
    return(
    <View style={styles.container}>
        <Text style={styles.textTitulo}>A história de Luke Skywalker</Text>

        <Image style={styles.img} source={Luke}/>

        <Text style={styles.text}>Trilogia original. Episódios IV, V e VI</Text>

        <Text style={styles.text}> Essa foi primeira trilogia a surgir porém sua história se passa após a trilogia prequela.</Text>

        <Text style={styles.text}>Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorro da princesa Leia e se batalha com o grande vilão Darth Vader.</Text>

    </View>
    )
}