import ExpenseCard from "./ExpenseCard";
import Header from "./Header";
const ViewExpense = () => {
  return (
    <>
      <Header />
      <div className="mainHolder w-[96vw] mt-18  lg:mt-16 flex justify-center items-center">
        <form className="addTripForm w-[100%] flex flex-col justify-center items-center">
          <p className="text-[8vmin] font-poppins text-[#FF5733] ">
            View Expense
          </p>
          <input
            type="text"
            placeholder="Enter Trip name..."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8 2xl:text-[2.25vmin]"
          />
          <input
            type="Day"
            placeholder="Enter Day..."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8 2xl:text-[2.25vmin]"
          />

          <div className="buttonHolder mt-10  flex gap-x-5">
            <button className="p-2 bg-[#FF5733] text-white pl-6 pr-6  2xl:text-[2.25vmin]">
              View Expense
            </button>
            <button className="p-2 bg-[#FF5733] text-white pl-6 pr-6  2xl:text-[2.25vmin]">
              View Final Split
            </button>
          </div>
        </form>
      </div>

      <ExpenseCard />
    </>
  );
};

export default ViewExpense;
