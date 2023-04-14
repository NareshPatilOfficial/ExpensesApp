import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../styles/styles";
import Button from "./Button";

function ErrorOverlay({ message, onErrorHandler }) {
    return (
        <View style={styles.constainer}>
            <Text style={[styles.text, styles.title]}>An error occurred!</Text>
            <Text style={styles.text}>{message}</Text>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} onPress={onErrorHandler}>Retry</Button>
            </View>
        </View>
    )
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    message: {
        fontSize: 16
    },
    btnContainer:{
        justifyContent:'center',
        marginTop:20
    },
    btn:{
    }
})