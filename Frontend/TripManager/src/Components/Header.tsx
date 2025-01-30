import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [navIcon, setNavIcon] = useState(false);
  const handleNavIcons = (): void => {
    setNavIcon(!navIcon);
  };
  return (
    <>
      {(screen.width > 1000 && (
        <>
          <div className="header flex pt-3">
            <div className="logoHolderBox flex gap-x-3 w-[25%] p-1 pl-5">
              <div className="logoHolder h-[8vmin] w-[8vmin] ">
                <Link to="/">
                  <img
                    src="budgetIcon.png"
                    alt="logo"
                    className="logoImage max-w-full max-h-full object-contain"
                  />
                </Link>
              </div>

              <div className="logoText pt-5 p-1 text-[#FF5733] text-xl">
                <Link to="/">Expense Tracker</Link>
              </div>
            </div>
            <div className="SupportBox flex gap-x-3 w-[40%] 2xl:w-[45%]"></div>

            <div className="iconsHolderBox  flex gap-x-12 pt-4 w-[30%] 2xl:w-[30%] 2xl:text-[1.95vmin] justify-center items-center">
              <p className="hover:underline underline-offset-8 ">
                <Link to="/">Add Expense</Link>
              </p>
              <p className="hover:underline underline-offset-8 ">
                <Link to="/viewExpense"> View Expense</Link>
              </p>
              <p className="hover:underline underline-offset-8 ">
                {" "}
                <Link to="/addTrip">AddTrip</Link>
              </p>
            </div>
          </div>
          <div className="line w-[96%] h-[0.15px] bg-black mt-3 ml-5"></div>
        </>
      )) || (
        <>
          <div className="header flex pt-3">
            <div className="logoHolderBox flex gap-x-3 w-[60%] pt-4 pl-3">
              <div className="logoHolder h-[8vmin] w-[8vmin] ">
                <img
                  src="budgetIcon.png"
                  alt="logo"
                  className="logoImage max-w-full max-h-full object-contain"
                />
              </div>
              <div className="logoText p-1 text-[#FF5733] text-[4vmin]">
                Expense Tracker
              </div>
            </div>

            <div className="iconsHolderBox  flex gap-x-12 pt-4 w-[40%] 2xl:text-[2.05vmin] justify-end items-center pr-4">
              <i
                className="ri-menu-line text-[7vmin]"
                onClick={handleNavIcons}
              ></i>
            </div>
          </div>
          <div className="line w-[96%] h-[0.25px] bg-black mt-3 ml-2"></div>
          {navIcon && (
            <>
              <div className="holder flex justify-center items-center">
                <div className="navHolder h-[40vmin] w-[97vw] border-b-[0.25px] flex-col text-[3.45vmin] p-4">
                  <p className="hover:underline underline-offset-8 ">
                    <Link to="/">Add Expense</Link>
                  </p>
                  <p className="hover:underline underline-offset-8 mt-6">
                    <Link to="/viewExpense"> View Expense</Link>
                  </p>
                  <p className="hover:underline underline-offset-8 mt-6">
                    {" "}
                    <Link to="/addTrip">AddTrip</Link>
                  </p>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Header;
