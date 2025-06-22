import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState, useRef } from "react";

// Import marker icon fix
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to fly to matched district
const MapFlyTo = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 10); // zoom level 10
    }
  }, [position, map]);

  return null;
};

const CoverageMap = ({ serviceCenters }) => {
  const [search, setSearch] = useState("");
  const [targetPosition, setTargetPosition] = useState(null);
  const inputRef = useRef();

  // When the user presses enter or clicks search
  const handleSearch = (e) => {
    e.preventDefault();
    const query = search.trim().toLowerCase();
    if (!query) return;

    const match = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(query)
    );

    if (match) {
      setTargetPosition([match.latitude, match.longitude]);
    } else {
      alert("District not found!");
    }
  };

  const center = [24.426, 90.7829];

  return (
    <div className="space-y-4">
      {/* 🔍 Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center gap-3 mb-6"
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Search district..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {/* 🗺️ Map */}
      <div className="h-[600px] w-full rounded-xl shadow-lg overflow-hidden">
        <MapContainer
          center={center}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Move map if a district is matched */}
          {targetPosition && <MapFlyTo position={targetPosition} />}

          {serviceCenters.map((district, idx) => (
            <Marker
              key={idx}
              position={[district.latitude, district.longitude]}
            >
              <Popup>
                <strong>{district.district}</strong>
                <br />
                Region: {district.region}
                <br />
                Areas: {district.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageMap;
