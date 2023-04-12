import { Text, View } from "react-native";

function ExpensesSummary({periodName, totalExpense}){
    return (
        <View>
            <Text>{periodName}</Text>
            <Text>$ {totalExpense.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary;