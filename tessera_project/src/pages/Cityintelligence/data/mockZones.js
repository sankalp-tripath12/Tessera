

export function getHealthColor(score) {
  if (score >= 65) return '#22c55e'
  if (score >= 50) return '#eab308'
  if (score >= 35) return '#f97316'
  return '#ef4444'
}

export function getHealthLabel(score) {
  if (score >= 80) return 'Excellent'
  if (score >= 65) return 'Good'
  if (score >= 50) return 'Moderate'
  if (score >= 35) return 'Warning'
  return 'Critical'
}

export const ZONES = [
  {
    id: 'z1',
    name: 'Zone 1',
    label: 'Koramangala',
    lat: 12.9279,
    lng: 77.6271,
    population: '1,42,000',
    healthScore: 84,
    metrics: { air_quality: 62, traffic: 55, noise: 51 },
  },
  {
    id: 'z2',
    name: 'Zone 2',
    label: 'Indiranagar',
    lat: 12.9784,
    lng: 77.6408,
    population: '98,000',
    healthScore: 71,
    metrics: { air_quality: 75, traffic: 68, noise: 60 },
  },
  {
    id: 'z3',
    name: 'Zone 3',
    label: 'Whitefield',
    lat: 12.9698,
    lng: 77.7499,
    population: '2,10,000',
    healthScore: 52,
    metrics: { air_quality: 110, traffic: 81, noise: 72 },
  },
  {
    id: 'z4',
    name: 'Zone 4',
    label: 'Jayanagar',
    lat: 12.9308,
    lng: 77.5838,
    population: '87,000',
    healthScore: 88,
    metrics: { air_quality: 48, traffic: 45, noise: 48 },
  },
  {
    id: 'z5',
    name: 'Zone 5',
    label: 'Electronic City',
    lat: 12.8452,
    lng: 77.6602,
    population: '1,85,000',
    healthScore: 41,
    metrics: { air_quality: 130, traffic: 88, noise: 75 },
  },
]

export const TICKER_MESSAGES = [
  { text: 'Zone 5: AQI spiked to 148 — health score dropped to 41', color: '#ef4444' },
  { text: 'Zone 3: Infrastructure decay detected — score 52 pts',   color: '#f97316' },
  { text: 'Zone 2: Traffic surge — congestion ongoing 3 hrs',       color: '#f97316' },
  { text: 'Zone 4: All metrics nominal — city health 88 pts',       color: '#22c55e' },
  { text: 'Zone 1: Noise anomaly — 1.8 sigma above daily average',  color: '#eab308' },
]