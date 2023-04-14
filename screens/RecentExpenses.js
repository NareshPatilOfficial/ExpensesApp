import { useContext, useEffect, useState } from "react";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../utils/date";
import { getExpensesService } from "../services/expensesService";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";


function RecentExpenses() {
    const [error, setError] = useState();
    const [fetching, setFetching] = useState(false);
    const expensesCtx = useContext(ExpensesContext);
    const old7DayDate = getDateMinusDays(new Date(), 7);

    useEffect(() => {
        const getExpenses = async () => {
            setFetching(true);
            try {
                const expenses = await getExpensesService();
                expensesCtx.setExpenses(expenses);
            } catch (error) {
                setError(`Unable to fetch expenses.`);
            }
            setFetching(false);
        };

        getExpenses();
    }, [error])

    const errorHandler = () => {
        setError(null);
    }

    if (error && !fetching) {
        return <ErrorOverlay message={error} onErrorHandler={errorHandler} />
    }

    if (fetching) {
        return <LoadingOverlay />
    }

    const last7DaysExpenses = expensesCtx.expenses.filter((expense) => {
        return expense.date > old7DayDate;
    });

    return (
        <ExpensesOutPut expenses={last7DaysExpenses} periodName={'Last 7 Days Expense'} noExpensesText={'No expenses registered for the last 7 days.'} />
    )
}

export default RecentExpenses;