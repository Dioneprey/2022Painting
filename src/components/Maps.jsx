import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 42.347652,
    lng:  -71.557337
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
        {
          featureType: 'poi',
          stylers: [{ visibility: 'off' }]
        }
      ]
  };
  
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

function Maps() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: API_KEY,
      });
  return isLoaded ? (
    <div className='grayscale'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={options}
        >
          {
            <Marker 
                position={center}
            />
          }
          <>
          </>
        </GoogleMap>
    </div>
  ) : (<></>)
}

export default Maps