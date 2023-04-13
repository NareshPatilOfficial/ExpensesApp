import { useContext } from "react";
import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../utils/date";

function RecentExpenses(){
    const expensesCtx = useContext(ExpensesContext);
    const old7DayDate = getDateMinusDays(new Date(), 7);

    const last7DaysExpenses = expensesCtx.expenses.filter((expense) => {
        return expense.date > old7DayDate;
    });
    
    return (
            <ExpensesOutPut expenses={last7DaysExpenses} periodName={'Last 7 Days Expense'} noExpensesText={'No expenses registered for the last 7 days.'}/>
    )
}

export default RecentExpenses;