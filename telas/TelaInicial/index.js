import React from "react";
import { View, Button, Text, Image } from "react-native";
import Logo from '../../assets/logo.jpg'
import styles from './style'
export default function TelaInicial(props){
    return(
        <View style={styles.container}>
            <Image source={Logo}/>
             
            <Text style={styles.textTitulo}>Star Wars ordem cronologica</Text>          

            <Text style={styles.text}>VC sabe qual a ordem cronologica de SW</Text>

            <Text style={styles.text}>Os principais filmes da franquia estão divididos em trilogias. clique no botao a seguir</Text>

            <View style={styles.botoes}>
                <View style={styles.botao}>
                <Button title="Ver 1ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 1") } color="#372d00" />
                </View>

                <View style={styles.botao}>
                <Button title="Ver 2ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 2") } color="#372d00" />
                </View>

                <View style={styles.botao}>
                <Button title="Ver 3ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 3") } color="#372d00" />
                </View>
            </View>
            
        </View>
    )
}