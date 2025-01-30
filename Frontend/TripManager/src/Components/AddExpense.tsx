import Header from "./Header";

const AddExpense = () => {
  return (
    <>
      <Header />
      <div className="mainHolder w-[96vw] mt-18  lg:mt-14 flex justify-center items-center">
        <form className="addTripForm w-[100%] flex flex-col justify-center items-center">
          <p className="text-[8vmin] font-poppins text-[#FF5733] ">
            Add Expense
          </p>
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

          <input
            type="number"
            placeholder="Enter the amt.."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="text"
            placeholder="Enter the reason..."
            className="w-[85%] lg:w-[35%]  border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="text"
            placeholder="Enter the day..."
            className="w-[85%] lg:w-[35%]  border-b-[0.1px] p-3 mt-8"
          />
          <div className="buttonHolder mt-12 ">
            <button className="p-2 bg-[#FF5733] text-white pl-6 pr-6">
              Add Trip
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpense;
