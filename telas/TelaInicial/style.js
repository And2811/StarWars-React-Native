import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
    },
    textTitulo:{
        fontWeight:'bold',
        color:'gold',
        fontSize:25
    },
    text:{
        color:'#fff',
        textAlign:'center', 
        lineHeight:40,
        color:'gold',
        marginLeft:10,
        marginRight:10,
        fontSize:17,   
    },
    botoes:{
        width:200,
        marginBottom:10,
        marginTop:100,
    },
    botao:{
        marginBottom:10,
        marginTop:10,
    },
})
export default  style;