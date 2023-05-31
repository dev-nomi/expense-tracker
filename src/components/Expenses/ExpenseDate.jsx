const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="flex flex-col justify-center items-center w-20 h-20 rounded-lg bg-slate-300 text-gray-950 ring-2 ring-offset-2 ring-offset-white ring-gray-950">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-2xl font-bold">{day}</div>
      <div className="text-xs">{year}</div>
    </div>
  );
};

export default ExpenseDate;
