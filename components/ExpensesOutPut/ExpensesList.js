import { Text } from "react-native";
import { FlatList } from "react-native";

function ExpensesList({expenses}){
    return (
        <FlatList 
            data={expenses}
            renderItem={({item}) => <Text>{item.description}</Text>}
            keyExtractor={expense => expense.id}
        />
    )
}

export default ExpensesList;