import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../styles/styles";
import Button from "../components/UI/Button";
import { useContext, useLayoutEffect } from "react";
import { ExpensesContext } from "../store/expense-context";

function ManageExpenses({route, navigation}){
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

    const addAndUpdateHandler = () => {
        navigation.goBack();
    }

    const deleteHandler = () => {
        navigation.goBack();
        expensesCtx.deleteExpense(expenseId);
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode={'flat'} onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={addAndUpdateHandler}>{isEdit ? 'Update' : 'Add'}</Button>
            </View>
            {
                isEdit && 
                <View style={styles.iconContainer}>
                    <IconButton name='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteHandler}/>
                </View>
            }
        </View>
    )
}

export default ManageExpenses;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary700,
        paddingHorizontal:14
    },
    iconContainer:{
        borderTopColor:GlobalStyles.colors.primary100,
        borderTopWidth:2,
        marginVertical:12,
        paddingTop:12,
        alignItems:'center'
    },
    buttons:{
        flexDirection:'row',
        marginVertical:8
    },
    button:{
        flex:1,
        marginHorizontal:4
    }
})