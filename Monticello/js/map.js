const key = "ADQmgODBGXby1BemQ0IS";
const map = L.map("map").setView([40.675906, -73.895785], 14);

L.tileLayer(
  `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`,
  {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution:
      '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
    crossOrigin: true,
  }
).addTo(map);

const markerIcon = L.icon({
  iconUrl: "https://www.svgrepo.com/show/399139/location-man-alt.svg",
  iconSize: [50, 50],
});

let marker = L.marker([40.675906, -73.895785], {
  icon: markerIcon,
}).addTo(map);
