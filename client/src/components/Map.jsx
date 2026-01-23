'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@/lib/leafletIconFix';

export default function Map() {
    return (
        <MapContainer
            center={[28.6139, 77.209]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '320px', width: '100%', zIndex: 0, borderRadius: '10px' }}
        >
            <TileLayer
                attribution='© OpenStreetMap contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker position={[28.6139, 77.209]}>
                <Popup>New Delhi</Popup>
            </Marker>
        </MapContainer>
    );
}
