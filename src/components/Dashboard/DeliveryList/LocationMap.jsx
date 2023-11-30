/* eslint-disable react/prop-types */
// @ts-nocheck
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = ({ locationLatitude, locationLongtitude }) => {
  return (
    <MapContainer
      center={[locationLatitude, locationLongtitude]}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[locationLatitude, locationLongtitude]}></Marker>
    </MapContainer>
  );
};

export default LocationMap;
