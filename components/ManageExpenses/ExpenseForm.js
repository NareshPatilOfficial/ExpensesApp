import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../styles/styles";
import { useState } from "react";
import Button from '../UI/Button';
import { formattedDate } from "../../utils/date";

function ExpenseForm({ submitBtnLabel, onCancel, onSubmit, defaultValue }) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValue ? defaultValue.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValue ? formattedDate(defaultValue.date) : '',
            isValid: true
        },
        description: {
            value: defaultValue ? defaultValue.description : '',
            isValid: true
        }
    })

    const onChangeHandler = (propertyName, value) => {
        setInputs((prevData) => {
            return { ...prevData, [propertyName]: { value: value, isValid: true } }
        })
    }

    const submitHandler = () => {
        const submitData = {
            amount: +inputs.amount.value,
            description: inputs.description.value,
            date: new Date(inputs.date.value)
        }

        const isAmountValid = !isNaN(submitData.amount) && submitData.amount > 0;
        const isDateValid = submitData.date.toString() !== 'Invalid Date';
        const isDescriptionValid = submitData.description.trim().length > 0;

        if (!isAmountValid || !isDateValid || !isDescriptionValid) {
            setInputs((currentInput) => {
                return {
                    amount: { value: currentInput.amount.value, isValid: isAmountValid },
                    date: { value: currentInput.date.value, isValid: isDateValid },
                    description: { value: currentInput.description.value, isValid: isDescriptionValid }
                }
            });
            return;
        }

        onSubmit(submitData);
    }

    const isFormValid = inputs.amount.isValid && inputs.date.isValid && inputs.description.isValid;

    return (
        <>
            <View style={styles.rootContainer}>
                <Text style={styles.title}>Your Expense</Text>
                <View style={styles.row}>
                    <Input
                        label='Amount'
                        textInputConfig={{
                            keyboardType: 'number-pad',
                            value: inputs.amount.value,
                            onChangeText: onChangeHandler.bind(this, 'amount'),
                            invalid: !inputs.amount.isValid
                        }}
                        style={styles.inputStyle}
                    />
                    <Input
                        label='Date'
                        textInputConfig={{
                            value: inputs.date.value,
                            onChangeText: onChangeHandler.bind(this, 'date'),
                            placeholder: 'YYYY-MM-DD',
                            maxLength: 10,
                            invalid: !inputs.date.isValid
                        }}
                        style={styles.inputStyle}
                    />
                </View>
                <Input
                    label='Description'
                    textInputConfig={{
                        value: inputs.description.value,
                        onChangeText: onChangeHandler.bind(this, 'description'),
                        palaceholder: 'YYYY-MM-DD',
                        multiline: true,
                        invalid: !inputs.description.isValid
                    }}
                />
            </View>
            {
                !isFormValid &&
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Invalid input values - please check your entered data!</Text>
                </View>
            }
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
    },
    errorContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        borderRadius: 8,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary200
    },
    errorText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.error500,
        textAlign: 'center'
    }
})