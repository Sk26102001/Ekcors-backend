'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@/lib/leafletIconFix';

export default function Map() {
    return (
        <MapContainer
            center={[25.3176, 82.9739]}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: '320px', width: '100%', zIndex: 0, borderRadius: '10px' }}
        >
            <TileLayer
                attribution='© OpenStreetMap contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Marker position={[25.3176, 82.9739]}>
                <Popup>New Delhi</Popup>
            </Marker>
        </MapContainer>
    );
}
