// app/components/LiveMap.jsx
"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/lib/leafletIconFix"; // your icon fix file

// Initial equipment positions (Bangladesh region)
const initialEquipment = [
  { id: 1, name: "Excavator CAT 330", lat: 23.8103, lng: 90.4125, status: "Operating", fuel: 65 },
  { id: 2, name: "Wheel Loader L220", lat: 23.8150, lng: 90.4180, status: "Idle", fuel: 34 },
  { id: 3, name: "Haul Truck 45T", lat: 23.8050, lng: 90.4080, status: "Moving", fuel: 71 },
  { id: 4, name: "Dozer D6", lat: 23.8080, lng: 90.4200, status: "Operating", fuel: 28 },
];

export default function LiveMap() {
  const [equipment, setEquipment] = useState(initialEquipment);

  // Simulate real-time updates (movement + fuel change every 10 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setEquipment((prev) =>
        prev.map((eq) => ({
          ...eq,
          lat: eq.lat + (Math.random() - 0.5) * 0.003,
          lng: eq.lng + (Math.random() - 0.5) * 0.003,
          fuel: Math.max(0, Math.min(100, eq.fuel + (Math.random() - 0.5) * 2)),
          status:
            Math.random() > 0.8
              ? ["Operating", "Idle", "Moving"][Math.floor(Math.random() * 3)]
              : eq.status,
        }))
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer
      center={[23.8103, 90.4125]}
      zoom={13}
      style={{ height: "320px", width: "100%", borderRadius: "0.75rem" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {equipment.map((eq) => (
        <Marker key={eq.id} position={[eq.lat, eq.lng]}>
          <Popup>
            <div className="text-black text-sm">
              <strong>{eq.name}</strong><br />
              Status: {eq.status}<br />
              Fuel: {eq.fuel.toFixed(0)}%
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}