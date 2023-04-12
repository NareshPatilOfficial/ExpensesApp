import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../styles/styles";
import Button from "../components/UI/Button";
import { useLayoutEffect } from "react";

function ManageExpenses({route, navigation}){
    const expenseId = route.params?.expenseId;
    const isEdit = !!expenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdit ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEdit])

    return (
        <View style={styles.rootContainer}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode={'flat'}>Cancel</Button>
                <Button style={styles.button}>{isEdit ? 'Update' : 'Add'}</Button>
            </View>
            {
                isEdit && 
                <View style={styles.iconContainer}>
                    <IconButton name='trash' color={GlobalStyles.colors.error500} size={36}/>
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