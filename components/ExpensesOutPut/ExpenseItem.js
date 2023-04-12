import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../styles/styles";
import { formattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({id, description, date, amount}){
    const navigation = useNavigation();

    const expenseItemHandler = () => {
        navigation.navigate('ManageExpenses', {expenseId:id});
    }

    return(
        <View style={styles.outerContainer}>
            <Pressable onPress={expenseItemHandler} android_ripple={{color:GlobalStyles.colors.primary100}} style={styles.innerContainer}>
                <View>
                    <Text style={[styles.textBase, styles.descriptionText]}>{description}</Text>
                    <Text style={[styles.textBase, styles.date]}>{formattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={[styles.amount]}>${amount.toFixed(2)}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default ExpenseItem;

const styles = StyleSheet.create({
    outerContainer:{
        marginVertical:10,
        borderRadius:10,
        overflow:'hidden'
    },
    innerContainer:{
        flexDirection:'row',
        backgroundColor:GlobalStyles.colors.primary400,
        paddingHorizontal:12,
        paddingVertical:8,
        justifyContent:'space-between',
        alignItems:'center',
        elevation:8,
    },
    textBase:{
        color:'white'
    },
    descriptionText:{
        fontSize:16,
        marginBottom:8
    },
    date:{
        fontSize:16
    },
    amountContainer:{
        backgroundColor:'white',
        padding:8,
        minWidth:80,
        alignItems:'center',
        borderRadius:8
    },
    amount:{
        fontSize:16,
        fontWeight:'bold'
    }
})