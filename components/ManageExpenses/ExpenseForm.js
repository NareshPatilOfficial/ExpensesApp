import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../styles/styles";
import { useState } from "react";
import Button from '../UI/Button';

function ExpenseForm({ submitBtnLabel, onCancel, onSubmit, intialFormValue}) {
    const [expenseData, setExpenseData] = useState(intialFormValue)

    const onChangeHandler = (propertyName, value) => {
        setExpenseData((prevData) => {
            return { ...prevData, [propertyName]: value }
        })
    }

    const submitHandler = () => {
        const submitData = {
            amount: +expenseData.amount,
            description: expenseData.description,
            date: new Date(expenseData.date)
        }
        onSubmit(submitData);
    }

    return (
        <>

            <View style={styles.rootContainer}>
                <Text style={styles.title}>Your Expense</Text>
                <View style={styles.row}>
                    <Input
                        label='Amount'
                        textInputConfig={{
                            keyboardType: 'number-pad',
                            value: expenseData.amount,
                            onChangeText: onChangeHandler.bind(this, 'amount')
                        }}
                        style={styles.inputStyle}
                    />
                    <Input
                        label='Date'
                        textInputConfig={{
                            value: expenseData.date,
                            onChangeText: onChangeHandler.bind(this, 'date'),
                            placeholder: 'YYYY-MM-DD',
                            maxLength: 10
                        }}
                        style={styles.inputStyle}
                    />
                </View>
                <Input
                    label='Description'
                    textInputConfig={{
                        value: expenseData.description,
                        onChangeText: onChangeHandler.bind(this, 'description'),
                        palaceholder: 'YYYY-MM-DD',
                        multiline: true
                    }}
                />
            </View>
            <View style={styles.buttons}>
                <Button style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitBtnLabel}</Button>
            </View>
        </>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 80
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary100,
        textAlign: 'center',
        marginVertical: 12
    },
    row: {
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        marginVertical: 8
    },
    button: {
        flex: 1,
        marginHorizontal: 4
    }
})