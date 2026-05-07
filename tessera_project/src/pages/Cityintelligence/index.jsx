import LiveTicker        from './components/LiveTicker'
import StatsBar          from './components/StatsBar'
import CityMap           from './components/CityMap'
import ZoneSummaryCard   from './components/ZoneSummaryCard'
import { useDashboardStore } from './store/useDashboardStore'
import Navbar from '../../components/Navbar'

export default function CityIntelligence() {
  const zones             = useDashboardStore((s) => s.zones)
  const simulationActive  = useDashboardStore((s) => s.simulationActive)
  const triggerSimulation = useDashboardStore((s) => s.triggerSimulation)
  const resetSimulation   = useDashboardStore((s) => s.resetSimulation)

  return (
    <div style={{ background: '#080c14', minHeight: '100vh', color: '#e2e8f0' }}>
      <Navbar />
      <LiveTicker />

      <StatsBar />

      <div style={{
        display: 'flex',
        gap: '16px',
        padding: '0 20px 20px',
        height: 'calc(100vh - 130px)',
      }}>

        <div style={{ flex: 1 }}>
          <CityMap />
        </div>

        <div style={{
          width: '280px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          overflowY: 'auto',
        }}>

          <div>
            <div style={{ fontSize: '15px', fontWeight: 500, color: '#e2e8f0' }}>Tessera</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>City Intelligence · Bangalore</div>
          </div>

          <button
            onClick={simulationActive ? resetSimulation : triggerSimulation}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              background: simulationActive ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
              color:      simulationActive ? '#22c55e' : '#ef4444',
              border:     simulationActive ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(239,68,68,0.3)',
              transition: 'all 0.2s',
            }}
          >
            {simulationActive ? 'Reset Simulation' : 'Simulate Anomaly Event'}
          </button>

          {zones.map((zone) => (
            <ZoneSummaryCard key={zone.id} zone={zone} />
          ))}

        </div>
      </div>
    </div>
  )
}