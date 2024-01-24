import React from "react";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface SearchParams { city?: string, cuisine?: string, price?: PRICE };
const select = {
  id: true,
  name: true,
  main_image: true,
  price: true,
  cuisine: true,
  location: true,
  slug: true,
  reviews:true
};
const fetchRestaurantByCity = async (searchParams: SearchParams) => {
  const where :any = {}


  if(searchParams.city){
    const location= {
      name: {
        equals: searchParams.city.toLowerCase()
      },
    }
    where.location = location
  }
  if(searchParams.cuisine){
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase()
      },
    }
    where.cuisine = cuisine
  }
  if(searchParams.price){
    const price = {
      name: {
        equals: searchParams.price
      },
    }
    where.price = price
  }
 
  return await prisma.restaurant.findMany({
    where,
    select,
  });
};
const fetchLocations = async () => {
  return await prisma.location.findMany();
};
const fetchCuisines = async () => {
  return await prisma.cuisine.findMany();
};
export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams} />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <SearchRestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </>
          ) : (
            <p>Sorry, we found no Restaurant in this area</p>
          )}
        </div>
      </div>
    </>
  );
}
