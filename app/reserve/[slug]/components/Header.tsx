import React from 'react'

export default function Header({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <div>
    <h3 className="font-bold">You&apos;re almost done!</h3>
    <div className="mt-5 flex">
      <img
        src={image}
        alt=""
        className="w-32 h-18 rounded"
      />
      <div className="ml-4">
        <h1 className="text-3xl font-bold">
          {name}
        </h1>
        <div className="flex mt-3">
          <p className="mr-6">Tues, 22, 2023</p>
          <p className="mr-6">7:30 PM</p>
          <p className="mr-6">3 people</p>
        </div>
      </div>
    </div>
  </div>
  )
}
