import Header from "./Header";

const AddTrip = () => {
  return (
    <>
      <Header />
      <div className="mainHolder w-[96vw] mt-18  lg:mt-14 flex justify-center items-center">
        <form className="addTripForm w-[100%] flex flex-col justify-center items-center">
          <p className="text-[8vmin] font-poppins text-[#FF5733] ">Add Trip</p>
          <input
            type="text"
            placeholder="Enter Trip name..."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="number"
            placeholder="Enter no. Of Persons..."
            className="w-[85%] lg:w-[35%] border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="number"
            placeholder="Enter no of days..."
            className="w-[85%] lg:w-[35%]  border-b-[0.1px] p-3 mt-8"
          />
          <input
            type="number"
            placeholder="Enter no of familes..."
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

export default AddTrip;
