import {
  useEffect,
  useMemo
} from 'react';
import { defaultPlayerProfiles } from '../data/defaultPlayerProfiles';
import type { Player } from '../types/player';
import {
  getPlayerProfileKey,
  type PlayerProfile,
  type PlayerProfiles
} from '../types/playerProfile';
import { usePersistentState } from './usePersistentState';

const STORAGE_KEY =
  'fantacalcio:player-profiles';

const GOALKEEPER_ORDER_RESET_KEY =
  'fantacalcio:migration:goalkeeper-order-reset-v1';

export function usePlayerProfiles() {
  const [
    savedProfiles,
    setSavedProfiles
  ] = usePersistentState<PlayerProfiles>(
    STORAGE_KEY,
    {}
  );

  const profiles = useMemo(
    () => ({
      ...defaultPlayerProfiles,
      ...savedProfiles
    }),
    [savedProfiles]
  );

  /**
   * Migrazione eseguita una sola volta.
   *
   * Elimina eventuali posizioni dei portieri
   * create nelle versioni precedenti.
   *
   * Dopo questa migrazione le nuove posizioni
   * inserite manualmente dall'utente NON
   * verranno più cancellate.
   */
  useEffect(() => {
    const alreadyMigrated =
      window.localStorage.getItem(
        GOALKEEPER_ORDER_RESET_KEY
      );

    if (alreadyMigrated === 'done') {
      return;
    }

    setSavedProfiles(
      (currentProfiles) => {
        const nextProfiles: PlayerProfiles = {
          ...currentProfiles
        };

        Object.entries(
          currentProfiles
        ).forEach(
          ([key, profile]) => {
            if (
              profile.role !== 'P'
            ) {
              return;
            }

            nextProfiles[key] = {
              ...profile,
              tierOrder: null
            };
          }
        );

        return nextProfiles;
      }
    );

    window.localStorage.setItem(
      GOALKEEPER_ORDER_RESET_KEY,
      'done'
    );
  }, [setSavedProfiles]);

  function getProfile(
    player: Pick<
      Player,
      'role' | 'name' | 'team'
    >
  ): PlayerProfile | undefined {
    const specificKey =
      getPlayerProfileKey(
        player.role,
        player.name,
        player.team
      );

    const legacyKey =
      getPlayerProfileKey(
        player.role,
        player.name
      );

    return (
      profiles[specificKey] ??
      profiles[legacyKey]
    );
  }

  function updateProfile(
    profile: PlayerProfile
  ) {
    const key =
      getPlayerProfileKey(
        profile.role,
        profile.playerName,
        profile.team
      );

    setSavedProfiles(
      (currentProfiles) => ({
        ...currentProfiles,

        [key]: profile
      })
    );
  }

  function patchProfile(
    role: Player['role'],
    playerName: string,
    team: string,
    changes: Partial<PlayerProfile>
  ) {
    const specificKey =
      getPlayerProfileKey(
        role,
        playerName,
        team
      );

    const legacyKey =
      getPlayerProfileKey(
        role,
        playerName
      );

    setSavedProfiles(
      (currentProfiles) => {
        const currentProfile =
          currentProfiles[
            specificKey
          ] ??
          currentProfiles[
            legacyKey
          ] ??
          profiles[
            specificKey
          ] ??
          profiles[
            legacyKey
          ];

        const baseProfile: PlayerProfile =
          currentProfile ?? {
            role,
            playerName,
            team,
            tier:
              'Non assegnata',
            tierOrder: null,
            percentage: null,
            starterRating: null,
            reliabilityRating:
              null,
            integrityRating: null,
            notes: ''
          };

        return {
          ...currentProfiles,

          [specificKey]: {
            ...baseProfile,
            team,
            ...changes
          }
        };
      }
    );
  }

  function resetProfiles() {
    setSavedProfiles({});
  }

  return {
    profiles,
    getProfile,
    updateProfile,
    patchProfile,
    resetProfiles
  };
}