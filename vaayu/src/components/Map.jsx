import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map(props) {
  return (
    <MapContainer
      center={[props.latitude, props.longitude]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.latitude, props.longitude]} />
    </MapContainer>
  );
}
