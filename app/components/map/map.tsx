"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";

const Map = () => {
  const ref = useRef();

  const center = { lat: 37.7749, lng: -122.4194 };
  const zoom = 8;

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    loader.load().then(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  });

  return (
    <div
      id="map"
      ref={ref}
      style={{ width: "500px", height: "500px", position: "relative" }}
    ></div>
  );
};

export default Map;
