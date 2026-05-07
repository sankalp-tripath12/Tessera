

import { create } from 'zustand'
import { ZONES } from '../data/mockZones'

export const useDashboardStore = create((set, get) => ({

  zones: ZONES,
  selectedZoneId: null,
  simulationActive: false,

  // Call this when user clicks a zone
  selectZone: (id) => set({ selectedZoneId: id }),

  // Call this to deselect
  clearSelection: () => set({ selectedZoneId: null }),

  // The demo button — drops Zone 5 score to show a crisis
  triggerSimulation: () => {
    const updated = get().zones.map((zone) => {
      if (zone.id === 'z5') {
        return {
          ...zone,
          healthScore: 23,
          metrics: { air_quality: 155, traffic: 93, noise: 80 },
        }
      }
      return zone
    })
    set({ zones: updated, simulationActive: true })
  },

  // Reset back to original data
  resetSimulation: () => set({
    zones: ZONES,
    simulationActive: false,
    selectedZoneId: null,
  }),

}))