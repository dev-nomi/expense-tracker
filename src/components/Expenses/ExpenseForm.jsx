import { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const expenseFormHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={expenseFormHandler}>
        <div className="p-2 mx-4 font-bold text-2xl text-center">Add Expense</div>
        <div className="p-2 mx-4">
          <label
            htmlFor="expense-title-input"
            className="block text-gray-700 text-md font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="expense-title-input"
            className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:ring-2 focus:ring-cyan-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="p-2 mx-4">
          <label
            htmlFor="expense-amount-input"
            className="block text-gray-700 text-md font-bold mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="expense-amount-input"
            min="0.01"
            step="0.01"
            className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:shadow-outline"
            placeholder="Enter amount"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="p-2 mx-4">
          <label
            htmlFor="expense-date-input"
            className="block text-gray-700 text-md font-bold mb-2"
          >
            Date
          </label>
          <input
            type="date"
            id="expense-date-input"
            min="2019-01-01"
            max="2023-12-31"
            className="shadow border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:shadow-outline"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="p-2 mx-4 my-2">
          <button
            type="submit"
            className="w-full py-3 px-3 bg-cyan-700 rounded-lg text-white text-lg hover:bg-cyan-800"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
