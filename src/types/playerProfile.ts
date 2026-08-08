import type { PlayerRole } from './player';

export type PlayerTier =
  | 'Top'
  | 'Semitop'
  | 'Da Abbinare'
  | 'Secondi Scomodi'
  | 'Dimarco'
  | '1° Slot Relativo'
  | '2° Slot Relativo'
  | '3° Slot Relativo'
  | '4° Slot Relativo'
  | '5° Slot Relativo'
  | '6° Slot Relativo'
  | '7° Slot Relativo'
  | '8° Slot Relativo'
  | 'Altri'
  | 'Non assegnata';

export type RatingValue = 1 | 2 | 3 | 4;

export interface PlayerProfile {
  /**
   * Ruolo ufficiale del giocatore nel listone.
   */
  role: PlayerRole;

  /**
   * Ruolo utilizzato nelle nostre fasce.
   *
   * Normalmente coincide con role.
   * Serve quando la fonte delle fasce assegna
   * un ruolo differente rispetto al PDF.
   */
  tierRole?: PlayerRole;

  playerName: string;

  /**
   * Facoltativo, ma utile per distinguere
   * omonimi presenti nel listone.
   */
  team?: string;

  tier: PlayerTier;

  /**
   * Posizione personale nella fascia.
   */
  tierOrder?: number | null;

  percentage: number | null;

  starterRating: RatingValue | null;
  reliabilityRating: RatingValue | null;
  integrityRating: RatingValue | null;

  notes: string;
}

export type PlayerProfiles = Record<
  string,
  PlayerProfile
>;

export function getPlayerProfileKey(
  role: PlayerRole,
  playerName: string,
  team?: string
): string {
  const normalizedName = playerName
    .trim()
    .toLocaleUpperCase('it');

  const normalizedTeam = team
    ?.trim()
    .toLocaleUpperCase('it');

  if (normalizedTeam) {
    return `${role}:${normalizedTeam}:${normalizedName}`;
  }

  return `${role}:${normalizedName}`;
}

export function calculateCreditsFromPercentage(
  percentage: number | null,
  totalBudget = 500
): number | null {
  if (percentage === null) {
    return null;
  }

  return Math.round(
    totalBudget * (percentage / 100)
  );
}