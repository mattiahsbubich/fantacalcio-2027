import type { PlayerRole } from '../types/player';

export interface PlayerPairing {
  id: string;
  role: PlayerRole;
  playerIds: string[];
  title: string;
  description: string;
}

export const playerPairings: PlayerPairing[] = [];