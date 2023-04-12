import { View } from "react-native";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutput";

function RecentExpenses(){
    return (
            <ExpensesOutPut periodName={'Last 7 Days Expense'} />
    )
}

export default RecentExpenses;