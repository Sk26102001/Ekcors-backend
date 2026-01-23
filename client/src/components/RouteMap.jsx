'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import '@/lib/leafletIconFix';

export default function RouteMap() {
    useEffect(() => {
        const map = L.map('route-map').setView([28.6139, 77.209], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
        }).addTo(map);

        L.Routing.control({
            waypoints: [
                L.latLng(28.6139, 77.209), // Start
                L.latLng(28.7041, 77.1025), // End
            ],
            routeWhileDragging: false,
            show: false,
            addWaypoints: false,
        }).addTo(map);

        return () => map.remove();
    }, []);

    return <div id="route-map" style={{ height: '400px', width: '100%' }} />;
}
