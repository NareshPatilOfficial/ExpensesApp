import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../styles/styles";
import { useContext, useLayoutEffect, useState } from "react";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm";
import { addExpenseService, deleteExpenseService, updateExpenseService } from "../services/expensesService";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpenses({ route, navigation }) {
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState(false);
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

    const addAndUpdateHandler = async (expenseData) => {
        if (isEdit) {
            setSubmitting(true);
            try {
                await updateExpenseService(expenseId, expenseData);
                expensesCtx.updateExpense(
                    id = expenseId,
                    data = expenseData
                );
                
                // setSubmitting(false); // not need, anyway we closing this screen
                navigation.goBack();
            } catch (error) {
                setError('Unable to update expense');
            }
            
        } else {
            setSubmitting(true);
            try {
                const expenseID = await addExpenseService(expenseData);
                expensesCtx.addExpense({ ...expenseData, id: expenseID });
                
                // setSubmitting(false); // not need, anyway we closing this screen
                navigation.goBack();
            } catch (error) {
                setError('Unable to update expense');
            }
        }
        setSubmitting(false);
    }

    const deleteHandler = async () => {
        setSubmitting(true);
        try {
            await deleteExpenseService(expenseId);
            expensesCtx.deleteExpense(expenseId);
            navigation.goBack();
        } catch (error) {
            setError('Unable to delete expense');
            setSubmitting(false);
        }
    }

    const errorHandler = () => {
        setError(null);
    }

    if(error && !submitting){
        return <ErrorOverlay message={error} onErrorHandler={errorHandler}/>
    }

    if (submitting) {
        return <LoadingOverlay />
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