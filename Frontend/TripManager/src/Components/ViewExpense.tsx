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
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8"
          />
          <select
            name="cars"
            id="cars"
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <div className="buttonHolder mt-10 ">
            <button className="p-2 bg-[#FF5733] text-white pl-6 pr-6">
              View Expense
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ViewExpense;
