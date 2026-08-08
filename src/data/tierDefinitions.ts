import type { PlayerRole } from '../types/player';
import type { PlayerTier } from '../types/playerProfile';

export const tierDefinitions: Record<
  PlayerRole,
  PlayerTier[]
> = {
  P: [
    'Top',
    'Semitop',
    'Da Abbinare',
    'Secondi Scomodi',
    'Altri'
  ],

  D: [
    'Dimarco',
    '1° Slot Relativo',
    '2° Slot Relativo',
    '3° Slot Relativo',
    '4° Slot Relativo',
    '5° Slot Relativo',
    '6° Slot Relativo',
    '7° Slot Relativo',
    '8° Slot Relativo',
    'Altri'
  ],

  C: [
    '1° Slot Relativo',
    '2° Slot Relativo',
    '3° Slot Relativo',
    '4° Slot Relativo',
    '5° Slot Relativo',
    '6° Slot Relativo',
    '7° Slot Relativo',
    '8° Slot Relativo',
    'Altri'
  ],

  A: [
    '1° Slot Relativo',
    '2° Slot Relativo',
    '3° Slot Relativo',
    '4° Slot Relativo',
    '5° Slot Relativo',
    '6° Slot Relativo',
    'Altri'
  ]
};