

import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import { useDashboardStore } from '../store/useDashboardStore'
import { getHealthColor, getHealthLabel } from '../data/mockZones'

export default function CityMap() {
  const zones           = useDashboardStore((s) => s.zones)
  const selectedZoneId  = useDashboardStore((s) => s.selectedZoneId)
  const selectZone      = useDashboardStore((s) => s.selectZone)
  const clearSelection  = useDashboardStore((s) => s.clearSelection)

  return (
    <div style={{
      width: '100%', height: '100%',
      borderRadius: '12px', overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.05)',
    }}>
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution="CartoDB"
        />

        {zones.map((zone) => {
          const color      = getHealthColor(zone.healthScore)
          const isSelected = zone.id === selectedZoneId

          return (
            <CircleMarker
              key={zone.id}
              center={[zone.lat, zone.lng]}
              radius={isSelected ? 18 : 13}
              pathOptions={{
                color:       color,
                fillColor:   color,
                fillOpacity: isSelected ? 0.5 : 0.25,
                weight:      isSelected ? 3 : 1.5,
              }}
              eventHandlers={{
                click: () => isSelected ? clearSelection() : selectZone(zone.id),
              }}
            >
              <Tooltip direction="top" offset={[0, -10]}>
                <div style={{ fontSize: '12px', fontWeight: 500 }}>{zone.label}</div>
                <div style={{ fontSize: '11px', color }}>
                  Score: {zone.healthScore} — {getHealthLabel(zone.healthScore)}
                </div>
              </Tooltip>
            </CircleMarker>
          )
        })}
      </MapContainer>
    </div>
  )
}