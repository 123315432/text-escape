import type { Mission } from '../../core/types'
import { castleMission } from './castle'
import { tombMission } from './tomb'
import { operaMission } from './opera'
import { concessionMission } from './concession'
import { cyberpunkMission } from './cyberpunk'
import { timeloopMission } from './timeloop'
import { mirrorMission } from './mirror'
import { trapsMission } from './traps'
import { innMission } from './inn'
import { pirateMission } from './pirate'
import { libraryMission } from './library'
import { puppetMission } from './puppet'
import { archiveMission } from './archive'
import { dreamMission } from './dream'
import { metaMission } from './meta'

export const MISSIONS: Record<string, Mission> = {
  [castleMission.id]: castleMission,
  [tombMission.id]: tombMission,
  [operaMission.id]: operaMission,
  [concessionMission.id]: concessionMission,
  [cyberpunkMission.id]: cyberpunkMission,
  [timeloopMission.id]: timeloopMission,
  [mirrorMission.id]: mirrorMission,
  [trapsMission.id]: trapsMission,
  [innMission.id]: innMission,
  [pirateMission.id]: pirateMission,
  [libraryMission.id]: libraryMission,
  [puppetMission.id]: puppetMission,
  [archiveMission.id]: archiveMission,
  [dreamMission.id]: dreamMission,
  [metaMission.id]: metaMission,
}

export const DEFAULT_MISSION_ID = castleMission.id
