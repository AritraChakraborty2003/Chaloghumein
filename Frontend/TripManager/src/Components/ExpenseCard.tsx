const ExpenseCard = (props: any) => {
  console.log(props);
  return (
    <>
      <div className="expenseCard flex flex-col flex justify-center items-center mt-12">
        <div className="w-[96%] lg:w-[79%]">
          <div className="flex gap-x-24">
            <p className="text-[3.95vmin] 2xl:text-[2.75vmin] font-light">
              Lucknow Trip
            </p>
            <div className="w-[45%] lg:w-[65%]">
              <p className="text-end text-[3.65vmin] 2xl:text-[2.75vmin]">
                ₹ 4000
              </p>
            </div>
          </div>
          <p className="text-[3.25vmin] font-normal mt-1  2xl:text-[2.25vmin]">
            Reason: Dinner
          </p>
          <div className="line w-[96%] lg:w-[85%]  h-[0.15px] bg-black mt-3 lg:ml-5"></div>
          <p className="text-[2vmin] font-poppins text-[#8A8A8A] text-end mr-5 lg:mr-[21vmin] mt-4  text-[3.35vmin] 2xl:text-[2.45vmin]">
            Total Expense: ₹1000
          </p>
        </div>
      </div>
    </>
  );
};

export default ExpenseCard;
