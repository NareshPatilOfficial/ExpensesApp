import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Buy a shoes',
        amount: 45.5236,
        date: new Date('2023-4-1'),
    },
    // {
    //     id: 'e2',
    //     description: 'Electricity bill',
    //     amount: 100.623,
    //     date: new Date('2023-4-3'),
    // },
    // {
    //     id: 'e3',
    //     description: 'Personnel Lone EMI',
    //     amount: 15.0230,
    //     date: new Date('2023-4-5'),
    // },
    // {
    //     id: 'e4',
    //     description: 'Buy a T-Shirt',
    //     amount: 5.523,
    //     date: new Date('2023-4-6'),
    // },
    // {
    //     id: 'e5',
    //     description: 'Buy a Books',
    //     amount: 30.26,
    //     date: new Date('2023-4-10'),
    // },
    // {
    //     id: 'e6',
    //     description: 'Hospital MRI charge',
    //     amount: 20.90,
    //     date: new Date('2023-4-11'),
    // },
    // {
    //     id: 'e7',
    //     description: 'Electricity bill',
    //     amount: 100.623,
    //     date: new Date('2023-4-15'),
    // },
    // {
    //     id: 'e8',
    //     description: 'Personnel Lone EMI',
    //     amount: 15.0230,
    //     date: new Date('2023-4-17'),
    // },
    // {
    //     id: 'e9',
    //     description: 'Buy a T-Shirt',
    //     amount: 5.523,
    //     date: new Date('2023-4-19'),
    // },
    // {
    //     id: 'e10',
    //     description: 'Buy a Books',
    //     amount: 30.26,
    //     date: new Date('2023-4-22'),
    // },
    // {
    //     id: 'e11',
    //     description: 'Hospital MRI charge',
    //     amount: 20.90,
    //     date: new Date('2023-4-25'),
    // },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: () => { },
    updateExpense: () => { },
    deleteExpense: () => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            return [action.payload, ...state];
        }
        case 'SET_EXPENSES': {
            return action.payload.reverse();
        }
        case 'UPDATE': {
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatedExpense = { ...state[updatableExpenseIndex], ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedExpense;

            return updatedExpenses;
        }
        case 'DELETE': {
            return state.filter((expense) => expense.id !== action.payload.id);
        }
        default:
            return state
    }
}

function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    const addExpense = (expenseData) => {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    const setExpenses = (expenses) => {
        dispatch({ type: 'SET_EXPENSES', payload: expenses });
    }

    const updateExpense = (id, expenseData) => {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: { id: id } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        setExpenses: setExpenses,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesContextProvider;