import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useContext } from "react";
import { LanguageContext } from "./store/LanguageContext";
import { l10n } from "@/textTranslation";

const markerIcon = new Icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  const position = [48.92532, 24.70516];
  const {language} = useContext(LanguageContext)
  const mapText = l10n[language].contactsPage.map;

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""
        />
      </Helmet>
      <MapContainer
        id="map"
        className="h-96"
        center={position}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            {mapText.popup.header} <br /> {mapText.popup.address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
