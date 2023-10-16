const sightings = require("../../../api/ufo_sightings.json");
import stateMatcher from "@/app/api/utils/stateMatcher";

import { Suspense } from "react";
import Loading from "./loading";
import UfoMap from "@/app/components/map/map";

const getSightings = (state: string) => {
  const selectedState = stateMatcher(state);
  const data = sightings.filter(
    (event: UfoSighting) => event.state === selectedState
  );

  return data;
};

const StatePage = ({ params }: { params: { state: string } }) => {
  const state = params.state.replaceAll(/%20/g, " ");
  const data = getSightings(state);
  const dataByCity = data.reduce((acc, sighting) => {
    const city = sighting.city;
    if (acc.has(city)) {
      const list = acc.get(city);
      acc.set(city, [...list, sighting]);
    } else {
      acc.set(city, [sighting]);
    }

    return acc;
  }, new Map());
  console.log("dataByCity", dataByCity);
  const sightingsCoords = data.map(
    ({
      latitude,
      longitude,
    }: {
      latitude: string | number;
      longitude: string | number;
    }) => ({
      lat: parseFloat(latitude),
      lng: parseFloat(longitude),
    })
  );
  return (
    <div className="m-4">
      <header className="text-4xl mb-4 flex justify-between">
        <span>{state}</span>
        <span className="hidden">{"switch to map view"}</span>
      </header>
      <div className="block md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Suspense fallback={<Loading />}>
          {data.map((sighting: UfoSighting) => (
            <div className="border rounded-lg p-2">
              <p className="text-xs">{sighting.datetime}</p>
              <p className="text-xs">{`${sighting.city[0]?.toUpperCase()}${sighting.city?.slice(
                1
              )}`}</p>
              <p className="mt-4 text-md">{`${sighting.comments[0]?.toUpperCase()}${sighting.comments?.slice(
                1
              )}`}</p>
            </div>
          ))}
          {/* <UfoMap state={state} sightingsCoords={sightingsCoords} /> */}
        </Suspense>
      </div>
    </div>
  );
};

export default StatePage;
