export type PlayerRole = 'P' | 'D' | 'C' | 'A';

export interface Player {
  id: string;
  name: string;
  team: string;
  role: PlayerRole;
  listPrice: number;
}
