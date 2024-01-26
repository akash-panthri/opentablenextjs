import React from "react";

import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import {  PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient()
const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },

  });
  if(!restaurant){
    notFound()
    
  }
  return restaurant.items;
};

export default async function RestaurantMenu({params}:{params:{slug:string}}) {
  const menu = await fetchRestaurantMenu(params.slug)
    return(
      <> 
 


      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar slug={params.slug} />
        {/* RESAURANT NAVBAR */} {/* MENU */}
       <Menu menu={menu} />
        {/* MENU */}
      </div>
   
     

    </>
    )
};
