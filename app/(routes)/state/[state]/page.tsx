const sightings = require("../../../api/ufo_sightings.json");

import stateMatcher from "@/app/api/utils/stateMatcher";

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
  return (
    <div>
      <h1>{state}</h1>
      <div className="grid">
        {data.map((sighting: UfoSighting) => (
          <div className="m-4 max-w-sm">
            <p>{sighting.datetime}</p>
            <p>{sighting.city}</p>
            <p>{sighting.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatePage;
