import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({expenses}){
    return (
        <FlatList 
            data={expenses}
            renderItem={({item}) => <ExpenseItem {...item}/>}
            keyExtractor={expense => expense.id}
        />
    )
}

export default ExpensesList;