import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  const position = [48.92532, 24.70516];

  return (
    <div>
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
        <Marker position={position}>
          <Popup>
            Магазин 100 Гц <br /> м.Івано-Франківськ, Тичини 19а
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
