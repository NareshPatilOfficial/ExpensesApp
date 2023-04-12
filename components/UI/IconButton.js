import { Pressable, StyleSheet, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({name, color, size, onPress}){
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
                <Ionicons name={name} color={color} size={size}/>
            </View>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
    },
    pressed:{
        opacity:0.25
    }
})