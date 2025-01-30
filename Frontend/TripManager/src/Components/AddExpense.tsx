import { useState } from "react";
import Header from "./Header";
import axios from "axios";

const AddExpense = () => {
  const [trip, setTrip] = useState("");
  const [amt, setAmt] = useState("");
  const [reason, setReason] = useState("");
  const [day, setDay] = useState("");
  const handleExpense = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_APP_API_URL}` + "expense", {
        trip: trip,
        amt: Number(amt),
        reason: reason,
        day: day,
      });
    } catch (error) {
      console.error(error);
    }
    alert("Expense added successfully: ");
    setTrip("trip");
    setAmt("amt");
    setReason("reason");
    setDay("day");
    const form = document.querySelector<HTMLFormElement>("#form");
    form?.reset();
  };
  return (
    <>
      <Header />
      <div className="pb-10 mainHolder w-[96vw] mt-18  lg:mt-14 flex justify-center items-center">
        <form
          id="form"
          className="addTripForm w-[100%] flex flex-col justify-center items-center"
        >
          <p className="text-[8vmin] font-poppins text-[#FF5733] ">
            Add Expense
          </p>
          <input
            type="text"
            id="trip"
            onChange={(e): void => setTrip(e.target.value)}
            placeholder="Enter the Trip..."
            className="w-[85%] lg:w-[35%]  border-b-[0.1px] p-3 mt-8"
          />

          <input
            type="text"
            id="amt"
            onChange={(e): void => setAmt(e.target.value)}
            placeholder="Enter the amt.."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="text"
            id="reason"
            onChange={(e): void => setReason(e.target.value)}
            placeholder="Enter the reason..."
            className="w-[85%] lg:w-[35%]  border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="text"
            id="day"
            placeholder="Enter the day..."
            onChange={(e): void => setDay(e.target.value)}
            className="w-[85%] lg:w-[35%]  border-b-[0.1px] p-3 mt-8"
          />
          <div className="buttonHolder mt-12 ">
            <button
              onClick={handleExpense}
              className="p-2 bg-[#FF5733] text-white pl-6 pr-6"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpense;
