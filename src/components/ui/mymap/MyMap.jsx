import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import style from "./MyMap.module.css";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MyMap() {
  const position = [-34.596649866952575, -58.44277223304099];

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
  });

  return (
    <div className={style.mapWrapper}>
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} className={style.leafletContainer}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />

        <Marker position={position}>
          <Popup>
            <div className={style.popupContent}>
              <p><strong>Estamos aquí </strong></p>
              <a style={{color: "white"} } href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className={style.directionsBtn}>
                Cómo llegar
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
