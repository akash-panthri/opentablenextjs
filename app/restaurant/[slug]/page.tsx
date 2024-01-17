
import React from "react";

import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";


export default function RestaurantDetails() {
    return (
  <>
  
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */} {/* TITLE */}
       <Title />
        {/* TITLE */} {/* RATING */}
       <Rating />
        {/* RATING */} {/* DESCRIPTION */}
       <Description />
        {/* DESCRIPTION */} {/* IMAGES */}
       <Images />
        {/* IMAGES */} {/* REVIEWS */}
    <Reviews />
        {/* REVIEWS */}
      </div>
      <div className="w-[27%] relative text-reg">
       <ReservationCard />
      </div>
   
    </>    
  


    )
};
