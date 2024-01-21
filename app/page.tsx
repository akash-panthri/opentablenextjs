
import React from 'react'

import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import { PrismaClient,Cuisine, Location, PRICE } from '@prisma/client'
const prisma = new PrismaClient()


export interface RestaurantCardType{
  id:number,
  name:string,
  main_image:string,
  cuisine:Cuisine,
  location:Location,
  price:PRICE,
  slug:string
}
const fetchRestaurant =async ():Promise<RestaurantCardType[]>=>{
  const restaurants = prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      cuisine:true,
      location:true,
      price:true,
      slug:true
    }
  })
  return restaurants;
}
export default async function Home() {
const restaurants = await fetchRestaurant()
  return (
  
    <main>
      {/* HEADER */}
    <Header />
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        {restaurants.map(restaurant =>
      (  
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        )
        )
 
        }
        {/* CARD */}
      </div>
      {/* CARDS */}
   
</main>

  )
}
