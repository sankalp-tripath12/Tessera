

import { useDashboardStore } from '../store/useDashboardStore'
import { getHealthColor, getHealthLabel } from '../data/mockZones'

export default function ZoneSummaryCard({ zone }) {
  const selectedZoneId = useDashboardStore((s) => s.selectedZoneId)
  const selectZone     = useDashboardStore((s) => s.selectZone)
  const clearSelection = useDashboardStore((s) => s.clearSelection)

  const isSelected = selectedZoneId === zone.id
  const color      = getHealthColor(zone.healthScore)
  const label      = getHealthLabel(zone.healthScore)

  return (
    <div
      onClick={() => isSelected ? clearSelection() : selectZone(zone.id)}
      style={{
        background:   isSelected ? `${color}18` : '#0d1422',
        border:       `1px solid ${isSelected ? color : 'rgba(255,255,255,0.05)'}`,
        borderRadius: '12px',
        padding:      '12px',
        cursor:       'pointer',
        transition:   'all 0.2s',
      }}
    >
      {/* Top row: name and score */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 500, color: '#e2e8f0' }}>{zone.label}</div>
          <div style={{ fontSize: '11px', color: '#64748b' }}>{zone.name} · {zone.population}</div>
        </div>

        {/* Score circle */}
        <div style={{
          width: '40px', height: '40px', borderRadius: '50%',
          border: `2px solid ${color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: '13px', fontWeight: 500, color }}>{zone.healthScore}</span>
        </div>
      </div>

      {/* Health label badge */}
      <div style={{
        display: 'inline-block',
        fontSize: '10px', fontWeight: 500,
        padding: '2px 8px', borderRadius: '20px',
        background: `${color}20`, color,
        marginBottom: '8px',
      }}>
        {label}
      </div>

      {/* 3 metric pills */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
        {[
          { label: 'AQI',     value: zone.metrics.air_quality },
          { label: 'Traffic', value: zone.metrics.traffic + '%' },
          { label: 'Noise',   value: zone.metrics.noise + 'dB' },
        ].map((m) => (
          <div key={m.label} style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '6px', padding: '4px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '10px', color: '#64748b' }}>{m.label}</div>
            <div style={{ fontSize: '11px', fontWeight: 500, color: '#cbd5e1' }}>{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}