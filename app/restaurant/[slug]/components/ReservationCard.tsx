"use client"
import { partySizes,times } from "../../../../data/index";//would work fine witout specifying 'index' but i prefer it;
import DatePicker from "react-datepicker";
import React, { useState } from 'react'

export default function ReservationCard({openTime, closeTime}:{openTime:string; closeTime:string}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };


  const filterTimeByRestaurantOpenWindow = () => {
    const timesWithinWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesWithinWindow;
  };
  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
    <div className="text-center border-b pb-2 font-bold">
      <h4 className="mr-7 text-lg">Make a Reservation</h4>
    </div>
    <div className="my-3 flex flex-col">
      <label htmlFor="">Party size</label>
      <select name="" className="py-3 border-b font-light" id="">
        {partySizes.map(partySize =>(
          <option value={partySize.value} key={partySize.value}>{partySize.label}</option>
        ))}
      </select>
    </div>
    <div className="flex justify-between">
      <div className="flex flex-col w-[48%]">
        <label htmlFor="">Date</label>
        <DatePicker selected={selectedDate} onChange={handleChangeDate}
            className="py-3 borber-b font-light text-reg w-24"
            dateFormat="MMMM d"
            wrapperClassName="w-[48%]"
            />
      </div>
      <div className="flex flex-col w-[48%]">
        <label htmlFor="">Time</label>
        <select name="" id="" className="py-3 border-b font-light">
        {filterTimeByRestaurantOpenWindow().map(time =>(
          <option value={time.time} key={time.time}>{time.displayTime}</option>
        ))}
        </select>
      </div>
    </div>
    <div className="mt-5">
      <button
        className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
      >
        Find a Time
      </button>
    </div>
  </div>
  )
}
