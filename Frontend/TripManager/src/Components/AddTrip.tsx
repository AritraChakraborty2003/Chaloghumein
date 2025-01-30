import { useState } from "react";
import Header from "./Header";
import axios from "axios";

const AddTrip = () => {
  const [trip, setTrip] = useState("");
  const [persons, setPersons] = useState(0);
  const [days, setDays] = useState(0);
  const [families, setFamilies] = useState(0);
  const addTrip = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_APP_API_URL}` + "trip", {
        trip: trip,
        days: days,
        persons: persons,
        family: families,
      });
      alert("Trip added successfully: ");
      setTrip("");
      setPersons(Number(""));
      setDays(Number(""));
      setFamilies(Number(""));
    } catch (error) {
      console.error("Error in adding trip: ", error);
    }
  };
  return (
    <>
      <Header />
      <div className="mainHolder w-[96vw] mt-18  lg:mt-14 flex justify-center items-center">
        <form className="addTripForm w-[100%] flex flex-col justify-center items-center">
          <p className="text-[8vmin] font-poppins text-[#FF5733] ">Add Trip</p>
          <input
            type="text"
            id="trip"
            onChange={(e): void => setTrip(e.target.value)}
            placeholder="Enter Trip name..."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="number"
            id="persons"
            onChange={(e): void => setPersons(Number(e.target.value))}
            placeholder="Enter no. Of Persons..."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="number"
            id="days"
            onChange={(e): void => setDays(Number(e.target.value))}
            placeholder="Enter no of days..."
            className="w-[85%] lg:w-[35%]  border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="number"
            id="families"
            onChange={(e): void => setFamilies(Number(e.target.value))}
            placeholder="Enter no of familes..."
            className="w-[85%] lg:w-[35%]  border-b-[0.1px] p-3 mt-8"
          />
          <div className="buttonHolder mt-12 ">
            <button
              onClick={addTrip}
              className="p-2 bg-[#FF5733] text-white pl-6 pr-6"
            >
              Add Trip
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTrip;
