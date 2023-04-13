import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalStyles } from "../../styles/styles";

function Input({ style, label, textInputConfig }) {
    const inputStyle = [styles.input];
    if(textInputConfig.multiline){
        inputStyle.push(styles.multilineStyle)
    }
    if(textInputConfig.invalid){
        inputStyle.push(styles.invalidInput)
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, textInputConfig.invalid && styles.invalidLabel]}>{label}</Text>
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
    invalidLabel:{
        color: GlobalStyles.colors.error500,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary800,
        paddingVertical:4,
        paddingHorizontal:6,
        fontSize:18,
        borderRadius:4
    },
    invalidInput:{
        backgroundColor: GlobalStyles.colors.error50,
        borderColor:  GlobalStyles.colors.error500,
        borderWidth:1
    },
    multilineStyle:{
        height:100,
        textAlignVertical:'top'
    }
})