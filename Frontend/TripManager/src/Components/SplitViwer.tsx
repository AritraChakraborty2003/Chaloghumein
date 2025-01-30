import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const SplitViwer = (props: any) => {
  console.log(props);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}trip/data?trip=` + props.data.trip
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="mainHolder pb-28 ">
        <div className="line w-[96%] lg:w-[95%] pl-3 h-[0.15px] bg-black mt-3 ml-2 lg:ml-5"></div>
        <div className="dataholder pl-3">
          <p className="text-[5vmin]  mt-5 font-bold font-poppins   md:text-[3.45vmin]">
            Final Amount Split:
          </p>
          <p className="text-[3.75vmin] mt-3 font-poppins text-[#8A8A8A]  md:text-[3.35vmin]">
            Total cost: ₹{props.total}
          </p>
          {data.length > 0 && (
            <>
              <p className="text-[3.75vmin] mt-3 font-poppins text-[#8A8A8A]  md:text-[3.35vmin]">
                Cost Per Head(Total: {data[0].persons} person):&nbsp; ₹
                {props.total}/{data[0].persons} = ₹
                {Number(props.total) / Number(data[0].persons)}
              </p>
              <p className="text-[3.75vmin] mt-3 font-poppins text-[#8A8A8A] md:text-[3.35vmin]">
                Cost Per Family(Total: {data[0].family} person):&nbsp; ₹
                {props.total}/{data[0].family}= ₹
                {Number(props.total) / Number(data[0].family)}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SplitViwer;
