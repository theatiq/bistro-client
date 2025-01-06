import React from "react";
import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaRProject,
  FaSearch,
  FaUsers,
  FaUtensils,
  FaVoicemail,
} from "react-icons/fa";
import { FaH } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // todo get isAdmin value from database
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to={"/dashboard/adminHome"}
                  className={"flex gap-2 items-center"}
                >
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/addItems"}
                  className={"flex gap-2 items-center"}
                >
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manageItems"}
                  className={"flex gap-2 items-center"}
                >
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/bookings"}
                  className={"flex gap-2 items-center"}
                >
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/users"}
                  className={"flex gap-2 items-center"}
                >
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/dashboard/userHome"}
                  className={"flex gap-2 items-center"}
                >
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/reservation"}
                  className={"flex gap-2 items-center"}
                >
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/cart"}
                  className={"flex gap-2 items-center"}
                >
                  <MdShoppingCart></MdShoppingCart>My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/review"}
                  className={"flex gap-2 items-center"}
                >
                  <FaRProject></FaRProject> Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/bookings"}
                  className={"flex gap-2 items-center"}
                >
                  <FaList></FaList> Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* Shared navlinks */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"} className={"flex gap-2 items-center"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"} className={"flex gap-2 items-center"}>
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/order/contact"}
              className={"flex gap-2 items-center"}
            >
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
