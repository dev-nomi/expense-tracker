import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className="md:flex text-center justify-between items-center p-3 my-4 mx-4 bg-cyan-700 text-white">
      <div className="md:flex md:justify-center md:items-center md:gap-4">
        <ExpenseDate date={date} />
        <div className="text-xl font-bold">{title}</div>
      </div>
      <div className="bg-amber-300 border-2 border-white-200 font-bold py-2 px-4 rounded-lg">
        ${amount}
      </div>
    </Card>
  );
};

export default ExpenseItem;
