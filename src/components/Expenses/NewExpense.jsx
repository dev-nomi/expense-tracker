import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <Card className="w-1/2 mx-auto my-8 p-1">
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
