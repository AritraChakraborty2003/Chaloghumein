import { useEffect, useState } from "react";

const ExpenseCard = (props: any) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    props.data.map((val: any) => {
      sum += val.amt;
    });
    setTotal(sum);
  }, [props]);
  return (
    <>
      <div className="mainHolder pb-10">
        {props.data.map((val: any) => (
          <div className="expenseCard flex flex-col flex justify-center items-center mt-5 lg:mt-12">
            <div className="w-[96%] lg:w-[79%] ml-3 lg:ml-0">
              <div className="flex gap-x-24">
                <p className="text-[3.95vmin] md:text-[2.75vmin] 2xl:text-[2.75vmin] font-light">
                  {val?.trip}
                </p>
                <div className="w-[45%] lg:w-[65%]">
                  <p className="text-end text-[3.65vmin]  md:text-[2.75vmin] 2xl:text-[2.75vmin]">
                    ₹ {val?.amt}
                  </p>
                </div>
              </div>
              <p className="text-[3.25vmin]  md:text-[2.75vmin] font-normal mt-1  2xl:text-[2.25vmin]">
                Reason: {val?.reason}
              </p>
              <p className="text-[3.25vmin]  md:text-[2.35vmin] font-normal mt-1  2xl:text-[2.25vmin]">
                {val?.day}
              </p>
            </div>
          </div>
        ))}
        <div className="pb-28">
          <div className="line w-[96%] lg:w-[95%]  h-[0.15px] bg-black mt-6 ml-2 lg:ml-5"></div>
          <p className="text-[4vmin]  md:text-[3vmin] font-poppins text-[#8A8A8A] text-end mr-5  lg:mr-[25vmin] lg:mt-4  text-[3.35vmin] 2xl:text-[2.45vmin]">
            Total Expense: ₹ {total}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExpenseCard;
