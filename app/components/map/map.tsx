"use client";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Loader } from "@googlemaps/js-api-loader";

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useEffect, useRef, ReactElement } from "react";
import ReactDOM from "react-dom";

const render = (status: Status): ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef();

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
}

function Map() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return <MyMapComponent center={center} zoom={zoom} />;
}

export default Map;
