import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { View } from "react-native";

const DUMMY_EXPENSES = [
    {
        id:'e1',
        description:'Buy a shoes',
        amount: 45.5236,
        date:new Date('1-4-2023'),
    },
    {
        id:'e2',
        description:'Electricity bill',
        amount: 100.623,
        date:new Date('5-4-2023'),
    },
    {
        id:'e3',
        description:'Personnel Lone EMI',
        amount: 15.0230,
        date:new Date('7-4-2023'),
    },
    {
        id:'e4',
        description:'Buy a T-Shirt',
        amount: 5.523,
        date:new Date('11-4-2023'),
    },
    {
        id:'e5',
        description:'Buy a Books',
        amount: 30.26,
        date:new Date('13-4-2023'),
    },
    {
        id:'e6',
        description:'Hospital MRI charge',
        amount: 20.90,
        date:new Date('20-4-2023'),
    },
];

function ExpensesOutPut({expenses,periodName}){
    const totalExpenseAmount = DUMMY_EXPENSES.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)

    return (
        <View>
            <ExpensesSummary periodName={periodName} totalExpense={totalExpenseAmount} />
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    )
}

export default ExpensesOutPut;