import ExpensesOutPut from "../components/ExpensesOutPut/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext);
    return (
            <ExpensesOutPut expenses={expensesCtx.expenses} periodName={'All Expense'} />
    )
}

export default AllExpenses;