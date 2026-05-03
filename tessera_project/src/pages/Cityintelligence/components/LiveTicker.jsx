

import { useState, useEffect } from 'react'
import { TICKER_MESSAGES } from '../data/mockZones'

export default function LiveTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TICKER_MESSAGES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const current = TICKER_MESSAGES[index]

  return (
    <div style={{
      background: '#0d1422',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 20px',
    }}>

      {/* Pulsing red LIVE dot */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#ef4444',
          boxShadow: '0 0 0 2px rgba(239,68,68,0.3)',
        }} />
        <span style={{ fontSize: '10px', color: '#ef4444', fontWeight: 500, letterSpacing: '0.1em' }}>
          LIVE
        </span>
      </div>

      {/* Divider */}
      <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.1)' }} />

      {/* Message */}
      <span style={{ fontSize: '12px', color: '#94a3b8' }}>
        {current.text}
      </span>

      {/* Severity dot on the right */}
      <div style={{
        marginLeft: 'auto',
        width: '8px', height: '8px',
        borderRadius: '50%',
        background: current.color,
        flexShrink: 0,
      }} />

    </div>
  )
}