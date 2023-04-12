import { View } from "react-native";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutput";

function AllExpenses(){
    return (
        <View>
            <ExpensesOutPut periodName={'All Expense'} />
        </View>
    )
}

export default AllExpenses;