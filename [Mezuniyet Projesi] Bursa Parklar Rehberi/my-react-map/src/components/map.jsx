import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import Papa from 'papaparse'; // PapaParse kütüphanesi
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(10.5);
  maptilersdk.config.apiKey = 'okqNMY2PkAbUK6LsIIjV';

  useEffect(() => {
    if (map.current) return; // haritanın birden fazla kez başlatılmasını engeller

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [29.074202, 40.193298], // Bursa'nın koordinatları
      zoom: zoom
    });

    // CSV dosyasını al ve işle
    Papa.parse('https://acikyesil.bursa.bel.tr/geoserver/ckan/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=ckan%3Abursa_park&outputFormat=csv', {
    download: true,
    header: true,
    complete: (results) => {
      results.data.forEach(park => {
        const name = park.ad || "PARKIN ADI BULUNAMIYOR"; // Parkın adı
  
        const coordinates = JSON.parse(park.geojson); // GeoJSON formatındaki koordinatlar
        const coords = coordinates.coordinates[0][0]; // İlk koordinatlar listesi
        const midpointIndex = Math.floor(coords.length / 2); // Koordinat listesinin orta noktasının indeksi
        const midpoint = coords[midpointIndex]; // Ortadaki nokta
  
        console.log(midpoint);
  
        const marker = new maptilersdk.Marker({ color: "#FF0000" })
          .setLngLat(midpoint) // Orta noktayı al
          .setPopup(new maptilersdk.Popup().setHTML("<p class='popup'>" + name + "</p>")) // İsim bilgisi içeren bir popup ekle
          .addTo(map.current);
      });
    },
    error: (error) => {
      console.error('Hata:', error);
    }
  });
  
  }, [zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
