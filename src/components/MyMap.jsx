import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import style from "./style/myMap.module.css";

function MyMap() {
  const position = [-34.596649866952575, -58.44277223304099];

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

  return (
    <div className={style.mapWrapper}>
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} className={style.leafletContainer}>
        {/* Mapa estilo oscuro */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        
        <Marker position={position}>
          <Popup>
            <div className={style.popupContent}>
              <p><strong>Estamos aquí 📍</strong></p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className={style.directionsBtn}>
                Cómo llegar 🚗
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
