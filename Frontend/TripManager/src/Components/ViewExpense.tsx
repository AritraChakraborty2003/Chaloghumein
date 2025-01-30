import { useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import Header from "./Header";
import axios from "axios";
const ViewExpense = () => {
  const [day, setDay] = useState("");
  const [trip, setTrip] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}` + "expense"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleExpenseView = (e: any) => {
    e.preventDefault();

    if (data.length > 0 && day === "overall") {
      const filtered = data.filter((expense: any) => {
        return expense.trip === trip;
      });

      setFilteredData(filtered);
    } else if (data.length > 0 && day != "overall") {
      const filtered = data.filter((expense: any) => {
        return expense.trip === trip && expense.day === day;
      });

      setFilteredData(filtered);
      console.log(filtered);
    } else {
      alert("No Data Found");
    }
  };

  const handleFinalExpenseView = (e: any) => {
    e.preventDefault();
    const filtered = data.filter((expense: any) => {
      return expense.trip === trip;
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <Header />
      <div className="pb-10 mainHolder w-[96vw] mt-18  lg:mt-16 flex justify-center items-center">
        <form
          id="form"
          className="addTripForm w-[100%] flex flex-col justify-center items-center"
        >
          <p className="text-[8vmin] font-poppins text-[#FF5733] ">
            View Expense
          </p>
          <input
            id="trip"
            type="text"
            onChange={(e: any) => setTrip(e.target.value)}
            placeholder="Enter Trip name..."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8 2xl:text-[2.25vmin]"
          />
          <input
            type="Day"
            id="day"
            onChange={(e: any) => setDay(e.target.value)}
            placeholder="Enter Day..."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8 2xl:text-[2.25vmin]"
          />

          <div className="buttonHolder mt-10  flex gap-x-5">
            <button
              onClick={handleExpenseView}
              className="p-2 bg-[#FF5733] text-white pl-6 pr-6  2xl:text-[2.25vmin]"
            >
              View Expense
            </button>
            <button
              onClick={handleFinalExpenseView}
              className="p-2 bg-[#FF5733] text-white pl-6 pr-6  2xl:text-[2.25vmin]"
            >
              View Final Expense
            </button>
          </div>
        </form>
      </div>

      {filteredData.length > 0 ? <ExpenseCard data={filteredData} /> : <></>}
    </>
  );
};

export default ViewExpense;
