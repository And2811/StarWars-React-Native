import React from "react"; 
import { View, Text, Image } from "react-native";
import DartVader from '../../assets/darth-vader.jpeg'
import styles from './style';
export default function Trilogia1(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitulo}>A história do Darth Vader</Text>

            <Image style={styles.img} source={DartVader}/>

            <Text style={styles.text}>Trilogia prequela. Episódios I, II e III</Text>

            <Text style={styles.text}>Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem crinológica da série Star Wars. Nela é contada a história do grande vilão Darth Vader.</Text>

            <Text style={styles.text}>Através dessa trilogia você vai saber de onde ele veio e quem ele é.</Text>

        </View>
    )
}