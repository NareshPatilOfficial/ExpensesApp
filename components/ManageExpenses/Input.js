import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalStyles } from "../../styles/styles";

function Input({ style, label, textInputConfig }) {
    const inputStyle = [styles.input];
    if(textInputConfig.multiline){
        inputStyle.push(styles.multilineStyle)
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                value={textInputConfig.value}
                onChangeText={textInputConfig.onChangeText}
                style={inputStyle}
                {...textInputConfig} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
        marginHorizontal: 4
    },
    label: {
        color: GlobalStyles.colors.primary100
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary800,
        paddingVertical:4,
        paddingHorizontal:6,
        fontSize:18,
        borderRadius:4
    },
    multilineStyle:{
        height:100,
        textAlignVertical:'top'
    }
})