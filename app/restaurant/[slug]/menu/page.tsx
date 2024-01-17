import React from "react";
import NavBar from "../../../components/NavBar";
import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import Header from "../components/Header";

export default function RestaurantMenu() {
    return(
        <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
   {/* NAVBAR */}
   <NavBar />
   
   {/* NAVBAR END */} {/* HEADER */}
   <Header />
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */} {/* MENU */}
       <Menu />
        {/* MENU */}
      </div>
    </div>
    {/* DESCRIPTION PORTION */}
  </main>
</main>

    )
};
