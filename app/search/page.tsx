import React from "react";

import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const select= {
   id: true,
   name: true,
   main_image: true,
   price:true,
   cuisine:true,
   location:true,
   slug: true,
 }
const fetchRestaurantByCity =async (city:string)=>{
   if(!city) return await prisma.restaurant.findMany({select});
   return await prisma.restaurant.findMany({
      where: {
        location: {
         name: {
            equals: city.toLowerCase()
         },
        }
      },
      select,
  
    });
    
}
 export default async function Search({searchParams}:{searchParams:{city:string}}) {
   const restaurants = await fetchRestaurantByCity(searchParams.city)
    return (
       <>
  <Header />
    <div className="flex py-4 m-auto w-2/3 justify-between items-start"> 
  <SearchSideBar />
      <div className="w-5/6"> 
      {restaurants.length ? 
      (
         <>
         {restaurants.map(restaurant=>(

            <SearchRestaurantCard key={restaurant.id} restaurant={restaurant} />   
         )
            
            )}
         </>
):(<p>Sorry, we found no Restaurant in this area</p>)
      }   
      </div>
    </div>

       </>

    )
 }