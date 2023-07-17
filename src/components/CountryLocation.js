"use client";
import React, {useState, useEffect } from 'react';

const CountryLocation = () => {
    const [country, setCountry] = useState("UK")

    //get ip country name
    useEffect(() => {
        fetch(
        `https://ipinfo.io/json/?key=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}`
        )
   .then((res) => res.json())
   .then((data) => setCountry(data.country));
   }, []);
  return  <div> {country}</div>;
  
};

export default CountryLocation;