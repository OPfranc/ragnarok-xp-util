import { Monster } from '../data/monsters'


type GetMultipliedExp = {
  playerLevel: number
  monster: Monster
}

export function getMultipliedExp({ playerLevel, monster }: GetMultipliedExp) {
  const levelDifference = (monster.level || 0) - playerLevel

  if (levelDifference > 15) return 0.4
  if (levelDifference === 15) return 1.15
  if (levelDifference === 14) return 1.2
  if (levelDifference === 13) return 1.25
  if (levelDifference === 12) return 1.3
  if (levelDifference === 11) return 1.35
  if (levelDifference === 10) return 1.4
  if (levelDifference === 9) return 1.35
  if (levelDifference === 8) return 1.3
  if (levelDifference === 7) return 1.25
  if (levelDifference === 6) return 1.20
  if (levelDifference === 5) return 1.15
  if (levelDifference === 4) return 1.1
  if (levelDifference === 3) return 1.05
  if (levelDifference === 2) return 1.0
  if (levelDifference === 1) return 1.0
  if (levelDifference === 0) return 1.0
  if (levelDifference < -30) return 0.1
  if (levelDifference < -25) return 0.35
  if (levelDifference < -20) return 0.6
  if (levelDifference < -15) return 0.85
  if (levelDifference < -10) return 0.9
  if (levelDifference < -5) return 0.95
  return 1.0
}
