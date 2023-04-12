import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../styles/styles";

function ExpensesSummary({periodName, totalExpense}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{periodName}</Text>
            <Text style={styles.amount}>${totalExpense.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container:{
        backgroundColor:GlobalStyles.colors.primary50,
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        borderRadius:10
    },
    title:{
        fontSize:14,
        color:GlobalStyles.colors.primary400
    },
    amount:{
        fontSize:16,
        color:GlobalStyles.colors.primary400,
        fontWeight:'bold'
    }
})