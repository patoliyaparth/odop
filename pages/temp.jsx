import { useLoadScript } from '@googlemaps/js-api-loader';

const temp = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <GoogleMap
      center={{ lat: 37.7833, lng: -122.4167 }}
      zoom={13}
    />
  );
};
export default temp;