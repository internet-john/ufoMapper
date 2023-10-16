"use client";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useMemo, useRef } from "react";

const GoogleMap = ({
  state,
  sightingsCoords,
}: {
  state: string;
  sightingsCoords: Array<[String, String]>;
}) => {
  const ref = useRef();
  let map;
  let geoCoder;
  let center;
  let coordsList = sightingsCoords.slice(0, 250);

  const zoom = 8;

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    loader.load().then(() => {
      geoCoder = new window.google.maps.Geocoder({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEOCODE_API_KEY,
      });
      geoCoder.geocode({ address: state }, (results, status) => {
        if (status === "OK") {
          center = results[0]?.geometry.location;
        }
      });
      map = new window.google.maps.Map(ref.current, {
        center: center ?? sightingsCoords[0],
        zoom,
      });
      coordsList.forEach(({ lat, lng }) => {
        new google.maps.Marker({
          map,
          position: { lat, lng },
        });
      });
    });
  });

  return (
    <div className="m-4 h-screen w-auto relative" id="map" ref={ref}></div>
  );
};

export default GoogleMap;
