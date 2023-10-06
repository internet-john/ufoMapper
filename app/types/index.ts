interface UfoSighting {
  datetime: string;
  city: string;
  state: string;
  country: string;
  shape: string;
  durationSeconds: string;
  durationHours: {
    min: string;
  };
  comments: string;
  datePosted: string;
  latitude: string | number;
  longitude: string | number;
}
