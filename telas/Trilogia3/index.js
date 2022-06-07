import React from "react"; 
import { View, Text, Image } from "react-native";
import Sith from '../../assets/sith.jpg';
import styles from './style';
export default function Trilogia3(){
    return(
    <View style={styles.container}>
        <Text style={styles.textTitulo}>A história de Rey</Text>

        <Image style={styles.img} source={Sith}/>

        <Text style={styles.text}>Trilogia sequela. Episódios VII, VIII e IX</Text>

        <Text style={styles.text}>Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia.</Text>

    </View>
    )
}