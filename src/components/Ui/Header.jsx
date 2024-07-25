import React, { useContext, useState } from "react";
import Logo from "../../assets/EasyThrift-w.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import LogOut from "../../Auth/LogOut";
import Bell from "../../assets/notification.svg";
import Message from "../../assets/message.svg";
import Watchlist from "../../assets/watchlist.svg";
import Location from "../../assets/location.svg";

const Header = () => {
  const userDetails = useContext(UserContext);
  const [isHover, setIsHovering] = useState(false);

  return (
    <div className="bg-primaryCol text-white flex justify-between items-center px-14 py-2">
      <section className="flex items-center gap-3">
        <Link to="/">
          <img src={Logo} alt={Logo} className="w-36 " />
        </Link>
        <div className="flex items-center gap-1">
          <img src={Location} className="w-5 h-5 cursor-pointer" />
          <p className="text-[0.65rem]">
            Look up anything in <br></br>
            <span className="font-bold text-sm">FUTA</span>
          </p>
        </div>
      </section>

      <input
        type="text"
        placeholder="Search E-Thrift"
        className="text-darkText basis-1/2 outline-none px-4 text-[1rem] py-2 rounded-md"
      />
      <div className="flex gap-5 items-center">
        {userDetails ? (
          <section className="flex gap-4 items-center">
            <img src={Watchlist} className="w-5 h-5 cursor-pointer" />
            <Link to="/messages">
              <img src={Message} className="w-5 h-5 cursor-pointer" />
            </Link>
            <img src={Bell} className="w-5 h-5 cursor-pointer" />
          </section>
        ) : (
          <></>
        )}
        {userDetails ? (
          <div
            onMouseEnter={() => {
              setIsHovering((prev) => !prev);
            }}
            onMouseLeave={() => {
              setIsHovering((prev) => !prev);
            }}
            className="flex items-center relative"
          >
            <img src={userDetails.photo} className="w-10 rounded-full" />
            <div
              className={`capitalize absolute text-sm font-semibold bg-white duration-300 w-32 rounded-sm [box-shadow:rgba(0,_0,_0,_0.24)_0px_3px_8px] text-darkText  py-2  ${
                isHover
                  ? "opacity-100 z-30 -bottom-[9.3rem]"
                  : "opacity-0 -z-30 -bottom-48"
              }`}
            >
              <p className="pb-1 cursor-pointer px-3 mb-1 hover:bg-hoverCol">
                <Link to="/my-product">my product</Link>
              </p>
              <p className="pb-1 cursor-pointer px-3 mb-1 hover:bg-hoverCol">
                <Link to="/feedback">feedback</Link>
              </p>
              <p className="pb-1 cursor-pointer px-3 mb-1 hover:bg-hoverCol">
                <Link to="/perfomance">perfomance</Link>
              </p>
              <p className="pb-1 cursor-pointer px-3 mb-1 hover:bg-hoverCol">
                <Link to="/settings">Settings</Link>
              </p>
              <LogOut />
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <p>
              <Link to="/login">Login</Link>
            </p>
            |
            <p>
              <Link to="/register">Register</Link>
            </p>
          </div>
        )}

        <button className="bg-actionCol py-1 rounded-sm px-12  font-semibold">
          Sell
        </button>
      </div>
    </div>
  );
};

export default Header;
