const sightings = require("../../../api/ufo_sightings.json");
import stateMatcher from "@/app/api/utils/stateMatcher";

import { Suspense } from "react";
import Loading from "./loading";
import Map from "@/app/components/map/map";

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
  const { latitude, longitude } = data[0];
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
      <header className="text-4xl mb-4">{state}</header>
      {/* <div className="block md:grid md:grid-cols-2 lg:grid-cols-3 gap-10"> */}
      <Suspense fallback={<Loading />}>
        {/* {data.map((sighting: UfoSighting) => (
            <div className="border rounded-lg p-2">
              <p>{sighting.datetime}</p>
              <p>{sighting.city}</p>
              <p>{sighting.comments}</p>
            </div>
          ))} */}
        <Map state={state} sightingsCoords={sightingsCoords} />
      </Suspense>
      {/* </div> */}
    </div>
  );
};

export default StatePage;
