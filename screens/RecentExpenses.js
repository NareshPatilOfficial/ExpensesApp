import { View } from "react-native";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutput";

function RecentExpenses(){
    return (
        <View>
            <ExpensesOutPut periodName={'Last 7 Days Expense'} />
        </View>
    )
}

export default RecentExpenses;