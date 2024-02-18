"use client";

import React, { useEffect, useState } from 'react'
import useReservation from '../../../../hooks/useReservation';
import { CircularProgress } from '@mui/material';

export default function Form({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}) {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerPhone: "",
    bookerEmail: "",
    bookerOccasion: "",
    bookerRequest: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [disabled, setDisabled] = useState(true);
  const { error, loading, createReservation } = useReservation();
  const [day, time] = date.split("T");
  const [didBook, setDidBook] = useState(false);

  const handleClick = async () => {
    const booking = await createReservation({
      slug,
      partySize,
      time,
      day,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerEmail: inputs.bookerEmail,
      bookerOccasion: inputs.bookerOccasion,
      bookerPhone: inputs.bookerPhone,
      bookerRequest: inputs.bookerRequest,
      setDidBook,
    });
  };

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    ) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [inputs]);

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
    <input
      type="text"
      className="border rounded p-3 w-80 mb-4"
      placeholder="First name"
      name="bookerFirstName"
      value={inputs.bookerFirstName}
      onChange={handleChangeInput}
    />
    <input
      type="text"
      className="border rounded p-3 w-80 mb-4"
      placeholder="Last name"
      name="bookerLastName"
      value={inputs.bookerLastName}
      onChange={handleChangeInput}
    />
    <input
      type="text"
      className="border rounded p-3 w-80 mb-4"
      placeholder="Phone number"
      name="bookerPhone"
      value={inputs.bookerPhone}
      onChange={handleChangeInput}
    />
    <input
      type="text"
      className="border rounded p-3 w-80 mb-4"
      placeholder="Email"
      name="bookerEmail"
      value={inputs.bookerEmail}
      onChange={handleChangeInput}
    />
    <input
      type="text"
      className="border rounded p-3 w-80 mb-4"
      placeholder="Occasion (optional)"
      name="bookerOccasion"
      value={inputs.bookerOccasion}
      onChange={handleChangeInput}
    />
    <input
      type="text"
      className="border rounded p-3 w-80 mb-4"
      placeholder="Requests (optional)"
      name="bookerRequest"
      value={inputs.bookerRequest}
      onChange={handleChangeInput}
    />
    <button
    disabled={disabled || loading}
      className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
    >
     {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Complete reservation"
            )}
    </button>
    <p className="mt-4 text-sm">
      By clicking “Complete reservation” you agree to the OpenTable Terms
      of Use and Privacy Policy. Standard text message rates may apply.
      You may opt out of receiving text messages at any time.
    </p>
  </div>
  )
}
