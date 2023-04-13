import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../styles/styles";
import { useContext, useLayoutEffect } from "react";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import { formattedDate } from "../utils/date";

function ManageExpenses({ route, navigation }) {
    const expenseId = route.params?.expenseId;
    const isEdit = !!expenseId;

    const expensesCtx = useContext(ExpensesContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdit ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEdit])

    const cancelHandler = () => {
        navigation.goBack();
    }

    const addAndUpdateHandler = (expenseData) => {
        if (isEdit) {
            expensesCtx.updateExpense(
                id = expenseId,
                data = expenseData
            )
        } else {
            expensesCtx.addExpense(expenseData)
        }
        navigation.goBack();
    }

    const deleteHandler = () => {
        navigation.goBack();
        expensesCtx.deleteExpense(expenseId);
    }
    
    const defaultValue = expensesCtx.expenses.find(expense => expense.id === expenseId);

    return (
        <View style={styles.rootContainer}>
            <ExpenseForm
                defaultValue={defaultValue}
                submitBtnLabel={isEdit ? 'Update' : 'Add'}
                onCancel={cancelHandler}
                onSubmit={addAndUpdateHandler}
            />
            {
                isEdit &&
                <View style={styles.iconContainer}>
                    <IconButton name='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteHandler} />
                </View>
            }
        </View>
    )
}

export default ManageExpenses;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        paddingHorizontal: 14
    },
    iconContainer: {
        borderTopColor: GlobalStyles.colors.primary100,
        borderTopWidth: 2,
        marginVertical: 12,
        paddingTop: 12,
        alignItems: 'center'
    }
})