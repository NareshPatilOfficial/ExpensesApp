import axios from "axios";

const BASE_URL = 'https://react-native-e3e28-default-rtdb.firebaseio.com/';

export async function addExpenseService(expenseData) {
    const response = await axios.post(
        BASE_URL + 'expenses.json',
        expenseData
    );
    return response.data.name;
}

export async function getExpensesService() {
    const response = await axios.get(
        BASE_URL + 'expenses.json',
    );
    const expenses = [];
    for (const key in response.data) {
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

export async function updateExpenseService(id, expenseData) {
    return axios.put(BASE_URL + `expenses/${id}.json`, expenseData);
}

export async function deleteExpenseService(id){
    return axios.delete(BASE_URL + `expenses/${id}.json`);
}