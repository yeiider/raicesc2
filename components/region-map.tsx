"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

export type CoveragePoint = {
  city: string
  lat: number
  lng: number
  address?: string
  zones: string[]
  color: string
}

function pinIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `
      <span style="position:relative;display:block;width:26px;height:26px;">
        <span style="position:absolute;inset:0;border-radius:9999px;background:${color};opacity:.35;animation:rc-ping 1.8s cubic-bezier(0,0,.2,1) infinite;"></span>
        <span style="position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:9999px;background:${color};border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.35);"></span>
      </span>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -12],
  })
}

function FitBounds({ points }: { points: CoveragePoint[] }) {
  const map = useMap()
  useEffect(() => {
    const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng] as [number, number]))
    map.fitBounds(bounds, { padding: [60, 60] })
  }, [map, points])
  return null
}

export default function RegionMap({ points }: { points: CoveragePoint[] }) {
  return (
    <div className="group relative h-[440px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl ring-1 ring-white/5 md:h-[540px]">
      <style>{`@keyframes rc-ping{75%,100%{transform:scale(2.2);opacity:0}}
        .leaflet-container{font-family:inherit;background:#0a1024}
        .leaflet-tile{filter:invert(1) hue-rotate(180deg) brightness(.92) contrast(.9) saturate(.8)}
        .leaflet-control-attribution{background:rgba(10,16,36,.6)!important;color:rgba(255,255,255,.45)!important}
        .leaflet-control-attribution a{color:rgba(255,255,255,.6)!important}
        .leaflet-bar a{background:rgba(10,16,36,.85)!important;color:#fff!important;border-color:rgba(255,255,255,.12)!important}
        .leaflet-bar a:hover{background:rgba(29,78,216,.85)!important}
        .leaflet-popup-content-wrapper{border-radius:14px;background:#0f1836;color:#fff;box-shadow:0 10px 30px rgba(0,0,0,.45)}
        .leaflet-popup-tip{background:#0f1836}
        .leaflet-popup-content{margin:12px 14px}`}</style>
      <MapContainer
        center={[3.2, -76.47]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds points={points} />
        {points.map((p) => (
          <Marker key={p.city} position={[p.lat, p.lng]} icon={pinIcon(p.color)}>
            <Popup>
              <div className="min-w-[180px]">
                <p className="text-sm font-bold text-white">{p.city}</p>
                {p.address && <p className="mt-0.5 text-xs text-white/50">{p.address}</p>}
                <ul className="mt-2 space-y-1">
                  {p.zones.map((z) => (
                    <li key={z} className="flex items-start gap-1.5 text-xs text-white/80">
                      <span
                        className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: p.color }}
                      />
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Blend overlay: tints the map toward the navy background and softens the edges */}
      <div
        className="pointer-events-none absolute inset-0 z-[500] rounded-3xl"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 50%, transparent 55%, rgba(10,16,36,.55) 100%)",
          boxShadow: "inset 0 0 60px rgba(10,16,36,.6)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[500] rounded-3xl bg-raicesBlue/5 mix-blend-overlay" />
    </div>
  )
}
