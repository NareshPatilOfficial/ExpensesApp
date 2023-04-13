import { GlobalStyles } from "../../styles/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { StyleSheet, View } from "react-native";

const DUMMY_EXPENSES = [
    {
        id:'e1',
        description:'Buy a shoes',
        amount: 45.5236,
        date:new Date('2023-4-1'),
    },
    {
        id:'e2',
        description:'Electricity bill',
        amount: 100.623,
        date:new Date('2023-4-3'),
    },
    {
        id:'e3',
        description:'Personnel Lone EMI',
        amount: 15.0230,
        date:new Date('2023-4-5'),
    },
    {
        id:'e4',
        description:'Buy a T-Shirt',
        amount: 5.523,
        date:new Date('2023-4-6'),
    },
    {
        id:'e5',
        description:'Buy a Books',
        amount: 30.26,
        date:new Date('2023-4-10'),
    },
    {
        id:'e6',
        description:'Hospital MRI charge',
        amount: 20.90,
        date:new Date('2023-4-11'),
    },
    {
        id:'e7',
        description:'Electricity bill',
        amount: 100.623,
        date:new Date('2023-4-15'),
    },
    {
        id:'e8',
        description:'Personnel Lone EMI',
        amount: 15.0230,
        date:new Date('2023-4-17'),
    },
    {
        id:'e9',
        description:'Buy a T-Shirt',
        amount: 5.523,
        date:new Date('2023-4-19'),
    },
    {
        id:'e10',
        description:'Buy a Books',
        amount: 30.26,
        date:new Date('2023-4-22'),
    },
    {
        id:'e11',
        description:'Hospital MRI charge',
        amount: 20.90,
        date:new Date('2023-4-25'),
    },
];

function ExpensesOutPut({expenses,periodName}){
    const totalExpenseAmount = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)

    return (
        <View style={styles.container}>
            <ExpensesSummary periodName={periodName} totalExpense={totalExpenseAmount} />
            <ExpensesList expenses={expenses}/>
        </View>
    )
}

export default ExpensesOutPut;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:14,
        paddingTop:14,
        backgroundColor:GlobalStyles.colors.primary700
    }
})