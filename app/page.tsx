
import React from 'react'
import NavBar from './components/NavBar';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';

export default function Home() {


  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
   <NavBar />
    {/* NAVBAR */}
    <main>
      {/* HEADER */}
    <Header />
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
      <RestaurantCard />
        {/* CARD */}
      </div>
      {/* CARDS */}
    </main>
  </main>
</main>

  )
}
