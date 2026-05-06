

import { useDashboardStore } from '../store/useDashboardStore'
import { getHealthColor } from '../data/mockZones'

function Card({ label, value, note, noteColor }) {
  return (
    <div style={{
      background: '#0d1422',
      border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: '12px',
      padding: '14px 16px',
      flex: 1,
    }}>
      <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
        {label}
      </div>
      <div style={{ fontSize: '24px', fontWeight: 500, color: '#e2e8f0', marginBottom: '2px' }}>
        {value}
      </div>
      {note && (
        <div style={{ fontSize: '11px', color: noteColor || '#64748b' }}>
          {note}
        </div>
      )}
    </div>
  )
}

export default function StatsBar() {
  const zones = useDashboardStore((s) => s.zones)

  const avgHealth = Math.round(
    zones.reduce((sum, z) => sum + z.healthScore, 0) / zones.length
  )

  return (
    <div style={{ display: 'flex', gap: '12px', padding: '16px 20px' }}>
      <Card label="Zones Monitored" value={zones.length}  note="Bangalore live" />
      <Card label="Active Alerts"   value={3}             note="2 critical"      noteColor="#ef4444" />
      <Card label="City Health"     value={avgHealth}     note="Moderate"        noteColor={getHealthColor(avgHealth)} />
      <Card label="Reports Today"   value={24}            note="+6 from yesterday" noteColor="#4f7cff" />
    </div>
  )
}