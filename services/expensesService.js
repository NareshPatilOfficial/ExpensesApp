import axios from "axios";

const BASE_URL = 'https://react-native-e3e28-default-rtdb.firebaseio.com/';

export function addExpenseService(expenseData) {
    axios.post(
        BASE_URL + 'expeses.json',
        expenseData
    );
}

export async function getExpensesService() {
    const response = await axios.get(
        BASE_URL + 'expeses.json',
    );
    const expenses = [];
    for (const key in response.data){
        const expensObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expensObj);
    }
    return expenses;
}