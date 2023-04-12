import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../styles/styles";

function Button({ children, onPress, style, mode }) {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <View style={[styles.innerContainer, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.btnText, mode === 'flat' && styles.flartext]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: GlobalStyles.colors.primary800,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center'
    },
    btnText: {
        fontSize: 16,
        color: 'white'
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 8,
    },
    flat: {
        backgroundColor: 'transparent'
    },
    flartext: {
        color: GlobalStyles.colors.primary200
    }
})