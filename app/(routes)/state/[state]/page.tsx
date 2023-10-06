const sightings = require("../../../api/ufo_sightings.json");

const getSightings = (state: string) => {
  const data = sightings.filter((event) => event.city === "germantown");

  return data;
};

const StatePage = ({ params }: { params: { state: string } }) => {
  const data = getSightings(params.state);

  return (
    <div>
      <h1>{params.state}</h1>
      <div>
        {data.map((sighting) => (
          <div>{sighting.comments}</div>
        ))}
      </div>
    </div>
  );
};

export default StatePage;
