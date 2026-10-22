import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import style from "./MyMap.module.css";

const position = [-34.596649866952575, -58.44277223304099];
const address = "Serrano 479, CABA";
const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

const markerIcon = new Icon({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MyMap() {
  return (
    <section className={style.locationCard} aria-label="Ubicación de CiaoBella">
      <div className={style.locationInfo}>
        <span className={style.eyebrow}>VENÍ A CONOCERNOS</span>
        <h2>Te esperamos</h2>
        <p className={style.address}>{address}</p>
        <p className={style.locationHint}>
          Consultá cómo llegar y encontrá la mejor ruta desde tu ubicación.
        </p>
        <a
          className={style.directionsBtn}
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo llegar
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className={style.mapWrapper}>
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={false}
          className={style.leafletContainer}
          aria-label={`Mapa de ubicación: ${address}`}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>
              <strong>CiaoBella</strong>
              <br />
              {address}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}

export default MyMap;
