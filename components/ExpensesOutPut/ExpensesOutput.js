import { GlobalStyles } from "../../styles/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { StyleSheet, Text, View } from "react-native";

function ExpensesOutPut({ expenses, periodName, noExpensesText }) {
    const totalExpenseAmount = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)

    let renderContent = expenses.length > 0
        ? <ExpensesList expenses={expenses} />
        : <View style={styles.noExpenseTextStyleContainer}><Text style={styles.noExpenseTextStyle}>{noExpensesText}</Text></View>;


    return (
        <View style={styles.container}>
            <ExpensesSummary periodName={periodName} totalExpense={totalExpenseAmount} />
            {renderContent}
        </View>
    )
}

export default ExpensesOutPut;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        paddingTop: 14,
        backgroundColor: GlobalStyles.colors.primary700
    },
    noExpenseTextStyleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    noExpenseTextStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})